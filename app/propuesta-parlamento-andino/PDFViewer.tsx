"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PDFViewerProps {
  fileUrl: string;
  pageNumber: number;
  width: number;
  onLoadSuccess: (data: { numPages: number }) => void;
  onLoadError: () => void;
}

export default function PDFViewer({
  fileUrl,
  pageNumber,
  width,
  onLoadSuccess,
  onLoadError,
}: PDFViewerProps) {
  return (
    <div className="flex justify-center w-full px-2 sm:px-4">
      <Document
        file={fileUrl}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        loading={null}
        className="flex justify-center"
      >
        <Page
          pageNumber={pageNumber}
          width={width}
          className="shadow-2xl rounded-lg overflow-hidden [&_canvas]:!rounded-lg"
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>
    </div>
  );
}
