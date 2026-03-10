const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function fetchApi(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText}`);
    return res.json();
}

export async function postApi(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw { status: res.status, data: json };
    return json;
}

export default fetchApi;

