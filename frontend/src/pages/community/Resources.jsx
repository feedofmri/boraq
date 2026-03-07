import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, LayoutTemplate, Palette, Search } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';


const resources = [
  { title: 'Enterprise React Boilerplate', desc: 'Our battle-tested Next.js setup with Tailwind, Zustand, and TRPC.', type: 'Code', icon: LayoutTemplate, dl: '4.2k' },
  { title: 'Figma UI Kit v3', desc: 'The comprehensive design system powering boraq.io.', type: 'Design', icon: Palette, dl: '12k' },
  { title: 'RFP Template', desc: 'A standardized Request for Proposal document for software projects.', type: 'Document', icon: FileText, dl: '850' },
  { title: 'Security Audit Checklist', desc: 'Pre-flight checks for deploying Node.js applications to AWS.', type: 'Checklist', icon: FileText, dl: '2.1k' },
];

export default function Resources() {
  const [search, setSearch] = useState('');

  const filteredResources = resources.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.desc.toLowerCase().includes(search.toLowerCase()) ||
    r.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Open <span className="text-boraq-cyan italic">Knowledge.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            We believe in lifting the entire industry standard. Download our internal tools, templates, and boilerplates for free.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-3xl flex flex-col h-full group hover:bg-white/10 dark:hover:bg-black/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-boraq-cyan/10 rounded-full blur-2xl group-hover:bg-boraq-cyan/20 transition-colors" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group-hover:border-boraq-cyan/30 transition-colors">
                  <res.icon className="w-6 h-6 text-black dark:text-white group-hover:text-boraq-cyan transition-colors" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-boraq-cyan/70">{res.type}</span>
              </div>

              <h3 className="font-bold text-xl mb-2 relative z-10">{res.title}</h3>
              <p className="text-sm text-black/60 dark:text-white/60 mb-8 flex-grow relative z-10">{res.desc}</p>

              <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4 mt-auto relative z-10">
                <span className="text-xs font-mono text-black/50 dark:text-white/50">{res.dl} Downloads</span>
                <button className="w-8 h-8 rounded-full bg-boraq-cyan/10 flex items-center justify-center group-hover:bg-boraq-cyan transition-colors">
                  <Download className="w-4 h-4 text-boraq-cyan group-hover:text-black transition-colors" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No resources match "<span className="font-bold text-boraq-black dark:text-boraq-white">{search}</span>"</p>
            <button onClick={() => setSearch('')} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear search</button>
          </div>
        )}
      </section>

      <Testimonials />
      <CallToAction />
    </div>
  );
}
