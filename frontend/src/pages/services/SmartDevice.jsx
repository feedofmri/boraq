import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, ShieldCheck, Activity } from 'lucide-react';
import plPhoto from '../../assets/Team/Tahmid Khan - Project Lead.jpg';
import HeroTrustStrip from '../../components/sections/HeroTrustStrip';
import ServiceHumanSection from '../../components/sections/ServiceHumanSection';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';


const features = [
  { title: 'IoT Architecture', desc: 'Secure, low-latency data pipelines connecting physical sensors to the cloud.', icon: Wifi },
  { title: 'Edge Computing', desc: 'Processing data locally on devices to reduce turnaround time and bandwidth.', icon: Cpu },
  { title: 'Device Lifecycle', desc: 'OTA (Over-The-Air) firmware updates, provisioning, and fleet management.', icon: Activity },
  { title: 'Hardware Security', desc: 'End-to-end encryption and secure enclaves to protect sensitive telemetry.', icon: ShieldCheck },
];

const deviceIcons = [Cpu, Wifi, Activity, ShieldCheck, Cpu, Wifi];
const deviceColors = [
  { on: 'border-cyan-400/40 bg-cyan-400/5', dot: 'bg-cyan-400', icon: 'text-cyan-400', glow: 'shadow-cyan-400/20' },
  { on: 'border-green-400/40 bg-green-400/5', dot: 'bg-green-400', icon: 'text-green-400', glow: 'shadow-green-400/20' },
  { on: 'border-purple-400/40 bg-purple-400/5', dot: 'bg-purple-400', icon: 'text-purple-400', glow: 'shadow-purple-400/20' },
  { on: 'border-orange-400/40 bg-orange-400/5', dot: 'bg-orange-400', icon: 'text-orange-400', glow: 'shadow-orange-400/20' },
  { on: 'border-pink-400/40 bg-pink-400/5', dot: 'bg-pink-400', icon: 'text-pink-400', glow: 'shadow-pink-400/20' },
  { on: 'border-yellow-400/40 bg-yellow-400/5', dot: 'bg-yellow-400', icon: 'text-yellow-400', glow: 'shadow-yellow-400/20' },
];

function InteractiveTelemetry() {
  const [devices, setDevices] = useState([
    { id: 'V-8', online: true, temp: 42, signal: 4 },
    { id: 'S-3', online: true, temp: 38, signal: 3 },
    { id: 'M-1', online: false, temp: 0, signal: 0 },
    { id: 'K-5', online: true, temp: 55, signal: 5 },
    { id: 'R-2', online: true, temp: 31, signal: 4 },
    { id: 'X-7', online: false, temp: 0, signal: 0 },
  ]);
  const [latency, setLatency] = useState(12);
  const [sparkData, setSparkData] = useState([4, 6, 3, 8, 5, 7, 4, 9, 6, 3, 7, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(8 + Math.random() * 10));
      setSparkData((prev) => [...prev.slice(1), Math.floor(2 + Math.random() * 8)]);
      setDevices((prev) =>
        prev.map((d) =>
          d.online ? { ...d, temp: Math.floor(30 + Math.random() * 30), signal: Math.floor(2 + Math.random() * 4) } : d
        )
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const toggleDevice = (id) => {
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, online: !d.online, temp: !d.online ? Math.floor(30 + Math.random() * 30) : 0, signal: !d.online ? 4 : 0 }
          : d
      )
    );
  };

  const onlineCount = devices.filter((d) => d.online).length;
  const sparkMax = Math.max(...sparkData);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full aspect-square md:aspect-video lg:aspect-square max-w-xl mx-auto glass-panel-heavy rounded-[3rem] border border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">FLEET DASHBOARD</span>
          {/* Mini spark chart */}
          <div className="flex items-end gap-[2px] h-4">
            {sparkData.map((val, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-blue-400"
                animate={{ height: `${(val / sparkMax) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
        <span className="text-xs font-mono text-boraq-teal-steel flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${onlineCount > 0 ? 'bg-green-500' : 'bg-red-400'} animate-pulse`} />
          {onlineCount}/{devices.length} ONLINE
        </span>
      </div>

      {/* Devices grid */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-3">
          {devices.map((device, idx) => {
            const DeviceIcon = deviceIcons[idx % deviceIcons.length];
            const colors = deviceColors[idx % deviceColors.length];
            return (
              <motion.button
                key={device.id}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => toggleDevice(device.id)}
                className={`p-3 rounded-2xl border cursor-pointer text-left transition-all duration-300 ${device.online
                  ? `${colors.on} shadow-lg ${colors.glow}`
                  : 'border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 bg-boraq-black/5 dark:bg-boraq-white/5 opacity-40'
                  }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <DeviceIcon className={`w-4 h-4 ${device.online ? colors.icon : 'text-boraq-gray-mid'}`} />
                  <span className={`w-2 h-2 rounded-full ${device.online ? colors.dot : 'bg-red-400'}`} />
                </div>
                <p className="text-xs font-bold font-mono text-boraq-black dark:text-boraq-white">{device.id}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-[9px] font-mono text-boraq-gray-mid dark:text-boraq-gray-silver">
                    {device.online ? `${device.temp}°C` : 'OFF'}
                  </p>
                  {device.online && (
                    <div className="flex gap-[2px]">
                      {[...Array(5)].map((_, b) => (
                        <div
                          key={b}
                          className={`w-[3px] rounded-full ${b < device.signal ? colors.dot : 'bg-boraq-gray-silver/20'}`}
                          style={{ height: `${6 + b * 2}px` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-4 text-center">
        <p className="text-[11px] text-boraq-gray-mid dark:text-boraq-gray-silver/50 font-mono">
          Click devices to toggle • Latency: <span className={latency < 12 ? 'text-green-400' : latency < 15 ? 'text-yellow-400' : 'text-orange-400'}>{latency}ms</span>
        </p>
      </div>
    </motion.div>
  );
}

export default function SmartDevice() {
  return (
    <div className="w-full pb-32">
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
            Internet of Things (IoT)
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">
            Bridging the <br /> <span className="text-boraq-teal-steel italic">Physical & Digital.</span>
          </h1>
          <p className="text-lg md:text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-3xl mx-auto font-light leading-relaxed">
            We build the invisible infrastructure that powers smart cities, automated factories, and next-generation consumer electronics.
          </p>

          {/* Human trust strip */}
          <HeroTrustStrip
            centered
            lead={{
              name: 'Tahmid Khan',
              role: 'Project Lead — Smart Devices',
              avatar: plPhoto,
            }}
          />
        </motion.div>
      </section>

      {/* Device Graphic + Features — original unique spinning rings visual */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Device Graphic Container */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <InteractiveTelemetry />
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
                  className="glass-panel p-6 rounded-3xl flex items-start gap-6 group hover:border-boraq-teal-steel/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-boraq-teal-deep/5 dark:bg-boraq-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-boraq-teal-steel" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-boraq-black dark:text-boraq-white">{feature.title}</h3>
                    <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Human trust section */}
      <ServiceHumanSection
        teamLead={{
          name: 'Tahmid Khan',
          role: 'Project Lead',
          avatar: plPhoto,
          bio: 'Smart Device expert specializing in IoT integrations, embedded systems, and firmware development. Tahmid leads the hardware-software bridge, ensuring every integration is rock-solid.',
          funFact: 'IoT innovator & embedded systems engineer',
        }}
        testimonial={{
          quote: 'Boraq\'s IoT team delivered a seamless hardware-software integration for our pilot city. Their systems expertise is world-class.',
          author: 'Elena Rossi',
          role: 'Innovation Lead',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
          result: 'Smart City pilot deployed',
        }}
        stats={[
          { label: 'IoT Projects', value: '2+' },
          { label: 'User Satisfaction', value: '4.9/5' },
          { label: 'Firmware Deployments', value: '2+' },
        ]}
        processNote="Tahmid personally reviews every device architecture before a single line of firmware ships."
      />

      <Testimonials />
      <CallToAction />
    </div>
  );
}
