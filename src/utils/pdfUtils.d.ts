export declare function checkPDFExists(url: string): Promise<boolean>;
export declare function usePDFAvailability(pdfUrl: string): {
    isAvailable: boolean | null;
    isChecking: boolean;
};
