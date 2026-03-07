import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Eye, Mic, Fingerprint, Expand } from 'lucide-react';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const technologies = [
  { title: 'Optical Character Recognition', desc: 'Extracting structured data from unstructured physical documents.', icon: Expand },
  { title: 'Facial Recognition', desc: 'Secure, privacy-first biometric authentication systems.', icon: Fingerprint },
  { title: 'Speaker Diarization', desc: 'Identifying "who spoke when" in multi-speaker audio streams.', icon: Mic },
  { title: 'Pose Estimation', desc: 'Tracking human movement for sports, healthcare, and retail analytics.', icon: Eye },
];

const detectionClasses = [
  { label: 'Person', color: 'border-green-400', textColor: 'text-green-400', bg: 'bg-green-400/10' },
  { label: 'Vehicle', color: 'border-blue-400', textColor: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Object', color: 'border-yellow-400', textColor: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { label: 'Animal', color: 'border-pink-400', textColor: 'text-pink-400', bg: 'bg-pink-400/10' },
  { label: 'Text', color: 'border-purple-400', textColor: 'text-purple-400', bg: 'bg-purple-400/10' },
];

function InteractiveVisionDetector() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [detected, setDetected] = useState(false);
  const [detections, setDetections] = useState(0);
  const [clicks, setClicks] = useState([]);

  const currentClass = detectionClasses[Math.floor((mousePos.x + mousePos.y) / 40) % detectionClasses.length];
  const confidence = Math.min(99, Math.floor(70 + (mousePos.x * mousePos.y) % 30));

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) });
    setDetected(true);
  }, []);

  const handleClick = useCallback(() => {
    if (!detected) return;
    setDetections((d) => d + 1);
    setClicks((prev) => [
      ...prev.slice(-4),
      { x: mousePos.x, y: mousePos.y, cls: currentClass, id: Date.now() },
    ]);
  }, [detected, mousePos, currentClass]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setDetected(false)}
      onClick={handleClick}
      className="w-full aspect-[4/5] glass-panel-heavy rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between cursor-crosshair"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-boraq-black/30 via-transparent to-boraq-black/10" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(130,169,180,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(130,169,180,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 w-full h-[2px] transition-all duration-100 ease-out"
        style={{
          top: `${mousePos.y}%`,
          background: `linear-gradient(90deg, transparent, ${detected ? '#34d399' : '#82A9B4'}, transparent)`,
          boxShadow: detected ? '0 0 20px rgba(52,211,153,0.8)' : '0 0 20px rgba(130,169,180,0.8)',
        }}
      />

      {/* Vertical scan line */}
      {detected && (
        <div
          className="absolute top-0 h-full w-[1px] transition-all duration-100 ease-out pointer-events-none"
          style={{
            left: `${mousePos.x}%`,
            background: `linear-gradient(180deg, transparent, ${currentClass.textColor.replace('text-', '').includes('green') ? '#34d399' : '#60a5fa'}, transparent)`,
          }}
        />
      )}

      {/* Pinned detection boxes from clicks */}
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1 }}
          className={`absolute w-16 h-16 ${click.cls.color} border rounded-md pointer-events-none`}
          style={{ left: `calc(${click.x}% - 32px)`, top: `calc(${click.y}% - 32px)` }}
        >
          <span className={`absolute -top-4 left-0 text-[8px] font-mono ${click.cls.textColor} ${click.cls.bg} px-1 rounded`}>
            {click.cls.label}
          </span>
        </motion.div>
      ))}

      {/* Live bounding box */}
      {detected && (
        <div
          className={`absolute w-24 h-24 ${currentClass.color} border-2 rounded-lg transition-all duration-100 ease-out pointer-events-none animate-pulse-soft`}
          style={{ left: `calc(${mousePos.x}% - 48px)`, top: `calc(${mousePos.y}% - 48px)`, willChange: 'left, top' }}
        >
          <span className={`absolute -top-5 left-0 text-[10px] font-mono font-bold ${currentClass.textColor} ${currentClass.bg} px-1.5 py-0.5 rounded`}>
            {currentClass.label} {confidence}%
          </span>
          <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${currentClass.color}`} />
          <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${currentClass.color}`} />
          <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${currentClass.color}`} />
          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${currentClass.color}`} />
        </div>
      )}

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-start">
        <div className={`px-3 py-1 rounded-full backdrop-blur-md text-xs font-bold font-mono border flex items-center gap-2 ${
          detected
            ? 'bg-green-500/20 text-green-400 border-green-500/30'
            : 'bg-boraq-black/50 text-boraq-white border-boraq-white/10'
        }`}>
          <span className={`w-2 h-2 rounded-full ${detected ? 'bg-green-400' : 'bg-boraq-gray-mid'} animate-pulse`} />
          {detected ? 'TRACKING' : 'HOVER TO SCAN'}
        </div>
        <div className="px-3 py-1 rounded-full bg-boraq-black/50 backdrop-blur-md text-boraq-teal-steel text-xs font-bold font-mono border border-boraq-teal-steel/30">
          {detections} detected
        </div>
      </div>

      {/* Console */}
      <div className="relative z-10">
        <div className="border border-boraq-teal-steel/20 rounded-2xl p-4 bg-boraq-black/40 backdrop-blur-sm">
          <div className="space-y-2 font-mono text-xs">
            <p className={detected ? 'text-green-400' : 'text-boraq-gray-mid'}>
              &gt; {detected ? 'Target Acquired.' : 'Awaiting input...'}
            </p>
            <p className="text-boraq-teal-steel/80">
              &gt; {detected ? `Coords: [${Math.round(mousePos.x)}, ${Math.round(mousePos.y)}]` : 'Move cursor to detect'}
            </p>
            <p className={detected ? `${currentClass.textColor} font-bold` : 'text-boraq-gray-mid/40'}>
              &gt; {detected ? `Class: ${currentClass.label} • ${confidence}% conf.` : '—'}
            </p>
            {detected && (
              <p className="text-boraq-gray-silver/40 text-[10px]">Click to pin detection</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
            Sensory Computing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Machines that <br /> <span className="text-boraq-teal-steel italic">see and hear.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We build sophisticated computer vision and natural language processing pipelines that allow software to understand the physical world in real-time.
          </p>

          {/* Human trust strip */}
          <HeroTrustStrip
            centered
            lead={{
              name: 'Elena Rodriguez',
              role: 'Lead AI Engineer',
              avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
            }}
          />
        </motion.div>
      </section>

      {/* Split Visual / Feature Section — original scanning animation visual */}
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
                <div className="mt-1 w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center shrink-0 border border-transparent group-hover:border-boraq-teal-steel/30 transition-colors duration-300">
                  <tech.icon className="w-5 h-5 text-boraq-gray-mid dark:text-boraq-gray-silver group-hover:text-boraq-teal-steel transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-boraq-teal-steel transition-colors text-boraq-black dark:text-boraq-white">{tech.title}</h3>
                  <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed font-light">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side — Interactive Vision Detector */}
          <div className="flex-1 lg:pl-12">
            <InteractiveVisionDetector />
          </div>
        </div>
      </section>

      {/* NEW: Human trust section */}
      <ServiceHumanSection
        teamLead={{
          name: 'Elena Rodriguez',
          role: 'Lead AI Engineer',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
          bio: 'PhD in Machine Learning from MIT. Elena specializes in computer vision and NLP systems that process real-world data with near-human accuracy, and she personally oversees every deployment.',
          funFact: 'Watercolor painter & AI ethics advocate',
        }}
        testimonial={{
          quote: 'Their vision pipeline processes our entire document archive with 99.8% accuracy — what used to take weeks now happens in hours.',
          author: 'Dr. Priya Sharma',
          role: 'CTO, MediScan',
          avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
          result: '99.8% OCR accuracy',
        }}
        stats={[
          { label: 'Vision Models Shipped', value: '15+' },
          { label: 'Images Processed Daily', value: '5M+' },
          { label: 'Languages Supported', value: '40+' },
        ]}
        processNote="Elena demos working prototypes within the first 2 weeks — you'll see real results before committing further."
      />

      <Testimonials />
      <CallToAction />
    </div>
  );
}
