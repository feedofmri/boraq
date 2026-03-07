import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamAvatars = [
    { name: 'Sarah', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100' },
    { name: 'Michael', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' },
    { name: 'Elena', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100' },
    { name: 'Arifur', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100' },
];

const orbs = [
    { size: 'w-3 h-3', color: 'bg-blue-400/60', x: '10%', y: '20%', duration: '6s' },
    { size: 'w-2 h-2', color: 'bg-purple-400/60', x: '80%', y: '15%', duration: '8s' },
    { size: 'w-4 h-4', color: 'bg-pink-400/40', x: '70%', y: '70%', duration: '7s' },
    { size: 'w-2 h-2', color: 'bg-cyan-400/60', x: '20%', y: '75%', duration: '5s' },
    { size: 'w-3 h-3', color: 'bg-green-400/40', x: '50%', y: '10%', duration: '9s' },
    { size: 'w-2 h-2', color: 'bg-yellow-400/60', x: '90%', y: '50%', duration: '6.5s' },
];

export default function CallToAction() {
    return (
        <section className="w-full relative py-32 overflow-hidden bg-transparent">
            {/* Ambient Section Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-boraq-teal-deep/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute -left-[10%] top-0 w-[40%] h-[40%] rounded-full bg-boraq-teal-steel/10 blur-[120px] pointer-events-none" />

            {/* Floating orbs — pure CSS animation */}
            {orbs.map((orb, i) => (
                <div
                    key={i}
                    className={`absolute ${orb.size} ${orb.color} rounded-full pointer-events-none blur-[1px] animate-float-orb`}
                    style={{ left: orb.x, top: orb.y, '--orb-duration': orb.duration, animationDelay: `${i * -1.2}s` }}
                />
            ))}

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-heavy text-boraq-black dark:text-boraq-white text-sm font-bold mb-8">
                        <Sparkles className="w-4 h-4 text-boraq-teal-steel" />
                        Let's build something extraordinary
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
                        Ready to transform your <span className="text-boraq-teal-steel">vision</span> into reality?
                    </h2>

                    {/* Personal founder micro-quote */}
                    <div className="glass-panel rounded-2xl px-6 py-4 max-w-xl mx-auto mb-8 text-left">
                        <p className="text-base italic text-boraq-gray-mid dark:text-boraq-gray-silver">
                            "I personally review every project inquiry to ensure we're the right fit for your vision."
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                                alt="Arifur Rahman"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-sm font-bold text-boraq-black dark:text-boraq-white">
                                Arifur Rahman, <span className="font-normal text-boraq-teal-steel">Founder</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/book-a-call" className="h-14 px-8 rounded-full bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black font-bold text-lg flex items-center gap-2 group shadow-xl shadow-boraq-teal-deep/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-boraq-teal-steel/20">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portfolio" className="h-14 px-8 rounded-full glass-panel-heavy border-boraq-gray-silver/30 dark:border-boraq-teal-deep/30 text-boraq-black dark:text-boraq-white font-bold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
                            View Portfolio
                        </Link>
                    </div>

                    {/* Team avatars + response time — human trust signals */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="flex items-center">
                            <div className="flex -space-x-3">
                                {teamAvatars.map((member, idx) => (
                                    <img
                                        key={idx}
                                        src={member.image}
                                        alt={member.name}
                                        className="w-10 h-10 rounded-full border-2 border-boraq-white dark:border-boraq-black object-cover"
                                    />
                                ))}
                            </div>
                            <p className="ml-4 text-sm text-boraq-gray-mid dark:text-boraq-gray-silver text-left">
                                <span className="font-bold text-boraq-black dark:text-boraq-white">You'll work with senior architects</span><br />
                                Not outsourced or junior devs
                            </p>
                        </div>

                        <div className="w-px h-10 bg-boraq-gray-silver/20 dark:bg-boraq-teal-deep/20 hidden sm:block" />

                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Clock className="w-5 h-5 text-boraq-teal-steel" />
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <p className="text-sm text-boraq-gray-mid dark:text-boraq-gray-silver">
                                <span className="font-bold text-boraq-black dark:text-boraq-white">Avg. response: 2 hours</span>
                            </p>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-boraq-gray-mid/60 dark:text-boraq-gray-silver/40 font-medium">
                        No commitment required. 100% strictly confidential.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
