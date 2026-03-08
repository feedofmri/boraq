import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Check, Wifi } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';
import InteractiveFAQ from '../../components/sections/InteractiveFAQ';


function FormField({ label, type = 'text', placeholder, value, onChange, rows }) {
  const [focused, setFocused] = useState(false);
  const filled = value && value.length > 0;
  const Tag = rows ? 'textarea' : 'input';

  return (
    <div className="space-y-2 relative">
      <label
        className={`text-[10px] font-bold uppercase tracking-widest block origin-left transition-all duration-300 ${
          focused ? 'text-boraq-teal-steel scale-[1.02]' : 'text-boraq-gray-mid dark:text-boraq-gray-silver scale-100'
        }`}
      >
        {label}
        {filled && <Check className="w-3 h-3 text-green-400 inline ml-1.5" />}
      </label>
      <Tag
        type={type}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-boraq-black/5 dark:bg-boraq-white/5 border rounded-xl px-4 py-3 focus:outline-none transition-all duration-300 text-boraq-black dark:text-boraq-white font-light ${
          focused
            ? 'border-boraq-teal-steel shadow-[0_0_15px_rgba(130,169,180,0.15)]'
            : 'border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10'
        } ${rows ? 'resize-none' : ''}`}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const filledCount = Object.values(form).filter((v) => v.length > 0).length;
  const totalFields = 4;

  const handleSend = (e) => {
    e.preventDefault();
    if (filledCount < totalFields) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

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
                    <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light text-sm mb-1">Our inbox is actively monitored.</p>
                    <a href="mailto:hello@boraq.io" className="font-bold text-boraq-teal-steel hover:text-boraq-black dark:hover:text-boraq-white transition-colors tracking-tight">hello@boraq.io</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-boraq-teal-steel bg-boraq-teal-steel/10 border border-boraq-teal-steel/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-1">HQ</h3>
                    <p className="text-boraq-gray-mid dark:text-boraq-gray-silver font-light text-sm mb-1">Our office is located in:</p>
                    <p className="font-bold text-boraq-black dark:text-boraq-white tracking-tight">Mirpur 14, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Connection strength meter */}
              <div className="mt-12 glass-panel rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">
                    <Wifi className="w-3.5 h-3.5" /> CONNECTION
                  </div>
                  <span className="text-xs font-mono text-boraq-teal-steel font-bold">{filledCount}/{totalFields}</span>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(totalFields)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                        i < filledCount ? 'bg-boraq-teal-steel' : 'bg-boraq-gray-silver/15 dark:bg-boraq-teal-deep/15'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-mono text-boraq-gray-mid/40 dark:text-boraq-gray-silver/30 mt-2">
                  {filledCount === 0 ? 'Fill fields to establish connection' : filledCount < totalFields ? 'Connection strengthening...' : 'Full signal — ready to transmit'}
                </p>
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

              <form className="relative z-10 space-y-6" onSubmit={handleSend}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" placeholder="John" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  <FormField label="Last Name" placeholder="Doe" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
                <FormField label="Email Address" type="email" placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <FormField label="Message" placeholder="How can we help?" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-boraq-teal-steel group ${
                    sent
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-boraq-black dark:bg-boraq-white text-boraq-white dark:text-boraq-black hover:bg-boraq-teal-steel hover:text-boraq-black'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                        <Check className="w-4 h-4" /> Message Transmitted
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                        Transmit Message <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
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
