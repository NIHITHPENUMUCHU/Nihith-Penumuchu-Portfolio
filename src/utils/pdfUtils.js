import { useState, useEffect } from 'react';
export async function checkPDFExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    }
    catch (error) {
        console.error('Error checking PDF existence:', error);
        return false;
    }
}
export function usePDFAvailability(pdfUrl) {
    const [isAvailable, setIsAvailable] = useState(null);
    const [isChecking, setIsChecking] = useState(true);
    useEffect(() => {
        async function checkAvailability() {
            const exists = await checkPDFExists(pdfUrl);
            setIsAvailable(exists);
            setIsChecking(false);
        }
        checkAvailability();
    }, [pdfUrl]);
    return { isAvailable, isChecking };
}
