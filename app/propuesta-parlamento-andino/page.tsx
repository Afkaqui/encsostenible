"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

const PDF_URL = "/propuesta-parlamento-andino.pdf";

export default function PropuestaParlamentoAndino() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive: medir el ancho del contenedor
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setLoading(false);
    },
    []
  );

  const onDocumentLoadError = useCallback(() => {
    setError(true);
    setLoading(false);
  }, []);

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.15, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.15, 0.5));

  // Ancho del PDF: se adapta al contenedor menos padding
  const pdfWidth = Math.min(containerWidth - 32, 900) * scale;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-white/80 hover:text-green-400 transition-colors shrink-0"
            >
              <ArrowLeft size={18} />
              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                Volver al inicio
              </span>
            </Link>
            <h1 className="text-xs sm:text-lg font-bold text-white text-center truncate">
              Propuesta Parlamento Andino
            </h1>
            {/* Spacer para centrar el título */}
            <div className="w-[18px] sm:w-[100px] shrink-0" />
          </div>
        </div>
      </header>

      {/* PDF Content */}
      <div
        ref={containerRef}
        className="flex-1 pt-16 sm:pt-20 pb-6 flex flex-col items-center overflow-x-auto"
      >
        {loading && !error && (
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-white/60 text-lg animate-pulse">
              Cargando documento...
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-[60vh] gap-4 px-4 text-center">
            <p className="text-white/60 text-lg">No se pudo cargar el PDF.</p>
            <p className="text-white/40 text-sm">
              Coloca el archivo PDF en{" "}
              <code className="bg-white/10 px-2 py-1 rounded text-green-400 text-xs">
                public/propuesta-parlamento-andino.pdf
              </code>
            </p>
            <a
              href={PDF_URL}
              download
              className="mt-4 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <Download size={16} />
              Intentar descargar
            </a>
          </div>
        )}

        {!error && containerWidth > 0 && (
          <PDFViewer
            fileUrl={PDF_URL}
            pageNumber={pageNumber}
            width={pdfWidth}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          />
        )}
      </div>

      {/* Controls Bar - debajo del PDF */}
      <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          {/* Page Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1 || numPages === 0}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={22} />
            </button>
            <span className="text-white/80 text-sm whitespace-nowrap min-w-[60px] text-center">
              {numPages > 0 ? `${pageNumber} / ${numPages}` : "- / -"}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages || numPages === 0}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Zoom + Download */}
          <div className="flex items-center gap-2">
            <button
              onClick={zoomOut}
              disabled={scale <= 0.5}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30"
              title="Reducir zoom"
            >
              <ZoomOut size={18} />
            </button>
            <span className="text-white/60 text-xs min-w-[40px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              disabled={scale >= 2.5}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30"
              title="Aumentar zoom"
            >
              <ZoomIn size={18} />
            </button>

            <div className="w-px h-5 bg-white/20 mx-1" />

            <a
              href={PDF_URL}
              download
              className="p-2 text-white/70 hover:text-green-400 hover:bg-white/10 rounded-lg transition-colors"
              title="Descargar PDF"
            >
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
