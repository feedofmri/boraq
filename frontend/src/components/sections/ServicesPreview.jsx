import { ArrowRight, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useServices } from '../../hooks/useApi';
import { getIcon } from '../../utils/iconMap';

export default function ServicesPreview() {
    const { data: services, loading } = useServices();

    if (loading || !services?.length) {
        return <section className="max-w-7xl mx-auto px-6 py-24"><p className="text-center text-boraq-gray-mid">Loading services...</p></section>;
    }

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
                {services.map((service, index) => {
                    const ServiceIcon = getIcon(service.icon);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`glass-panel p-8 rounded-[2rem] group hover:border-boraq-teal-steel/40 transition-colors flex flex-col ${service.colSpan || ''}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-boraq-teal-deep/10 flex items-center justify-center text-boraq-teal-steel group-hover:scale-110 group-hover:bg-boraq-teal-deep group-hover:text-boraq-white transition-all duration-300">
                                    {ServiceIcon && <ServiceIcon className="w-7 h-7" />}
                                </div>
                                <Link to={service.link} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-boraq-black dark:hover:bg-boraq-white hover:text-boraq-white dark:hover:text-boraq-black">
                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </Link>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{service.title}</h3>
                                <p className="text-boraq-gray-mid dark:text-boraq-gray-silver text-sm font-light leading-relaxed mb-4">{service.desc}</p>
                                <p className="text-xs text-boraq-teal-steel font-medium mb-4 italic flex items-center gap-1">
                                    <Check className="w-3 h-3 shrink-0" /> {service.clientResult}
                                </p>
                            </div>
                            <div className="mt-auto pt-4 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 flex items-center justify-between">
                                {service.lead && (
                                    <div className="flex items-center gap-2">
                                        <img src={service.lead.avatar} alt={service.lead.name} className="w-7 h-7 rounded-full object-cover object-top" />
                                        <div>
                                            <p className="text-xs font-bold text-boraq-black dark:text-boraq-white leading-tight">{service.lead.name}</p>
                                            <p className="text-[10px] text-boraq-gray-mid dark:text-boraq-gray-silver">{service.lead.role}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center gap-1 text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">
                                    <Users className="w-3 h-3" />
                                    <span className="font-bold text-boraq-black dark:text-boraq-white">{service.projectCount}</span> projects
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <Link to="/services/web-app" className="flex items-center gap-2 text-boraq-black dark:text-boraq-white font-bold hover:gap-4 transition-all w-max mt-8 md:hidden group">
                View All Services <ArrowRight className="w-5 h-5 group-hover:text-boraq-teal-steel transition-colors" />
            </Link>
        </section>
    );
}
