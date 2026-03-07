import { motion } from 'framer-motion';
import { MonitorSmartphone, Code2, Server, Globe } from 'lucide-react';
import Testimonials from '../../components/sections/Testimonials';
import CallToAction from '../../components/sections/CallToAction';

const features = [
  {
    title: 'Cross-Platform Mastery',
    description: 'Single codebase deployments across iOS, Android, and Web using Flutter and React Native. Optimized for native-like performance.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Modern Frontend Architecture',
    description: 'Blazing fast, SEO-optimized web applications built on React, Next.js, and Vite with cutting-edge state management.',
    icon: Globe,
  },
  {
    title: 'Robust Backend Systems',
    description: 'Scalable cloud infrastructure, microservices, and serverless architectures using Node.js, Python, and Go.',
    icon: Server,
  },
  {
    title: 'Clean Code & DevOps',
    description: 'Rigorous CI/CD pipelines, automated testing, and comprehensive code reviews to ensure enterprise-grade reliability.',
    icon: Code2,
  },
];

const techStack = [
  'React', 'Next.js', 'Flutter', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Framer Motion'
];

export default function WebApp() {
  return (
    <div className="w-full pb-32">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-boraq-cyan animate-pulse" />
              Core Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Digital <br /> Experiences. <br /> <span className="text-boraq-cyan">Elevated.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-2xl font-light leading-relaxed">
              We architect and build premium web and mobile applications that dominate markets. From high-conversion SaaS platforms to seamless cross-platform mobile apps.
            </p>
          </div>
          <div className="flex-1 w-full">
            {/* Abstract Tech Graphic */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-boraq-cyan/10 blur-3xl animate-pulse" />
              <div className="relative h-full w-full glass-panel-heavy rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 w-1/3 bg-black/10 dark:bg-white/10 rounded-full" />
                  <div className="h-32 w-full bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-boraq-cyan/10 to-transparent animate-[shimmer_2s_infinite]" />
                  </div>
                  <div className="h-4 w-1/2 bg-black/10 dark:bg-white/10 rounded-full" />
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-boraq-cyan/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-boraq-cyan" />
                  </div>
                  <div className="h-12 flex-1 glass-panel rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 md:p-12 rounded-3xl group hover:border-boraq-cyan/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-boraq-cyan/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-boraq-cyan" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-black/60 dark:text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee (Static Alternative) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="glass-panel rounded-3xl p-12 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-boraq-cyan/5 via-transparent to-boraq-cyan/5" />
          <h3 className="text-xl font-medium mb-8 relative z-10">Technologies We Command</h3>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-full glass-panel-heavy border border-black/5 dark:border-white/5 text-sm font-medium hover:text-boraq-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </div>
  );
}
