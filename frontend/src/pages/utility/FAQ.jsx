import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


const faqs = [
  {
    question: "What is your typical project engagement model?",
    answer: "We prefer dedicated, deeply integrated team augmented sprints or full product lifecycle management. We do not do hourly tracking or piecemeal feature work. We act as an extension of your core team with a focus on long-term infrastructure health."
  },
  {
    question: "Do you maintain the applications after launch?",
    answer: "Yes. Every enterprise project ships with an optional 12-to-36 month SLA (Service Level Agreement) covering security patches, dependency upgrades, and uptime monitoring via our internal DevOps pipelines."
  },
  {
    question: "What technology stacks do you specialize in?",
    answer: "For frontend, we strictly use React, Next.js, and React Native/Flutter. For backend infrastructure, we leverage Go, Node.js (TypeScript), and Python for AI/ML tasks, all deployed on AWS or GCP using Kubernetes or Serverless architectures."
  },
  {
    question: "How do you handle intellectual property (IP)?",
    answer: "You own 100% of the IP, source code, and assets the moment the final milestone is delivered and cleared. We operate under strict NDAs and ensure all code is pushed directly to your organization's repositories."
  },
  {
    question: "What is the minimum budget for a Boraq engagement?",
    answer: "To maintain our standard of engineering excellence, our minimum engagement for new product builds starts at $50,000 USD. For strategic consulting or audit sprints, engagements start at $15,000 USD."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            <MessageCircleQuestion className="w-4 h-4" />
            Knowledge Base
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Frequently Asked <span className="text-boraq-cyan italic">Questions.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Radical transparency regarding our processes, pricing, and engineering methodology.
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden border border-black/5 dark:border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
              >
                <h3 className={`text-lg md:text-xl font-bold ${openIndex === i ? 'text-boraq-cyan' : ''} transition-colors`}>
                  {faq.question}
                </h3>
                <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-boraq-cyan' : 'text-black/40 dark:text-white/40'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-black/70 dark:text-white/70 leading-relaxed border-t border-black/5 dark:border-white/5 pt-6 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-black/60 dark:text-white/60 mb-4">Still have a question?</p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] transition-transform">
            Reach out to our team
          </a>
        </div>
      </section>
      <CallToAction />
    </div>
  );
}
