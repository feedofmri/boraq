import { motion } from 'framer-motion';
import { Calendar, Clock, Video, ArrowRight } from 'lucide-react';
import CallToAction from '../../components/sections/CallToAction';


export default function BookCall() {
  return (
    <div className="w-full pb-32">
      {/* Split Layout */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build something <span className="text-boraq-cyan">extraordinary.</span>
            </h1>
            <p className="text-lg text-black/70 dark:text-white/70 font-light leading-relaxed mb-12">
              Book a 30-minute discovery call with our engineering leadership to discuss your technical challenges, architectural needs, and how Boraq can accelerate your roadmap.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-boraq-cyan/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-boraq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Pick a Date</h3>
                  <p className="text-black/60 dark:text-white/60">Choose a time that works best for your team's schedule.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-boraq-cyan/10 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-boraq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Google Meet</h3>
                  <p className="text-black/60 dark:text-white/60">A secure video link will be sent directly to your inbox upon booking.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-boraq-cyan/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-boraq-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">30 Minutes</h3>
                  <p className="text-black/60 dark:text-white/60">High signal, low noise. We value your time.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form / Calendar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="glass-panel-heavy p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden h-full min-h-[600px] flex flex-col">
              {/* Decorative Glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-boraq-cyan/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Schedule Now</h2>
                  <p className="text-black/50 dark:text-white/50">Select an available slot below.</p>
                </div>

                {/* Placeholder for embedded scheduling tool (e.g. Calendly) */}
                <div className="flex-1 glass-panel rounded-2xl flex items-center justify-center border border-black/5 dark:border-white/5 flex-col gap-4 p-8 text-center bg-black/5 dark:bg-white/5">
                  <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-black/10 animate-pulse flex items-center justify-center">
                    <Calendar className="w-8 h-8 opacity-50" />
                  </div>
                  <div className="space-y-2 w-full max-w-xs mx-auto">
                    <div className="h-4 w-full bg-black/10 dark:bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-3/4 mx-auto bg-black/10 dark:bg-white/10 rounded animate-pulse" />
                    <div className="h-4 w-1/2 mx-auto bg-black/10 dark:bg-white/10 rounded animate-pulse" />
                  </div>
                  <p className="mt-4 text-sm font-medium opacity-50">Calendly Widget Integration Ready</p>
                </div>

                <button className="mt-8 w-full group relative overflow-hidden rounded-full bg-black dark:bg-white text-white dark:text-black py-4 px-8 flex items-center justify-center gap-2 font-bold transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-boraq-cyan transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">Continue to Details</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-black transition-colors duration-300" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      <CallToAction />
    </div>
  );
}
