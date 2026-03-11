const rawBase = import.meta.env.VITE_API_URL || '/api';
// Remove trailing slash from base (but keep single leading slash for relative paths)
const API_BASE = rawBase.replace(/\/+$|\/+$/g, (m) => m.startsWith('/') ? '/' : '');

function joinUrl(base, endpoint) {
    // Ensure there is exactly one slash between base and endpoint
    const b = base.replace(/\/+$/g, '');
    const e = endpoint.replace(/^\/+/, '');
    // If base was a single slash (relative root), return `/${e}`
    if (b === '') return `/${e}`;
    return `${b}/${e}`;
}

async function fetchApi(endpoint) {
    const url = joinUrl(API_BASE, endpoint);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText} — ${url}`);
    return res.json();
}

export async function postApi(endpoint, data) {
    const url = joinUrl(API_BASE, endpoint);
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
    });
    let json = null;
    try {
        json = await res.json();
    } catch (e) {
        // Non-JSON responses should still produce a helpful error
        if (!res.ok) throw { status: res.status, data: res.statusText, url };
        throw e;
    }
    if (!res.ok) throw { status: res.status, data: json, url };
    return json;
}

export default fetchApi;

