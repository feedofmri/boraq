import { motion } from 'framer-motion';
import { Package, Smartphone, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Nexus UI',
    tagline: 'The ultimate Tailwind Component Library',
    desc: 'Over 500+ perfectly crafted, accessible, and responsive React components used in all Boraq client projects. Now available for public licensing.',
    icon: Package,
    status: 'Available',
    link: '#'
  },
  {
    name: 'Vanguard Auth',
    tagline: 'Self-hosted Biometric Authentication',
    desc: 'A drop-in identity provider specializing in seamless Passkey and WebAuthn integrations for high-security applications.',
    icon: Smartphone,
    status: 'Beta',
    link: '#'
  }
];

export default function Products() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Built for <span className="text-boraq-cyan italic">builders.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We commercialize our best internal tooling. These are the SaaS products and libraries that give our agency its unfair advantage.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel-heavy p-8 border border-white/10 md:p-12 rounded-[2.5rem] flex flex-col h-full group relative overflow-hidden"
            >
              {/* Background glow effect based on status */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 blur-3xl rounded-full opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${prod.status === 'Beta' ? 'bg-orange-500' : 'bg-boraq-cyan'}`} />

              <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:border-boraq-cyan/50 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-md">
                  <prod.icon className="w-8 h-8 text-black dark:text-white group-hover:text-boraq-cyan transition-colors" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${prod.status === 'Beta' ? 'border-orange-500/30 text-orange-500' : 'border-boraq-cyan/30 text-boraq-cyan'}`}>
                  {prod.status}
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">{prod.name}</h2>
                <h3 className="text-sm font-medium text-boraq-cyan mb-6">{prod.tagline}</h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed mb-8">
                  {prod.desc}
                </p>
              </div>

              <div className="mt-auto relative z-10 pt-8 border-t border-black/10 dark:border-white/10">
                <a href={prod.link} className="inline-flex items-center gap-2 font-bold hover:text-boraq-cyan transition-colors group/link">
                  Explore Product <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
