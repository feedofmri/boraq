import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, BookOpen, Check } from 'lucide-react';

const faqs = [
    {
        question: "Do you only work with large enterprises?",
        answer: "Not at all. While we have scaled systems for millions of users, we love partnering with visionary startups and mid-market companies to help them grow. We scale our teams to fit your specific needs and budget."
    },
    {
        question: "How do you ensure transparency during development?",
        answer: "You are treated as an extension of our team. You get access to our Slack channel, Jira boards, and weekly sprint reviews. We demonstrate working software every 1-2 weeks, so you never have to guess about progress."
    },
    {
        question: "What happens after the project launches?",
        answer: "We don't just launch and leave. We offer comprehensive Service Level Agreements (SLAs) for maintenance, security patches, and iterative feature development based on live user feedback."
    },
    {
        question: "How do you handle intellectual property (IP)?",
        answer: "You own 100% of the code and intellectual property we write for you upon payment completion. We sign strict NDAs before you share a single detail with us to protect your vision."
    },
    {
        question: "What is your tech stack?",
        answer: "We are technology agnostic but highly specialized. We primarily use React/Next.js for web, Flutter/React Native for mobile, and Node.js/Python/Go for scalable backends."
    }
];

export default function InteractiveFAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const [readItems, setReadItems] = useState(new Set([0]));
    const allRead = readItems.size >= faqs.length;

    const handleToggle = (index) => {
        const isOpen = openIndex === index;
        setOpenIndex(isOpen ? -1 : index);
        if (!isOpen) {
            setReadItems((prev) => new Set(prev).add(index));
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left: Text & CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">Honest Answers to <span className="text-boraq-teal-steel">Hard Questions</span></h2>
                        <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver mb-6 font-light">
                            We believe in full transparency. Here are the most common questions our partners ask us before we start working together.
                        </p>

                        {/* Knowledge progress */}
                        <div className="glass-panel rounded-2xl p-5 mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    KNOWLEDGE
                                </div>
                                <span className="text-xs font-mono text-boraq-teal-steel font-bold">{readItems.size}/{faqs.length}</span>
                            </div>
                            <div className="flex gap-1.5">
                                {faqs.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                                            readItems.has(i) ? 'bg-boraq-teal-steel' : 'bg-boraq-gray-silver/15 dark:bg-boraq-teal-deep/15'
                                        }`}
                                    />
                                ))}
                            </div>
                            <AnimatePresence>
                                {allRead && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="text-[11px] font-mono text-green-400 font-bold mt-3 flex items-center gap-1"
                                    >
                                        <Check className="w-3 h-3" /> Fully briefed — you're ready!
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl group">
                        <MessageSquare className="w-10 h-10 text-boraq-teal-steel mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-boraq-black dark:text-boraq-white">Still have questions?</h3>
                        <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm mb-6">
                            Our technical architects are happy to jump on a no-pressure discovery call.
                        </p>
                        <button className="w-full bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black py-4 rounded-xl font-bold hover:bg-boraq-teal-deep dark:hover:bg-boraq-teal-light transition-all duration-300">
                            Ask an Expert
                        </button>
                    </div>
                </div>

                {/* Right: Accordion */}
                <div className="lg:w-2/3 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const isRead = readItems.has(index);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-boraq-teal-steel/50 shadow-md' : 'hover:border-boraq-gray-silver/30 dark:hover:border-boraq-teal-deep/30'}`}
                            >
                                <button
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="flex items-center gap-3">
                                        {isRead && !isOpen && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                <Check className="w-4 h-4 text-green-400 shrink-0" />
                                            </motion.div>
                                        )}
                                        <span className={`font-bold text-lg ${isOpen ? 'text-boraq-teal-steel' : 'text-boraq-black dark:text-boraq-white'}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div
                                        className={`p-2 rounded-full transition-all duration-300 shrink-0 ${isOpen ? 'bg-boraq-teal-deep/10 text-boraq-teal-steel rotate-180' : 'bg-boraq-black/5 dark:bg-boraq-white/5 text-boraq-black dark:text-boraq-white rotate-0'}`}
                                    >
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-8 pb-6"
                                        >
                                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed pt-2 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
