import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion, Search } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


const faqs = [
  {
    question: "What is your typical project engagement model?",
    answer: "We offer flexible engagement models — from dedicated team augmentation to full product lifecycle management. Each client gets a dedicated manager for personalized handling, with transparent communication throughout."
  },
  {
    question: "Do you maintain the applications after launch?",
    answer: "Absolutely. We provide 24x7 support and ongoing maintenance covering security patches, updates, and iterative improvements. We don't just launch and leave — we're here for the long term."
  },
  {
    question: "What technology stacks do you specialize in?",
    answer: "We specialize in React, React Native, WordPress, Python, and the MERN stack (MongoDB, Express, React, Node.js). Our six divisions also cover AI/ML (Scikit-learn, TensorFlow), Computer Vision (OpenCV), and Web3 (Solidity, Smart Contracts)."
  },
  {
    question: "How do you handle intellectual property (IP)?",
    answer: "You own 100% of the IP, source code, and assets upon project completion and payment. We operate under strict NDAs and ensure full transparency throughout the development process."
  },
  {
    question: "How do I get started with Boraq?",
    answer: "We offer free expert consultations to help you navigate your digital transformation. Simply book a call or reach out at hello@boraq.io and we'll discuss your project needs, timeline, and approach."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-teal-steel/20 text-boraq-teal-steel text-sm font-bold mb-6">
            <MessageCircleQuestion className="w-4 h-4" />
            Knowledge Base
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Frequently Asked <span className="text-boraq-teal-steel italic">Questions.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Radical transparency regarding our processes, pricing, and engineering methodology.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:border-boraq-teal-steel/50 focus:ring-1 focus:ring-boraq-teal-steel/50 transition-all text-sm text-boraq-black dark:text-boraq-white placeholder:text-boraq-gray-mid/50"
            />
          </div>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => {
            const originalIndex = faqs.indexOf(faq);
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 hover:bg-boraq-black/5 dark:hover:bg-boraq-white/5 transition-colors focus:outline-none"
              >
                <h3 className={`text-lg md:text-xl font-bold ${openIndex === originalIndex ? 'text-boraq-teal-steel' : 'text-boraq-black dark:text-boraq-white'} transition-colors`}>
                  {faq.question}
                </h3>
                <span className={`transition-transform duration-300 ${openIndex === originalIndex ? 'rotate-180 text-boraq-teal-steel' : 'text-boraq-gray-mid'}`}>
                  <ChevronDown className="w-6 h-6 shrink-0" />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === originalIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 pt-6 mt-2 font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-lg">No questions match "<span className="font-bold text-boraq-black dark:text-boraq-white">{search}</span>"</p>
            <button onClick={() => setSearch('')} className="mt-4 text-sm text-boraq-teal-steel font-bold hover:underline">Clear search</button>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-boraq-gray-mid dark:text-boraq-gray-silver mb-4 font-bold text-[10px] uppercase tracking-widest">Still have a question?</p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black font-bold text-sm tracking-widest uppercase hover:scale-[1.02] transition-transform">
            Reach out to our team
          </a>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
