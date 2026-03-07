import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, RefreshCcw } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discovery & Strategy',
        description: 'We start by listening. We dive deep into your business goals, target audience, and technical constraints to formulate a roadmap.',
        timeline: 'Week 1-2',
    },
    {
        icon: PenTool,
        title: 'UI/UX Design',
        description: 'Our design team creates wireframes and high-fidelity prototypes, focusing on user journeys and conversion optimization.',
        timeline: 'Week 3-5',
    },
    {
        icon: Code,
        title: 'Development & Engineering',
        description: 'We write clean, scalable code. You get full transparency with weekly sprint demos and access to staging environments.',
        timeline: 'Week 6-12+',
    },
    {
        icon: Rocket,
        title: 'Testing & Launch',
        description: 'Rigorous QA testing ensures a bug-free experience. We handle the deployment architecture to ensure a smooth launch.',
        timeline: 'Week 13-14',
    },
    {
        icon: RefreshCcw,
        title: 'Growth & Iterate',
        description: 'Post-launch, we monitor analytics, gather user feedback, and iterate to continuously improve performance and ROI.',
        timeline: 'Ongoing',
    },
];

export default function ProcessTimeline() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">How We <span className="text-boraq-teal-steel">Work With You</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    A transparent, human-driven process designed to eliminate surprises and deliver predictable excellence.
                </p>
            </div>

            <div className="relative">
                {/* Central Line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-boraq-teal-steel/30 to-transparent -translate-x-1/2" />

                <div className="space-y-12 lg:space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-start lg:pl-16' : 'lg:items-end lg:pr-16 text-left lg:text-right'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.6 }}
                                        className="glass-panel p-8 rounded-3xl max-w-lg hover:border-boraq-teal-steel/30 transition-colors relative group"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl pointer-events-none group-hover:scale-110 transition-transform hidden sm:block">
                                            0{index + 1}
                                        </div>
                                        <div className="flex items-center gap-4 mb-4 justify-start">
                                            <div className="px-3 py-1 rounded-full bg-boraq-teal-deep/10 text-boraq-teal-steel text-xs font-bold uppercase tracking-wider">
                                                {step.timeline}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{step.title}</h3>
                                        <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center Node */}
                                <div className="hidden lg:flex w-16 h-16 absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.4, type: "spring" }}
                                        className="w-12 h-12 rounded-full glass-panel-heavy border-boraq-teal-steel/30 flex items-center justify-center z-10"
                                    >
                                        <step.icon className="w-5 h-5 text-boraq-teal-steel" />
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
