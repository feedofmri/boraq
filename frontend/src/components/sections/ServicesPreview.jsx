import { motion } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Brush, BrainCircuit, Mic, Watch, Link } from 'lucide-react';

const services = [
    {
        icon: MonitorSmartphone,
        title: 'Web & Mobile Apps',
        desc: 'High-performance, scalable applications engineered for iOS, Android, and Web.',
        link: '/services/web-app',
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    },
    {
        icon: Brush,
        title: 'UI/UX & Branding',
        desc: 'Strategic design that converts visitors into loyal customers through intuitive interfaces.',
        link: '/services/ui-branding',
        colSpan: 'col-span-1',
    },
    {
        icon: BrainCircuit,
        title: 'AI & Automation',
        desc: 'Custom machine learning models to automate workflows and unlock data insights.',
        link: '/services/ai-automation',
        colSpan: 'col-span-1',
    },
    {
        icon: Mic,
        title: 'Vision & Speech',
        desc: 'Advanced computer vision and NLP solutions for complex enterprise challenges.',
        link: '/services/vision-speech',
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    },
    {
        icon: Watch,
        title: 'Smart Devices',
        desc: 'IoT integrations bridging software with hardware for connected ecosystems.',
        link: '/services/smart-device',
        colSpan: 'col-span-1',
    },
    {
        icon: Link,
        title: 'Web3 & Blockchain',
        desc: 'Secure distributed ledger technologies and smart contract development.',
        link: '/services/web3',
        colSpan: 'col-span-1 md:col-span-3 lg:col-span-1',
    },
];

export default function ServicesPreview() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-boraq-cyan/20 text-boraq-cyan text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-boraq-cyan animate-pulse" />
                        Core Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Engineering <span className="text-boraq-cyan">Excellence</span>
                    </h2>
                    <p className="text-xl text-black/60 dark:text-white/60 font-light max-w-xl">
                        We deliver end-to-end digital solutions that transform complex business problems into elegant competitive advantages.
                    </p>
                </div>
                <button className="flex items-center gap-2 text-boraq-cyan font-bold hover:gap-4 transition-all w-max whitespace-nowrap hidden md:flex">
                    View All Services <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`glass-panel p-8 rounded-[2rem] group hover:border-boraq-cyan/40 transition-colors flex flex-col ${service.colSpan}`}
                    >
                        <div className="flex justify-between items-start mb-12">
                            <div className="w-14 h-14 rounded-2xl bg-boraq-cyan/10 flex items-center justify-center text-boraq-cyan group-hover:scale-110 group-hover:bg-boraq-cyan group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <a href={service.link} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/5 dark:hover:bg-white/5">
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </a>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-black/60 dark:text-white/60 text-sm font-light leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <button className="flex items-center gap-2 text-boraq-cyan font-bold hover:gap-4 transition-all w-max mt-8 md:hidden">
                View All Services <ArrowRight className="w-5 h-5" />
            </button>
        </section>
    );
}
