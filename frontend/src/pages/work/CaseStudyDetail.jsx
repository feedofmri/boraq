import { motion } from 'framer-motion';
import { ArrowLeft, BarChart3, Clock, Zap, Target, Layout, ShieldCheck, Cpu, Code2, Globe2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';

export default function CaseStudyDetail() {
    const { id } = useParams();
    const clientName = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'GlobalPay Inc.';

    return (
        <div className="w-full bg-boraq-white dark:bg-boraq-black transition-colors duration-500 pb-32">
            {/* Immersive Tech Hero */}
            <section className="relative w-full h-[85vh] min-h-[700px] flex items-center pt-20 overflow-hidden mb-32 border-b border-boraq-black/5 dark:border-white/5">
                {/* Brand Background */}
                <div className="absolute inset-0 bg-boraq-white dark:bg-boraq-black" />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-boraq-teal-steel/5 blur-[120px] rounded-full -mr-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-boraq-teal-deep/5 blur-[120px] rounded-full -ml-1/4 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-boraq-black/50 dark:text-boraq-white/50 hover:text-boraq-teal-steel transition-colors mb-12 font-bold text-[10px] tracking-[0.3em] uppercase">
                            <ArrowLeft className="w-4 h-4" /> Index / Portfolio
                        </Link>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl">Fintech Architecture</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[0.9] text-boraq-black dark:text-boraq-white">
                            Optimizing <span className="text-boraq-teal-steel italic font-light">Yield Pipelines.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-boraq-black/60 dark:text-boraq-white/60 font-light leading-relaxed mb-16 max-w-xl">
                            How we re-engineered the core transaction highway for {clientName}, achieving <span className="font-bold text-boraq-black dark:text-white">85% latency reduction</span> through native distributed systems.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                { label: 'Latency', value: '-85%', icon: Clock },
                                { label: 'Capacity', value: '15k / s', icon: Zap },
                                { label: 'ROI', value: '3.2x', icon: BarChart3 }
                            ].map((stat, i) => (
                                <div key={i} className="glass-panel p-6 rounded-3xl min-w-[160px] border-boraq-teal-steel/10">
                                    <stat.icon className="w-5 h-5 text-boraq-teal-steel mb-4" />
                                    <div className="text-3xl font-bold text-boraq-black dark:text-boraq-white">{stat.value}</div>
                                    <div className="text-[9px] font-bold uppercase tracking-widest text-boraq-black/30 dark:text-white/30">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square rounded-[4rem] overflow-hidden glass-panel-heavy p-4 border border-boraq-teal-steel/20 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                alt="System architecture"
                                className="w-full h-full object-cover rounded-[3.5rem] filter grayscale dark:invert-[0.1] group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-boraq-teal-steel/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Narrative - Technically Precise */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24">
                <div className="lg:col-span-8 space-y-32">

                    {/* Problem Section */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-4 mb-10">
                            <Target className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">The Challenge</h2>
                        </div>
                        <div className="space-y-8 text-xl font-light leading-relaxed text-boraq-black/70 dark:text-boraq-white/70">
                            <p className="text-3xl text-boraq-black dark:text-white leading-tight">
                                {clientName} was operating on a legacy monolithic architecture that fundamentally could not scale with their international growth.
                            </p>
                            <p>
                                During peak trading hours across European and Asian markets, the single PostgreSQL database would lock, causing transaction settlement queues to back up dramatically. Average latency for a standard cross-border B2B payment spiked from 2 seconds to over 45 seconds.
                            </p>
                            <p>
                                This latency triggered automated timeouts in partner API integrations, resulting in a direct loss of approximately $4.2M in recognizable revenue per quarter.
                            </p>
                        </div>
                    </motion.div>

                    {/* Solution Steps - High Contrast Panels */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 mb-2">
                            <Layout className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Methodology</h2>
                        </div>

                        {[
                            {
                                step: '01',
                                title: 'System Decoupling',
                                desc: 'We orchestrated a strangler fig pattern migration, extracting the Settlement Engine into a high-concurrency Go service.',
                                color: 'border-boraq-black dark:border-white'
                            },
                            {
                                step: '02',
                                title: 'Event-Driven Core',
                                desc: 'Implemented Apache Kafka for asynchronous ingestion, moving from synchronous locking to eventual consistency using the Saga pattern.',
                                color: 'border-boraq-teal-steel'
                            },
                            {
                                step: '03',
                                title: 'Observability Layer',
                                desc: 'Built a real-time monitor using WebSockets and Next.js, giving ops teams sub-second visibility into pipeline health.',
                                color: 'border-boraq-teal-deep'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`glass-panel p-12 rounded-[3.5rem] border-l-[12px] ${item.color} flex gap-10 items-start`}
                            >
                                <span className="text-4xl font-bold text-boraq-black/10 dark:text-white/10 select-none mt-2">{item.step}</span>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-boraq-black dark:text-boraq-white">{item.title}</h3>
                                    <p className="text-boraq-black/60 dark:text-boraq-white/60 font-light leading-relaxed m-0">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Impact Section */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-24 border-t border-boraq-black/5 dark:border-white/5">
                        <div className="flex items-center gap-4 mb-10">
                            <ShieldCheck className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-3xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Technical Impact</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-widest text-xs">Stability</h4>
                                <p className="font-light text-boraq-black/70 dark:text-boraq-white/70">The new system handled the Black Friday surge with 0 API timeouts and 100% data integrity maintained across 4 availability zones.</p>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-widest text-xs">Velocity</h4>
                                <p className="font-light text-boraq-black/70 dark:text-boraq-white/70">Deployment cycles for new settlement scripts dropped from 2 weeks to under 4 hours via automated CI/CD pipelines.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar - Technical Specs */}
                <aside className="lg:col-span-4 lg:col-start-9 sticky top-48 h-fit space-y-12">
                    <div className="glass-panel-heavy p-10 rounded-[3rem] border border-boraq-teal-steel/20">
                        <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-[0.2em] text-[10px] mb-8">System Stack</h4>
                        <div className="flex flex-col gap-6">
                            {[
                                { name: 'Engine', val: 'Go 1.22', icon: Code2 },
                                { name: 'Bus', val: 'Apache Kafka', icon: Cpu },
                                { name: 'Cloud', val: 'AWS EKS', icon: Globe2 }
                            ].map((spec, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-boraq-black/5 dark:border-white/5 pb-4">
                                    <div className="flex items-center gap-3 text-xs text-boraq-black/50 dark:text-white/50">
                                        <spec.icon className="w-4 h-4 text-boraq-teal-steel" />
                                        {spec.name}
                                    </div>
                                    <div className="text-sm font-bold text-boraq-black dark:text-white uppercase tracking-widest">{spec.val}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {['gRPC', 'PostgreSQL', 'Redis', 'Kubernetes', 'Next.js'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-boraq-black/5 dark:bg-white/10 rounded-lg text-[9px] font-bold tracking-widest uppercase text-boraq-black/50 dark:text-white/50">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 rounded-[3rem] bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black">
                        <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-6 opacity-50">Engineering Partners</h4>
                        <p className="text-xl font-light mb-8 leading-snug">Let us audit your infrastructure for scale.</p>
                        <Link to="/book-call" className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] text-xs group">
                            Request Audit <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </aside>
            </section>

            <Testimonials />
            <CallToAction />
        </div>
    );
}
