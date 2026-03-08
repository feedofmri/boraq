import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, Copy, Bookmark, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';
import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';

export default function BlogDetail() {
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const title = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'The Future of Digital Engineering';

    return (
        <div className="w-full bg-boraq-white dark:bg-boraq-black transition-colors duration-500">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-boraq-teal-steel z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Sticky Header Nav */}
            <div className="sticky top-20 z-40 w-full glass-panel border-b border-boraq-gray-silver/10 dark:border-white/5 py-4 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                    <Link to="/blog" className="flex items-center gap-2 text-boraq-black/50 dark:text-boraq-white/50 hover:text-boraq-teal-steel transition-colors">
                        <ArrowLeft className="w-3 h-3" /> Back to Signals
                    </Link>
                    <div className="flex items-center gap-6">
                        <span className="text-boraq-black dark:text-boraq-white line-clamp-1 max-w-[300px]">{title}</span>
                        <div className="w-px h-4 bg-boraq-black/10 dark:bg-white/10" />
                        <span className="text-boraq-black/30 dark:text-boraq-white/30 italic uppercase">Engineering</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-boraq-black/50 dark:text-boraq-white/50 hover:text-boraq-teal-steel transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hero Section - Immersive */}
            <section className="relative w-full h-[85vh] flex items-end justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-boraq-black via-boraq-black/60 to-transparent" />
                </motion.div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-boraq-teal-steel/20 border border-boraq-teal-steel/30 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl">Engineering</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">8 min read</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[0.9] text-white">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i === title.split(' ').length - 1 ? "text-boraq-teal-steel italic font-light" : "block"}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-2 border-boraq-black overflow-hidden bg-boraq-gray-charcoal">
                                    <img src={ceoPhoto} alt="Md. Rubayet Islam" className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                            <div>
                                <div className="text-white font-medium text-lg">Md. Rubayet Islam & Team</div>
                                <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Boraq Core Engineering</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Structure */}
            <div className="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-20">

                {/* Left Sidebar - Meta & Sharing */}
                <aside className="lg:col-span-3 hidden lg:block sticky top-48 h-fit">
                    <div className="space-y-12">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-boraq-black/30 dark:text-white/30 mb-6">Published</h4>
                            <p className="text-boraq-black dark:text-white font-medium">October 12, 2026</p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-boraq-black/30 dark:text-white/30 mb-6">Share Story</h4>
                            <div className="flex flex-col gap-4">
                                <button className="flex items-center gap-3 text-sm text-boraq-black/60 dark:text-white/60 hover:text-boraq-teal-steel transition-colors group">
                                    <Twitter className="w-5 h-5 group-hover:-rotate-12 transition-transform" /> Twitter
                                </button>
                                <button className="flex items-center gap-3 text-sm text-boraq-black/60 dark:text-white/60 hover:text-boraq-teal-steel transition-colors group">
                                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" /> LinkedIn
                                </button>
                                <button className="flex items-center gap-3 text-sm text-boraq-black/60 dark:text-white/60 hover:text-boraq-teal-steel transition-colors group">
                                    <Copy className="w-5 h-5 group-active:scale-90 transition-transform" /> Copy Link
                                </button>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-boraq-black/5 dark:border-white/5">
                            <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-boraq-teal-steel hover:opacity-70 transition-opacity">
                                <Bookmark className="w-4 h-4" /> Save Transmission
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="lg:col-span-12 xl:col-span-8 lg:col-start-4">
                    <motion.article
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="prose prose-2xl dark:prose-invert max-w-none 
                        prose-p:text-boraq-black/70 dark:prose-p:text-boraq-white/70 prose-p:font-light prose-p:leading-relaxed prose-p:mb-12
                        prose-headings:text-boraq-black dark:prose-headings:text-boraq-white prose-headings:font-bold prose-headings:tracking-tighter prose-headings:mb-10
                        prose-blockquote:border-l-boraq-teal-steel prose-blockquote:bg-boraq-teal-steel/5 prose-blockquote:py-10 prose-blockquote:px-12 prose-blockquote:rounded-[2.5rem] prose-blockquote:italic prose-blockquote:font-light prose-blockquote:text-3xl
                        prose-a:text-boraq-teal-steel prose-a:no-underline prose-a:border-b prose-a:border-boraq-teal-steel/30 hover:prose-a:border-boraq-teal-steel transition-all
                        prose-img:rounded-[3rem] prose-img:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]
                        "
                    >
                        <p className="lead text-4xl leading-[1.3] text-boraq-black dark:text-white mb-20">
                            The modern web is built on a foundation of rapid iteration. But when your codebase scales past a million lines, the tools that once accelerated your workflow begin to drag you down.
                            <span className="text-boraq-teal-steel italic ml-2">Here is how we fundamentally changed our approach to build tooling at Boraq.</span>
                        </p>

                        <h2 className="text-5xl">The Legacy Bottleneck</h2>
                        <p>
                            For years, Webpack was the undisputed king of module bundlers. It gave us the flexibility to engineer complex architectures. However, as our monolithic repositories grew to encompass dozens of micro-frontends, the developer experience began to degrade rapidly. Cold starts were taking upwards of 3 minutes, and Hot Module Replacement (HMR) felt anything but "hot" with 5-10 second delays.
                        </p>

                        <blockquote>
                            "Developer velocity isn't just a metric; it's the lifeblood of innovation. When an engineer has to wait 10 seconds to see a CSS tweak, their flow state is shattered."
                        </blockquote>

                        <h2 className="text-5xl mt-24">Enter Vite: Native ESM</h2>
                        <p>
                            The paradigm shift came when we evaluated Vite. Instead of crawling and building the entire application before the server could even start, Vite serves source code over native ESM. This meant our dev server spin-up time was completely decoupled from the size of our application.
                        </p>

                        <div className="my-20 p-12 glass-panel-heavy rounded-[3rem] border border-boraq-teal-steel/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-[120px] font-bold text-boraq-teal-steel/5 leading-none select-none">CODE</div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-boraq-teal-steel animate-ping" />
                                Key Architectural Changes
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ring-1 ring-white/10 p-8 rounded-3xl bg-black/5 dark:bg-white/5">
                                <div>
                                    <div className="text-boraq-teal-steel font-bold mb-2 uppercase text-xs tracking-widest">Pre-bundling</div>
                                    <p className="text-sm font-light m-0">Esbuild is blisteringly fast, pre-bundling dependencies 10-100x faster than JS bundlers.</p>
                                </div>
                                <div>
                                    <div className="text-boraq-teal-steel font-bold mb-2 uppercase text-xs tracking-widest">Code Splitting</div>
                                    <p className="text-sm font-light m-0">Native ESM allows us to lazy load chunks on-demand without overhead.</p>
                                </div>
                            </div>
                        </div>

                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" alt="Codebase metrics" />

                        <h2 className="text-5xl mt-24">The Results</h2>
                        <p>
                            The telemetry speaks for itself. Cold start times across our heaviest enterprise products plummeted from ~180 seconds to under 2 seconds. HMR is now practically instantaneous, registering consistently under 50ms.
                        </p>
                        <p>
                            More importantly, the qualitative feedback from our engineering org was overwhelmingly positive. We restored the rapid feedback loop that makes UI development a joy.
                        </p>
                    </motion.article>

                    {/* Footer Share & Tagging */}
                    <div className="mt-32 pt-12 border-t border-boraq-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-20">
                        <div className="flex gap-4">
                            {['Engineering', 'Tooling', 'Vite', 'React'].map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-xl bg-boraq-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-boraq-black/50 dark:text-white/50 border border-transparent hover:border-boraq-teal-steel/20 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-boraq-black/30 dark:text-white/30">Next Signal:</span>
                            <Link to="/blog" className="group flex items-center gap-2 font-bold text-boraq-black dark:text-white">
                                The Psychology of Micro-Interactions <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>

            <Testimonials />
            <CallToAction />
        </div>
    );
}
