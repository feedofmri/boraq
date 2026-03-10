import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { postApi } from '../api/client';

export default function usePageTracking() {
    const location = useLocation();

    useEffect(() => {
        // Small delay to avoid tracking rapid navigations
        const timer = setTimeout(() => {
            postApi('/track', {
                path: location.pathname,
                referrer: document.referrer || null,
            }).catch(() => {
                // Silently fail — tracking should never break the UX
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [location.pathname]);
}

