import { motion } from 'framer-motion';
import { Terminal, FileJson, Shield, Zap, Search } from 'lucide-react';

const categories = [
  { title: 'Authentication API', icon: Shield, desc: 'OAuth2, JWT flows, and SSO integration.' },
  { title: 'Payment Webhooks', icon: Zap, desc: 'Listening to events from Stripe and PayPal.' },
  { title: 'Data Structures', icon: FileJson, desc: 'Core JSON schemas for the Nexus platform.' },
  { title: 'CLI Tools', icon: Terminal, desc: 'Command line interface documentation.' },
];

export default function Docs() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-black/10 dark:border-white/10 pb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Documentation
            </h1>
            <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl font-light">
              Everything you need to integrate, build, and deploy with Boraq's APIs.
            </p>
          </div>
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search docs..."
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-boraq-cyan/50 focus:ring-1 focus:ring-boraq-cyan/50 transition-all font-medium"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 hidden md:block">
          <div className="sticky top-32 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3 px-3">Getting Started</h4>
              <ul className="space-y-1">
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm bg-boraq-cyan/10 text-boraq-cyan font-medium">Introduction</a></li>
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-px transition-all">Quick Start</a></li>
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-px transition-all">Authentication</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-3 px-3">Core Concepts</h4>
              <ul className="space-y-1">
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-px transition-all">Pagination</a></li>
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-px transition-all">Rate Limiting</a></li>
                <li><a href="#" className="block px-3 py-2 rounded-lg text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-px transition-all">Error Codes</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <h2>Welcome to the API Reference</h2>
              <p>
                The Boraq REST API provides programmatic access to data required for integrating your applications with our services.
                Predictable resource-oriented URLs, standard HTTP operations, and JSON-encoded responses map directly to your development intuition.
              </p>

              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-boraq-cyan not-prose my-8">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-boraq-cyan">Base URL</h4>
                <code className="text-lg">https://api.boraq.io/v1</code>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl group hover:border-boraq-cyan/30 transition-colors cursor-pointer flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0">
                    <cat.icon className="w-5 h-5 text-black/70 dark:text-white/70 group-hover:text-boraq-cyan transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-boraq-cyan transition-colors">{cat.title}</h3>
                    <p className="text-sm text-black/60 dark:text-white/60">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
