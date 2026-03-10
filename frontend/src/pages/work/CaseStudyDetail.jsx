import { motion } from 'framer-motion';
import { ArrowLeft, Target, Layout, ShieldCheck, Wrench, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';
import { useCaseStudy } from '../../hooks/useApi';

function YouTubeEmbed({ url }) {
  if (!url) return null;
  let videoId = null;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') videoId = urlObj.pathname.slice(1);
    else if (urlObj.hostname.includes('youtube.com')) videoId = urlObj.searchParams.get('v');
  } catch { return null; }
  if (!videoId) return null;
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel-heavy border border-boraq-teal-steel/20">
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title="Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
    </div>
  );
}

function ImageGallery({ images }) {
  const [selected, setSelected] = useState(null);
  if (!images || images.length === 0) return null;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl overflow-hidden glass-panel group cursor-pointer" onClick={() => setSelected(i)}>
            <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </motion.div>
        ))}
      </div>
      {selected !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8" onClick={() => setSelected(null)}>
          <button onClick={(e) => { e.stopPropagation(); setSelected(null); }} className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light z-50">✕</button>
          {images.length > 1 && (<><button onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center z-50"><ChevronLeft className="w-6 h-6 text-white" /></button><button onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center z-50"><ChevronRight className="w-6 h-6 text-white" /></button></>)}
          <img src={images[selected]} alt={`Screenshot ${selected + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-6 text-white/50 text-sm font-mono">{selected + 1} / {images.length}</div>
        </motion.div>
      )}
    </>
  );
}

export default function CaseStudyDetail() {
    const { id } = useParams();
    const { data: study, loading, error } = useCaseStudy(id);
    if (loading) return <div className="w-full min-h-screen flex items-center justify-center"><p className="text-boraq-gray-mid">Loading case study...</p></div>;
    if (error || !study) return <Navigate to="/portfolio" replace />;

    return (
        <div className="w-full bg-boraq-white dark:bg-boraq-black transition-colors duration-500 pb-32">
            {/* Hero */}
            <section className="relative w-full min-h-[60vh] flex items-end pt-20 overflow-hidden mb-16 border-b border-boraq-black/5 dark:border-white/5">
                <div className="absolute inset-0">
                    {study.cover ? (
                        <>
                            <img src={study.cover} alt={study.title} className="w-full h-full object-cover opacity-30 dark:opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-t from-boraq-white via-boraq-white/80 to-boraq-white/40 dark:from-boraq-black dark:via-boraq-black/80 dark:to-boraq-black/40" />
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-boraq-white dark:bg-boraq-black" />
                            <div className="absolute top-0 right-0 w-2/3 h-full bg-boraq-teal-steel/5 blur-[120px] rounded-full -mr-1/3 pointer-events-none" />
                        </>
                    )}
                </div>
                <div className="max-w-7xl mx-auto px-6 pb-16 pt-32 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-boraq-black/50 dark:text-boraq-white/50 hover:text-boraq-teal-steel transition-colors mb-8 font-bold text-[10px] tracking-[0.3em] uppercase">
                            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                        </Link>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl">{study.category}</span>
                            <span className="text-boraq-black/30 dark:text-boraq-white/30 text-xs font-mono">Case Study #{study.number}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 leading-[0.95] text-boraq-black dark:text-boraq-white max-w-4xl">{study.title}</h1>
                        <p className="text-xl md:text-2xl text-boraq-black/50 dark:text-boraq-white/50 font-light mb-8 max-w-2xl">{study.subtitle}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {study.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-boraq-black/5 dark:bg-white/10 rounded-lg text-[9px] font-bold tracking-widest uppercase text-boraq-black/50 dark:text-white/50">{tech}</span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {study.liveUrl && (
                                <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-boraq-teal-steel text-white text-sm font-bold hover:bg-boraq-teal-deep transition-colors">
                                    <ExternalLink className="w-4 h-4" /> View Live Site
                                </a>
                            )}
                            {study.youtubeUrl && (
                                <a href={study.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-boraq-teal-steel/30 text-boraq-black dark:text-white text-sm font-bold hover:border-boraq-teal-steel/60 transition-colors">
                                    <Play className="w-4 h-4" /> Watch Video
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cover Image */}
            {study.cover && (
                <section className="max-w-7xl mx-auto px-6 mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] overflow-hidden glass-panel-heavy border border-boraq-teal-steel/10">
                        <img src={study.cover} alt={`${study.title} cover`} className="w-full h-auto object-cover" />
                    </motion.div>
                </section>
            )}

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-8 space-y-24">
                    {/* Overview */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-4 mb-8">
                            <Layout className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Overview</h2>
                        </div>
                        <p className="text-xl font-light leading-relaxed text-boraq-black/70 dark:text-boraq-white/70">{study.overview}</p>
                    </motion.div>

                    {/* YouTube Video */}
                    {study.youtubeUrl && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-8">
                                <Play className="w-6 h-6 text-boraq-teal-steel" />
                                <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Project Video</h2>
                            </div>
                            <YouTubeEmbed url={study.youtubeUrl} />
                        </motion.div>
                    )}

                    {/* The Challenge */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-4 mb-8">
                            <Target className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">The Challenge</h2>
                        </div>
                        <p className="text-lg font-light leading-relaxed text-boraq-black/70 dark:text-boraq-white/70">{study.challenge}</p>
                    </motion.div>

                    {/* Our Solution */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-4 mb-8">
                            <Wrench className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Our Solution</h2>
                        </div>
                        <p className="text-lg font-light leading-relaxed text-boraq-black/70 dark:text-boraq-white/70 mb-10">{study.solution}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {study.features.map((feature, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-panel p-5 rounded-2xl flex items-start gap-3">
                                    <span className="text-boraq-teal-steel font-bold text-sm mt-0.5 shrink-0">✦</span>
                                    <span className="text-boraq-black/70 dark:text-boraq-white/70 font-light text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Gallery */}
                    {study.images.length > 0 && (
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="flex items-center gap-4 mb-8">
                                <Layout className="w-6 h-6 text-boraq-teal-steel" />
                                <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Project Gallery</h2>
                            </div>
                            <ImageGallery images={study.images} />
                        </motion.div>
                    )}

                    {/* Outcome */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-16 border-t border-boraq-black/5 dark:border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <ShieldCheck className="w-6 h-6 text-boraq-teal-steel" />
                            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-boraq-black dark:text-boraq-white">Outcome & Impact</h2>
                        </div>
                        <p className="text-lg font-light leading-relaxed text-boraq-black/70 dark:text-boraq-white/70">{study.outcome}</p>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 lg:col-start-9 space-y-8">
                    <div className="lg:sticky lg:top-32 space-y-8">
                        <div className="glass-panel-heavy p-8 rounded-[2rem] border border-boraq-teal-steel/20">
                            <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-[0.2em] text-[10px] mb-6">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {study.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-boraq-black/5 dark:bg-white/10 rounded-xl text-xs font-bold tracking-wider text-boraq-black/60 dark:text-white/60">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-panel-heavy p-8 rounded-[2rem] border border-boraq-teal-steel/20">
                            <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-[0.2em] text-[10px] mb-6">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {study.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-boraq-teal-steel/10 border border-boraq-teal-steel/20 rounded-xl text-xs font-bold tracking-wider text-boraq-teal-steel">{tag}</span>
                                ))}
                            </div>
                        </div>
                        {(study.liveUrl || study.youtubeUrl) && (
                            <div className="glass-panel-heavy p-8 rounded-[2rem] border border-boraq-teal-steel/20">
                                <h4 className="font-bold text-boraq-black dark:text-white uppercase tracking-[0.2em] text-[10px] mb-6">Links</h4>
                                <div className="flex flex-col gap-3">
                                    {study.liveUrl && <a href={study.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-boraq-teal-steel hover:underline"><ExternalLink className="w-4 h-4" /> Live Website</a>}
                                    {study.youtubeUrl && <a href={study.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-boraq-teal-steel hover:underline"><Play className="w-4 h-4" /> YouTube Video</a>}
                                </div>
                            </div>
                        )}
                        <div className="p-8 rounded-[2rem] bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black">
                            <h4 className="font-bold uppercase tracking-[0.2em] text-[10px] mb-4 opacity-50">Start Your Project</h4>
                            <p className="text-lg font-light mb-6 leading-snug">Have a similar project in mind? Let's talk.</p>
                            <Link to="/book-a-call" className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.1em] text-xs group">
                                Book a Call <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </aside>
            </section>

            <div className="mt-32">
                <Testimonials />
                <CallToAction />
            </div>
        </div>
    );
}
