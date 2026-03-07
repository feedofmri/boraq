import { motion } from 'framer-motion';
import { Cpu, Wifi, ShieldCheck, Activity } from 'lucide-react';

const features = [
  { title: 'IoT Architecture', desc: 'Secure, low-latency data pipelines connecting physical sensors to the cloud.', icon: Wifi },
  { title: 'Edge Computing', desc: 'Processing data locally on devices to reduce turnaround time and bandwidth.', icon: Cpu },
  { title: 'Device Lifecycle', desc: 'OTA (Over-The-Air) firmware updates, provisioning, and fleet management.', icon: Activity },
  { title: 'Hardware Security', desc: 'End-to-end encryption and secure enclaves to protect sensitive telemetry.', icon: ShieldCheck },
];

export default function SmartDevice() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            Internet of Things (IoT)
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Bridging the <br /> <span className="text-boraq-cyan italic">Physical & Digital.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We build the invisible infrastructure that powers smart cities, automated factories, and next-generation consumer electronics.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Device Graphic Container */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full aspect-square md:aspect-video lg:aspect-square max-w-xl mx-auto glass-panel-heavy rounded-[3rem] border border-white/10 p-8 md:p-12 relative flex items-center justify-center overflow-hidden"
            >
              {/* Abstract Sensor Ring Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 rounded-full border border-dashed border-boraq-cyan/30 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-dashed border-boraq-cyan/50 animate-[spin_15s_linear_infinite_reverse]" />
              </div>

              <div className="relative z-10 glass-panel p-8 rounded-[2rem] border border-boraq-cyan/30 bg-black/40 backdrop-blur-md shadow-2xl flex flex-col items-center gap-6">
                <Cpu className="w-16 h-16 text-boraq-cyan" />
                <div className="text-center">
                  <div className="text-xs font-mono text-boraq-cyan/80 mb-2">TELEMETRY STREAM</div>
                  <div className="text-3xl font-bold text-white tracking-widest">
                    V-8 <span className="text-boraq-cyan animate-pulse">●</span> ONLINE
                  </div>
                </div>
                <div className="w-full bg-black/40 rounded-full h-2 mt-4 overflow-hidden">
                  <div className="bg-boraq-cyan h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
                <div className="w-full flex justify-between text-xs text-white/50 font-mono">
                  <span>LATENCY: 12ms</span>
                  <span>STATUS: OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features List */}
          <div className="flex-1 order-1 lg:order-2 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-panel p-6 rounded-3xl flex items-start gap-6 group hover:border-boraq-cyan/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-boraq-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
