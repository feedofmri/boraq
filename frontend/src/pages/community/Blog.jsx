import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Why we migrated from Webpack to Vite',
    excerpt: 'A deep dive into our build tooling decisions and how we achieved 10x faster HMR across 40+ enterprise repositories.',
    date: 'Oct 12, 2026',
    readTime: '8 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'The Psychology of Micro-Interactions',
    excerpt: 'How 200ms animations can fundamentally alter user trust and perceived application performance.',
    date: 'Oct 05, 2026',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'State of the Agency: Q3 Review',
    excerpt: 'Revenue growth, new strategic hires, and our roadmap for launching Boraq Labs.',
    date: 'Sep 28, 2026',
    readTime: '4 min read',
    category: 'Company',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Transmission <span className="text-boraq-cyan italic">Signals.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Deep technical essays, design philosophy, and transparent company updates directly from our leadership and engineering teams.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-2 rounded-[2.5rem] mb-12 group cursor-pointer"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-boraq-cyan text-black text-xs font-bold uppercase tracking-wider">{posts[0].category}</span>
                <span className="flex items-center gap-1 text-sm text-white/70"><Clock className="w-4 h-4" /> {posts[0].readTime}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{posts[0].title}</h2>
              <p className="text-lg text-white/70 max-w-2xl hidden md:block">{posts[0].excerpt}</p>
            </div>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden group cursor-pointer hover:border-boraq-cyan/30 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-boraq-cyan">{post.category}</span>
                  <span className="text-black/30 dark:text-white/30">•</span>
                  <span className="text-black/50 dark:text-white/50">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-boraq-cyan transition-colors">{post.title}</h3>
                <p className="text-black/60 dark:text-white/60 mb-6">{post.excerpt}</p>
                <div className="flex items-center text-sm font-medium gap-2">
                  Read Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
