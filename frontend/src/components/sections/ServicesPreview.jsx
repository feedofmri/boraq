import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import ctoPhoto from '../../assets/Team/Rakib Hasan - Chief Technology Officer.jpg';
import cooPhoto from '../../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';
import cpoPhoto from '../../assets/Team/Adel Mohammad Zahid - Chief Product Officer.jpg';
import plPhoto from '../../assets/Team/Tahmid Khan - Project Lead.jpg';
import { MonitorSmartphone, Brush, BrainCircuit, Mic, Watch, Link as LinkIcon, ArrowRight, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const services = [
    {
        icon: MonitorSmartphone,
        title: 'Web & Mobile Apps',
        desc: 'High-performance, scalable applications engineered for iOS, Android, and Web.',
        link: '/services/web-app',
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
        lead: { name: 'Md. Rubayet Islam', role: 'CEO', avatar: ceoPhoto },
        projectCount: '8+',
        clientResult: 'Built Boraq Space — comprehensive eCommerce platform',
    },
    {
        icon: Brush,
        title: 'UI/UX & Branding',
        desc: 'Strategic design that converts visitors into loyal customers through intuitive interfaces.',
        link: '/services/ui-branding',
        colSpan: 'col-span-1',
        lead: { name: 'Ma-Huan Sheikh Meem', role: 'COO', avatar: cooPhoto },
        projectCount: '11+',
        clientResult: 'Crafted Moushum — nature-inspired brand identity',
    },
    {
        icon: BrainCircuit,
        title: 'AI & Automation',
        desc: 'Custom machine learning models to automate workflows and unlock data insights.',
        link: '/services/ai-automation',
        colSpan: 'col-span-1',
        lead: { name: 'Adel Mohammad Zahid', role: 'CPO', avatar: cpoPhoto },
        projectCount: '3+',
        clientResult: 'Car Price Prediction & Heart Disease ML models',
    },
    {
        icon: Mic,
        title: 'Vision & Speech',
        desc: 'Advanced computer vision and NLP solutions for real-world challenges.',
        link: '/services/vision-speech',
        colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
        lead: { name: 'Md. Rubayet Islam', role: 'CEO', avatar: ceoPhoto },
        projectCount: '2+',
        clientResult: 'Advanced speech-to-text integration systems',
    },
    {
        icon: Watch,
        title: 'Smart Devices',
        desc: 'IoT integrations bridging software with hardware for connected ecosystems.',
        link: '/services/smart-device',
        colSpan: 'col-span-1',
        lead: { name: 'Tahmid Khan', role: 'Project Lead', avatar: plPhoto },
        projectCount: '2+',
        clientResult: 'IoT and hardware-software integration',
    },
    {
        icon: LinkIcon,
        title: 'Web3 & Blockchain',
        desc: 'Secure distributed ledger technologies and smart contract development.',
        link: '/services/web3',
        colSpan: 'col-span-1 md:col-span-3 lg:col-span-1',
        lead: { name: 'Rakib Hasan', role: 'CTO', avatar: ctoPhoto },
        projectCount: '1+',
        clientResult: 'Nibaron — ClimateAI for Farmers platform',
    },
];

export default function ServicesPreview() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#82A9B4]/20 text-boraq-teal-steel text-sm font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-boraq-teal-steel animate-pulse" />
                        Core Capabilities
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">
                        Built with <span className="text-boraq-teal-steel">Precision</span>
                    </h2>
                    <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver font-light max-w-xl">
                        We solve complex business hurdles with software that is as elegant as it is powerful.
                    </p>
                </div>
                <Link to="/services/web-app" className="hidden md:flex items-center gap-2 text-boraq-black dark:text-boraq-white font-bold hover:gap-4 transition-all w-max whitespace-nowrap group">
                    View All Services <ArrowRight className="w-5 h-5 group-hover:text-boraq-teal-steel transition-colors" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`glass-panel p-8 rounded-[2rem] group hover:border-boraq-teal-steel/40 transition-colors flex flex-col ${service.colSpan}`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-boraq-teal-deep/10 flex items-center justify-center text-boraq-teal-steel group-hover:scale-110 group-hover:bg-boraq-teal-deep group-hover:text-boraq-white transition-all duration-300">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <Link to={service.link} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-boraq-black dark:hover:bg-boraq-white hover:text-boraq-white dark:hover:text-boraq-black">
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </Link>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{service.title}</h3>
                            <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light leading-relaxed mb-4">
                                {service.desc}
                            </p>

                            {/* Client result micro-proof */}
                            <p className="text-xs text-boraq-teal-steel font-medium mb-4 italic flex items-center gap-1">
                                <Check className="w-3 h-3 shrink-0" /> {service.clientResult}
                            </p>
                        </div>

                        {/* Human footer: team lead + project count */}
                        <div className="mt-auto pt-4 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src={service.lead.avatar}
                                    alt={service.lead.name}
                                    className="w-7 h-7 rounded-full object-cover object-top"
                                />
                                <div>
                                    <p className="text-xs font-bold text-boraq-black dark:text-boraq-white leading-tight">{service.lead.name}</p>
                                    <p className="text-[10px] text-boraq-gray-mid dark:text-boraq-gray-silver">{service.lead.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">
                                <Users className="w-3 h-3" />
                                <span className="font-bold text-boraq-black dark:text-boraq-white">{service.projectCount}</span> projects
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Link to="/services/web-app" className="flex items-center gap-2 text-boraq-black dark:text-boraq-white font-bold hover:gap-4 transition-all w-max mt-8 md:hidden group">
                View All Services <ArrowRight className="w-5 h-5 group-hover:text-boraq-teal-steel transition-colors" />
            </Link>
        </section>
    );
}
