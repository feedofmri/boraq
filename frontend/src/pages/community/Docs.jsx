import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Search, Copy, Check, BookOpen, Code, ExternalLink, ChevronRight } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import InteractiveFAQ from '../../components/sections/InteractiveFAQ';


const sidebarSections = [
  { heading: 'Getting Started', items: ['Introduction', 'Quick Start', 'Authentication'] },
  { heading: 'Core Concepts', items: ['Pagination', 'Rate Limiting', 'Error Codes'] },
  { heading: 'API Reference', items: ['Users', 'Projects', 'Webhooks', 'Billing'] },
  { heading: 'SDKs', items: ['JavaScript', 'Python', 'Go'] },
];

const endpoints = [
  { method: 'GET', path: '/v1/users', desc: 'List all users in your organization', status: 'Stable' },
  { method: 'POST', path: '/v1/users', desc: 'Create a new user account', status: 'Stable' },
  { method: 'GET', path: '/v1/projects', desc: 'Retrieve all projects with pagination', status: 'Stable' },
  { method: 'POST', path: '/v1/projects', desc: 'Create a new project workspace', status: 'Stable' },
  { method: 'POST', path: '/v1/webhooks', desc: 'Register a new webhook endpoint', status: 'Beta' },
  { method: 'DELETE', path: '/v1/webhooks/:id', desc: 'Remove a webhook subscription', status: 'Beta' },
];

const methodColors = {
  GET: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  POST: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  PUT: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  DELETE: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
};

const errorCodes = [
  { code: 200, meaning: 'OK', desc: 'Request succeeded' },
  { code: 201, meaning: 'Created', desc: 'Resource created successfully' },
  { code: 400, meaning: 'Bad Request', desc: 'Invalid request body or parameters' },
  { code: 401, meaning: 'Unauthorized', desc: 'Missing or invalid API key' },
  { code: 403, meaning: 'Forbidden', desc: 'Insufficient permissions' },
  { code: 404, meaning: 'Not Found', desc: 'Resource does not exist' },
  { code: 429, meaning: 'Rate Limited', desc: 'Too many requests — retry after cooldown' },
  { code: 500, meaning: 'Server Error', desc: 'Internal error — contact support' },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="p-1.5 rounded-lg hover:bg-boraq-white/10 transition-colors" title="Copy">
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-boraq-gray-silver/60" />}
    </button>
  );
}

function CodeBlock({ language, code }) {
  return (
    <div className="rounded-xl overflow-hidden border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
      <div className="flex items-center justify-between px-4 py-2 bg-boraq-black/5 dark:bg-boraq-white/5 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
        <span className="text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver">{language}</span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed bg-boraq-black/[0.02] dark:bg-boraq-white/[0.02]">
        <code className="text-boraq-black dark:text-boraq-white">{code}</code>
      </pre>
    </div>
  );
}

export default function Docs() {
  const [activeSection, setActiveSection] = useState('Introduction');
  const [search, setSearch] = useState('');

  return (
    <div className="w-full pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 pb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-4">
              <BookOpen className="w-4 h-4" />
              API Reference
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">
              Documentation
            </h1>
            <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl font-light leading-relaxed">
              Everything you need to integrate, build, and deploy with Boraq's APIs. RESTful endpoints, real-time webhooks, and SDKs for every stack.
            </p>
          </div>
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search docs..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 hidden md:block">
          <div className="sticky top-32 space-y-6">
            {sidebarSections.map((section, si) => (
              <div key={si}>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-2 px-3">{section.heading}</h4>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => setActiveSection(item)}
                        className={`w-full text-left block px-3 py-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                          activeSection === item
                            ? 'bg-boraq-teal-steel/10 text-boraq-teal-steel'
                            : 'text-boraq-gray-mid hover:text-boraq-black dark:text-boraq-gray-silver dark:hover:text-boraq-white hover:bg-boraq-black/5 dark:hover:bg-boraq-white/5'
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="px-3 pt-4 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
              <span className="text-[10px] font-mono text-boraq-gray-mid/50 dark:text-boraq-gray-silver/30">API Version 1.4.2</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>

            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white">Welcome to the API Reference</h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                The Boraq REST API provides programmatic access to data required for integrating your applications with our services.
                Predictable resource-oriented URLs, standard HTTP operations, and JSON-encoded responses map directly to your development intuition.
              </p>

              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-boraq-teal-steel my-8 bg-boraq-teal-steel/5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1 text-boraq-teal-steel">Base URL</h4>
                <div className="flex items-center gap-3">
                  <code className="text-lg font-bold text-boraq-black dark:text-boraq-white font-mono">https://api.boraq.io/v1</code>
                  <CopyButton text="https://api.boraq.io/v1" />
                </div>
              </div>
            </div>

            {/* Authentication */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white flex items-center gap-3">
                <Shield className="w-7 h-7 text-boraq-teal-steel" />
                Authentication
              </h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                All API requests require a Bearer token in the <code className="px-1.5 py-0.5 rounded bg-boraq-black/5 dark:bg-boraq-white/5 text-sm font-mono">Authorization</code> header.
                Generate your API keys from the <span className="text-boraq-teal-steel font-medium">Dashboard → Settings → API Keys</span>.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -X GET https://api.boraq.io/v1/users \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json"`}
              />
              <div className="mt-6 glass-panel p-5 rounded-xl border-l-4 border-l-yellow-500/60 bg-yellow-500/5">
                <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver font-light">
                  <span className="font-bold text-yellow-600 dark:text-yellow-400">Security Note:</span> Never expose your API keys in client-side code. Always call the API from your server.
                </p>
              </div>
            </div>

            {/* Quick Start */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white flex items-center gap-3">
                <Zap className="w-7 h-7 text-boraq-teal-steel" />
                Quick Start
              </h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                Get up and running in under 5 minutes. Install the SDK, set your API key, and make your first request.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-boraq-teal-steel text-boraq-white flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-boraq-black dark:text-boraq-white mb-2">Install the SDK</h4>
                    <CodeBlock language="bash" code="npm install @boraq/sdk" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-boraq-teal-steel text-boraq-white flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-boraq-black dark:text-boraq-white mb-2">Initialize the client</h4>
                    <CodeBlock language="javascript" code={`import { BoraqClient } from '@boraq/sdk';

const client = new BoraqClient({
  apiKey: process.env.BORAQ_API_KEY,
  version: 'v1',
});`} />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-boraq-teal-steel text-boraq-white flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-boraq-black dark:text-boraq-white mb-2">Make your first request</h4>
                    <CodeBlock language="javascript" code={`const users = await client.users.list({
  limit: 10,
  offset: 0,
});

console.log(users.data);
// [{ id: 'usr_1', name: 'Alice', ... }, ...]`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Endpoints */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white flex items-center gap-3">
                <Code className="w-7 h-7 text-boraq-teal-steel" />
                Endpoints
              </h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                Core REST endpoints available in the current API version.
              </p>
              <div className="space-y-3">
                {endpoints
                  .filter(ep => !search || ep.path.includes(search.toLowerCase()) || ep.desc.toLowerCase().includes(search.toLowerCase()))
                  .map((ep, i) => (
                  <div key={i} className="glass-panel rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3 group hover:border-boraq-teal-steel/30 transition-colors cursor-pointer border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase border shrink-0 w-fit ${methodColors[ep.method]}`}>
                      {ep.method}
                    </span>
                    <code className="text-sm font-mono font-bold text-boraq-black dark:text-boraq-white">{ep.path}</code>
                    <span className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver font-light flex-1">{ep.desc}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest shrink-0 ${ep.status === 'Beta' ? 'text-yellow-500' : 'text-green-500'}`}>{ep.status}</span>
                    <ChevronRight className="w-4 h-4 text-boraq-gray-silver/30 group-hover:text-boraq-teal-steel transition-colors shrink-0 hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>

            {/* Error Codes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white">Error Codes</h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                Standard HTTP status codes indicate whether a request succeeded or failed.
              </p>
              <div className="glass-panel rounded-2xl overflow-hidden border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                <div className="grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[80px_160px_1fr] text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver bg-boraq-black/5 dark:bg-boraq-white/5 px-5 py-3 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                  <span>Code</span><span>Status</span><span className="hidden sm:block">Description</span>
                </div>
                {errorCodes.map((err, i) => (
                  <div key={i} className={`grid grid-cols-[80px_1fr_1fr] sm:grid-cols-[80px_160px_1fr] px-5 py-3 text-sm items-center ${i !== errorCodes.length - 1 ? 'border-b border-boraq-gray-silver/5 dark:border-boraq-teal-deep/5' : ''}`}>
                    <span className={`font-mono font-bold ${err.code < 300 ? 'text-green-500' : err.code < 500 ? 'text-yellow-500' : 'text-red-500'}`}>{err.code}</span>
                    <span className="font-bold text-boraq-black dark:text-boraq-white">{err.meaning}</span>
                    <span className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light hidden sm:block">{err.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate Limiting */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white">Rate Limiting</h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                API requests are rate-limited to ensure fair usage. Current limits are returned in every response header.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Free Tier', limit: '100 req/min', color: 'border-boraq-gray-silver/20 dark:border-boraq-teal-deep/20' },
                  { label: 'Pro', limit: '1,000 req/min', color: 'border-boraq-teal-steel/30' },
                  { label: 'Enterprise', limit: 'Unlimited', color: 'border-boraq-teal-steel/50' },
                ].map((tier, i) => (
                  <div key={i} className={`glass-panel p-5 rounded-xl text-center border ${tier.color}`}>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-boraq-gray-mid dark:text-boraq-gray-silver mb-2">{tier.label}</div>
                    <div className="text-2xl font-bold text-boraq-black dark:text-boraq-white">{tier.limit}</div>
                  </div>
                ))}
              </div>
              <CodeBlock language="http" code={`HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1672531200`} />
            </div>

            {/* SDKs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white">SDKs & Libraries</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'JavaScript / TypeScript', install: 'npm install @boraq/sdk' },
                  { name: 'Python', install: 'pip install boraq-python' },
                  { name: 'Go', install: 'go get github.com/boraq/boraq-go' },
                ].map((sdk, i) => (
                  <div key={i} className="glass-panel p-6 rounded-xl group hover:border-boraq-teal-steel/30 transition-colors border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                    <h4 className="font-bold text-boraq-black dark:text-boraq-white mb-2 group-hover:text-boraq-teal-steel transition-colors">{sdk.name}</h4>
                    <code className="text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver block mb-4 bg-boraq-black/5 dark:bg-boraq-white/5 px-3 py-2 rounded-lg">{sdk.install}</code>
                    <a href="#" className="inline-flex items-center gap-1 text-sm text-boraq-teal-steel font-bold hover:underline">
                      View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-boraq-black dark:text-boraq-white">Pagination</h2>
              <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-6">
                All list endpoints support cursor-based pagination using <code className="px-1.5 py-0.5 rounded bg-boraq-black/5 dark:bg-boraq-white/5 text-sm font-mono">limit</code> and <code className="px-1.5 py-0.5 rounded bg-boraq-black/5 dark:bg-boraq-white/5 text-sm font-mono">cursor</code> parameters.
              </p>
              <CodeBlock language="javascript" code={`// Fetch the first page
const page1 = await client.projects.list({ limit: 20 });

// Fetch the next page using the cursor
const page2 = await client.projects.list({
  limit: 20,
  cursor: page1.pagination.next_cursor,
});

// Response shape
{
  "data": [...],
  "pagination": {
    "total": 142,
    "has_more": true,
    "next_cursor": "prj_abc123"
  }
}`} />
            </div>

          </motion.div>
        </div>
      </section>

      <InteractiveFAQ />
      <CallToAction />
    </div>
  );
}
