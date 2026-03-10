import { useState, useEffect } from 'react';
import fetchApi from '../api/client';

/**
 * Generic hook to fetch data from the API.
 * Returns { data, loading, error }.
 */
export function useApi(endpoint, defaultValue = null) {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetchApi(endpoint)
            .then((res) => {
                if (!cancelled) setData(res);
            })
            .catch((err) => {
                if (!cancelled) setError(err);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [endpoint]);

    return { data, loading, error };
}

/** All homepage data in a single request */
export function useHomepage() {
    return useApi('/homepage', {
        teamMembers: [],
        services: [],
        caseStudies: [],
        testimonials: [],
        faqs: [],
        stats: [],
        clients: [],
        trustBadges: [],
        trustIndicators: [],
        processSteps: [],
        foundersNote: null,
        companyInfo: {},
        activities: [],
    });
}

export function useTeamMembers() {
    return useApi('/team-members', []);
}

export function useServices() {
    return useApi('/services', []);
}

export function useCaseStudies() {
    return useApi('/case-studies', []);
}

export function useCaseStudy(slug) {
    return useApi(`/case-studies/${slug}`, null);
}

export function useBlogPosts() {
    return useApi('/blog-posts', []);
}

export function useBlogPost(slug) {
    return useApi(`/blog-posts/${slug}`, null);
}

export function useTestimonials() {
    return useApi('/testimonials', []);
}

export function useFaqs() {
    return useApi('/faqs', []);
}

export function useStats() {
    return useApi('/stats', []);
}

export function useClients() {
    return useApi('/clients', []);
}

export function useTrustBadges() {
    return useApi('/trust-badges', { badges: [], indicators: [] });
}

export function useProcessSteps() {
    return useApi('/process-steps', []);
}

export function useFoundersNote() {
    return useApi('/founders-note', null);
}

export function useCompanyInfo() {
    return useApi('/company-info', {});
}

export function useActivities() {
    return useApi('/activities', []);
}

