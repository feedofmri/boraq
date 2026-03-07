import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import InteractiveFAQ from '../../components/sections/InteractiveFAQ';


export default function Contact() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Intro / Details Side */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-boraq-black dark:text-boraq-white">
                Initiate <span className="text-boraq-teal-steel italic">contact.</span>
              </h1>
              <p className="text-lg text-boraq-gray-mid dark:text-boraq-gray-silver font-light leading-relaxed mb-12">
                For general inquiries, press, or partnership requests, drop us a line. If you're looking to start a project, we recommend using the <a href="/book-a-call" className="text-boraq-teal-steel underline underline-offset-4 pointer-events-auto relative z-20 font-bold">Book a Call</a> flow for faster routing.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-boraq-teal-steel bg-boraq-teal-steel/10 border border-boraq-teal-steel/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1">Email</h3>
                    <p className="text-boraq-black dark:text-boraq-white font-light text-sm mb-1 text-boraq-gray-mid dark:text-boraq-gray-silver">Our inbox is actively monitored.</p>
                    <a href="mailto:hello@boraq.io" className="font-bold text-boraq-teal-steel hover:text-boraq-black dark:hover:text-boraq-white transition-colors tracking-tight">hello@boraq.io</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-boraq-teal-steel bg-boraq-teal-steel/10 border border-boraq-teal-steel/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1">HQ</h3>
                    <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light text-sm mb-1">Fully remote, but headquartered in:</p>
                    <p className="font-bold text-boraq-black dark:text-boraq-white tracking-tight">London, UK</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Side */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel-heavy p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden h-full"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-boraq-teal-steel/20 blur-[80px] rounded-full pointer-events-none" />

              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver">First Name</label>
                    <input type="text" className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl px-4 py-3 focus:outline-none focus:border-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white font-light" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver">Last Name</label>
                    <input type="text" className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl px-4 py-3 focus:outline-none focus:border-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white font-light" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver">Email Address</label>
                  <input type="email" className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl px-4 py-3 focus:outline-none focus:border-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white font-light" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver">Message</label>
                  <textarea rows={5} className="w-full bg-boraq-black/5 dark:bg-boraq-white/5 border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 rounded-xl px-4 py-3 focus:outline-none focus:border-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white resize-none font-light" placeholder="How can we help?" />
                </div>

                <button className="w-full py-4 rounded-xl bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-boraq-teal-steel hover:text-boraq-black transition-colors focus:outline-none focus:ring-2 focus:ring-boraq-teal-steel group">
                  Transmit Message <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <InteractiveFAQ />
      <CallToAction />
    </div>
  );
}
