import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader2 } from 'lucide-react';
import { PDFErrorFallback } from './PDFErrorFallback';
import { usePDFAvailability } from '../../utils/pdfUtils';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PDF_URL = '/resume.pdf';
export function ResumeViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);
    const { isAvailable, isChecking } = usePDFAvailability(PDF_URL);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setError(null);
    }
    function onDocumentLoadError(error) {
        console.error('PDF load error:', error);
        setError(error);
    }
    if (isChecking) {
        return (_jsx("div", { className: "flex items-center justify-center h-[600px]", children: _jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-400" }) }));
    }
    if (!isAvailable || error) {
        return _jsx(PDFErrorFallback, {});
    }
    return (_jsxs("div", { className: "p-6 flex flex-col items-center", children: [_jsx(Document, { file: PDF_URL, onLoadSuccess: onDocumentLoadSuccess, onLoadError: onDocumentLoadError, loading: _jsx("div", { className: "flex items-center justify-center h-[600px]", children: _jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-400" }) }), className: "max-w-full", children: _jsx(Page, { pageNumber: pageNumber, width: Math.min(window.innerWidth - 48, 1000), renderTextLayer: true, renderAnnotationLayer: true, className: "shadow-xl rounded-lg overflow-hidden", loading: _jsx("div", { className: "flex items-center justify-center h-[600px]", children: _jsx(Loader2, { className: "w-8 h-8 animate-spin text-emerald-400" }) }) }) }), numPages && (_jsxs("div", { className: "flex items-center gap-4 mt-4", children: [_jsx("button", { onClick: () => setPageNumber(prev => Math.max(prev - 1, 1)), disabled: pageNumber <= 1, className: "px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors", children: "Previous" }), _jsxs("p", { className: "text-gray-300", children: ["Page ", pageNumber, " of ", numPages] }), _jsx("button", { onClick: () => setPageNumber(prev => Math.min(prev + 1, numPages)), disabled: pageNumber >= numPages, className: "px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors", children: "Next" })] }))] }));
}
