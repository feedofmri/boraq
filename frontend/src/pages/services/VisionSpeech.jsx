import { motion } from 'framer-motion';
import { Eye, Mic, Fingerprint, Expand } from 'lucide-react';

const technologies = [
  { title: 'Optical Character Recognition', desc: 'Extracting structured data from unstructured physical documents.', icon: Expand },
  { title: 'Facial Recognition', desc: 'Secure, privacy-first biometric authentication systems.', icon: Fingerprint },
  { title: 'Speaker Diarization', desc: 'Identifying "who spoke when" in multi-speaker audio streams.', icon: Mic },
  { title: 'Pose Estimation', desc: 'Tracking human movement for sports, healthcare, and retail analytics.', icon: Eye },
];

export default function VisionSpeech() {
  return (
    <div className="w-full pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
            Sensory Computing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Machines that <br /> <span className="text-boraq-cyan italic">see and hear.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            We build sophisticated computer vision and natural language processing pipelines that allow software to understand the physical world in real-time.
          </p>
        </motion.div>
      </section>

      {/* Split Visual / Feature Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side Feature List */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="mt-1 w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center shrink-0 border border-transparent group-hover:border-boraq-cyan/30 transition-colors duration-300">
                  <tech.icon className="w-5 h-5 text-black/70 dark:text-white/70 group-hover:text-boraq-cyan transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-boraq-cyan transition-colors">{tech.title}</h3>
                  <p className="text-black/60 dark:text-white/60 leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side Visualizer */}
          <div className="flex-1 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full aspect-[4/5] glass-panel-heavy rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-white/5" />

              {/* Scanning Animation */}
              <div className="absolute top-1/4 left-0 w-full h-[2px] bg-boraq-cyan shadow-[0_0_20px_rgba(6,182,212,1)] animate-[scan_3s_ease-in-out_infinite]" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="px-3 py-1 rounded-full bg-black/50 dark:bg-black/50 backdrop-blur-md text-white text-xs font-mono border border-white/10">
                  ANALYSIS ACTIVE
                </div>
                <div className="px-3 py-1 rounded-full bg-boraq-cyan/20 text-boraq-cyan text-xs font-mono border border-boraq-cyan/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-boraq-cyan animate-pulse" />
                  99.8% ACCURACY
                </div>
              </div>

              <div className="relative z-10">
                <div className="border border-boraq-cyan/30 rounded-2xl p-6 bg-black/10 dark:bg-black/40 backdrop-blur-sm">
                  <div className="space-y-3 font-mono text-sm text-boraq-cyan/80">
                    <p>&gt; Target Acquired.</p>
                    <p>&gt; Processing bounding boxes...</p>
                    <p className="text-white">&gt; Classification: Human Entity.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
