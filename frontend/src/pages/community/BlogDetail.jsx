import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Share2, Twitter, Linkedin, Copy, Bookmark, ChevronRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import CallToAction from '../../components/sections/CallToAction';
import Testimonials from '../../components/sections/Testimonials';
import blogPosts from '../../data/blogPosts';

function ContentRenderer({ content }) {
  return content.map((block, i) => {
    switch (block.type) {
      case 'heading':
        return <h2 key={i} className="text-4xl md:text-5xl mt-24">{block.content}</h2>;
      case 'text':
        return <p key={i}>{block.content}</p>;
      case 'quote':
        return <blockquote key={i}>{block.content}</blockquote>;
      case 'list':
        return (
          <ul key={i} className="space-y-3 my-8">
            {block.content.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-boraq-black/70 dark:text-boraq-white/70 font-light text-lg leading-relaxed">
                <span className="text-boraq-teal-steel mt-1.5 shrink-0">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default function BlogDetail() {
    const { id } = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const post = blogPosts.find((p) => p.id === id);
    if (!post) return <Navigate to="/blog" replace />;

    const postIndex = blogPosts.indexOf(post);
    const nextPost = blogPosts[postIndex + 1] || blogPosts[0];

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
                        <span className="text-boraq-black dark:text-boraq-white line-clamp-1 max-w-[300px]">{post.title}</span>
                        <div className="w-px h-4 bg-boraq-black/10 dark:bg-white/10" />
                        <span className="text-boraq-black/30 dark:text-boraq-white/30 italic uppercase">{post.category}</span>
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
                        src={post.image}
                        alt={post.title}
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
                            <span className="px-4 py-1.5 rounded-full bg-boraq-teal-steel/20 border border-boraq-teal-steel/30 text-boraq-teal-steel text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-xl">{post.category}</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-10 leading-[0.95] text-white max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-2 border-boraq-black overflow-hidden bg-boraq-gray-charcoal">
                                    <img src={post.authorPhoto} alt={post.author} className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                            <div>
                                <div className="text-white font-medium text-lg">{post.author} & Team</div>
                                <div className="text-white/40 text-xs uppercase tracking-widest font-bold">Boraq Engineering</div>
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
                            <p className="text-boraq-black dark:text-white font-medium">{post.date}</p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-boraq-black/30 dark:text-white/30 mb-6">Category</h4>
                            <Link to="/blog" className="text-boraq-teal-steel font-medium hover:underline">{post.category}</Link>
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
                        {/* Lead paragraph */}
                        <p className="lead text-3xl md:text-4xl leading-[1.3] text-boraq-black dark:text-white mb-20">
                            {post.excerpt}
                        </p>

                        {/* Dynamic content */}
                        <ContentRenderer content={post.content} />
                    </motion.article>

                    {/* Footer Share & Tagging */}
                    <div className="mt-32 pt-12 border-t border-boraq-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 pb-20">
                        <div className="flex flex-wrap gap-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-xl bg-boraq-black/5 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-boraq-black/50 dark:text-white/50 border border-transparent hover:border-boraq-teal-steel/20 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-boraq-black/30 dark:text-white/30">Next Signal:</span>
                            <Link to={`/blog/${nextPost.id}`} className="group flex items-center gap-2 font-bold text-boraq-black dark:text-white">
                                {nextPost.title.length > 40 ? nextPost.title.slice(0, 40) + '…' : nextPost.title} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
