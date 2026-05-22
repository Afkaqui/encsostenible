const KEY = "enc_intranet_access";
const PASSWORD = "ID2026";

export function checkAccess(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "granted";
}

export function grantAccess(password: string): boolean {
  if (password.trim() === PASSWORD) {
    localStorage.setItem(KEY, "granted");
    return true;
  }
  return false;
}

export function revokeAccess(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(KEY);
  }
}
