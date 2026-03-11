/**
 * Build an absolute URL for a file served by the API.
 * Uses the same API base as the CRM client so images always point to api.boraq.io.
 */
const API_ORIGIN = (import.meta.env.VITE_API_URL || import.meta.env.VITE_CRM_API || '')
  .replace(/\/+$/g, '')   // strip trailing slashes
  .replace(/\/api\/admin$/, '')  // strip /api/admin suffix if present
  .replace(/\/api$/, '');         // strip /api suffix if present

/**
 * @param {string} path – the relative file path stored in DB, e.g. "team/md-rubayet-islam.jpg"
 * @returns {string} absolute URL like "https://api.boraq.io/api/files/team/md-rubayet-islam.jpg"
 */
export default function fileUrl(path) {
  if (!path) return '';
  return `${API_ORIGIN}/api/files/${path}`;
}

