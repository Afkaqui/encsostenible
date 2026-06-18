import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL no configurada");
  return neon(url);
}

// GET /api/visits?page=/  →  devuelve el conteo actual sin incrementar
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || "/";
    const sql = getDb();

    await sql`
      CREATE TABLE IF NOT EXISTS visit_counter (
        page  TEXT   PRIMARY KEY,
        count BIGINT NOT NULL DEFAULT 0
      )
    `;

    const rows = await sql`
      SELECT count FROM visit_counter WHERE page = ${page}
    `;

    const count = rows.length > 0 ? Number(rows[0].count) : 0;
    return NextResponse.json({ count });
  } catch (err) {
    console.error("[visits GET]", err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// POST /api/visits  body: { page: "/" }  →  incrementa y devuelve el nuevo conteo
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const page: string = typeof body?.page === "string" ? body.page : "/";
    const sql = getDb();

    await sql`
      CREATE TABLE IF NOT EXISTS visit_counter (
        page  TEXT   PRIMARY KEY,
        count BIGINT NOT NULL DEFAULT 0
      )
    `;

    const rows = await sql`
      INSERT INTO visit_counter (page, count)
      VALUES (${page}, 1)
      ON CONFLICT (page)
      DO UPDATE SET count = visit_counter.count + 1
      RETURNING count
    `;

    const count = Number(rows[0].count);
    return NextResponse.json({ count });
  } catch (err) {
    console.error("[visits POST]", err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
