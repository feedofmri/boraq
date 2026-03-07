import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare } from 'lucide-react';

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

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left: Text & CTA */}
                <div className="lg:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight mb-6">Honest Answers to <span className="text-boraq-cyan">Hard Questions</span></h2>
                        <p className="text-lg text-black/70 dark:text-white/70 mb-8 font-light">
                            We believe in full transparency. Here are the most common questions our partners ask us before we start working together.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl group">
                        <MessageSquare className="w-10 h-10 text-boraq-cyan mb-4" />
                        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                        <p className="text-black/60 dark:text-white/60 text-sm mb-6">
                            Our technical architects are happy to jump on a no-pressure discovery call.
                        </p>
                        <button className="w-full bg-boraq-dark dark:bg-white text-white dark:text-black py-4 rounded-xl font-medium hover:bg-boraq-cyan hover:text-black transition-colors duration-300">
                            Ask an Expert
                        </button>
                    </div>
                </div>

                {/* Right: Accordion */}
                <div className="lg:w-2/3 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-boraq-cyan/50 shadow-md' : 'hover:border-black/10 dark:hover:border-white/10'}`}
                            >
                                <button
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <span className={`font-medium text-lg ${isOpen ? 'text-boraq-cyan' : ''}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-boraq-cyan/10 text-boraq-cyan' : 'bg-black/5 dark:bg-white/5'}`}>
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
                                            <p className="text-black/70 dark:text-white/70 font-light leading-relaxed pt-2 border-t border-black/5 dark:border-white/5">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
