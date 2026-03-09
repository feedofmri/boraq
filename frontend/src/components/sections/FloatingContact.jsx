import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Users } from 'lucide-react';

import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import cooPhoto from '../../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';

// WhatsApp icon component
function WhatsAppIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

const teamMembers = [
    {
        name: 'Rubayet',
        role: 'CEO',
        image: ceoPhoto,
        whatsapp: '8801620929190', // CEO personal WhatsApp number
    },
    {
        name: 'Meem',
        role: 'COO',
        image: cooPhoto,
        whatsapp: '8801533514667', // COO personal WhatsApp number
    },
];

const BORAQ_WHATSAPP = '8801902993907'; // Boraq official WhatsApp
const BORAQ_EMAIL = 'hello@boraq.io';

function getOnlineStatus() {
    const now = new Date();
    const hour = now.getHours();
    // Online during business hours (9 AM - 6 PM)
    if (hour >= 9 && hour < 18) {
        return { status: 'Online now', color: 'bg-green-500', isOnline: true };
    }
    // Calculate hours until 9 AM
    const hoursUntilOpen = hour >= 18 ? (24 - hour + 9) : (9 - hour);
    const status = hoursUntilOpen <= 1 ? 'Back in under an hour' : `Back in ${hoursUntilOpen}h`;
    return { status, color: 'bg-amber-500', isOnline: false };
}

export default function FloatingContact() {
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [activeMember, setActiveMember] = useState(0);
    const onlineStatus = getOnlineStatus();

    // Show button after scrolling a bit
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentMember = teamMembers[activeMember];

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
                >
                    {/* Expanded Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="mb-4 glass-panel-heavy rounded-2xl p-4 shadow-2xl min-w-[300px] pointer-events-auto border-boraq-teal-steel/20"
                            >
                                {/* Team member selector */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-medium text-boraq-gray-mid dark:text-boraq-gray-silver">Talk to:</span>
                                    <div className="flex gap-1">
                                        {teamMembers.map((member, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveMember(idx)}
                                                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${activeMember === idx
                                                    ? 'border-boraq-teal-steel scale-110'
                                                    : 'border-transparent opacity-60 hover:opacity-100'
                                                    }`}
                                            >
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-black/10 dark:border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-boraq-teal-steel/20 flex items-center justify-center relative">
                                        <span className={`absolute top-0 right-0 w-3 h-3 ${onlineStatus.color} rounded-full border-2 border-white dark:border-black ${onlineStatus.isOnline ? 'animate-pulse' : ''}`} />
                                        <img
                                            src={currentMember.image}
                                            alt={currentMember.name}
                                            className="w-full h-full rounded-full object-cover object-top"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-boraq-black dark:text-boraq-white">{currentMember.name} from Boraq</div>
                                        <div className="text-xs text-boraq-black/60 dark:text-boraq-white/60 flex items-center gap-1">
                                            <span className={`w-1.5 h-1.5 rounded-full ${onlineStatus.color}`} />
                                            {onlineStatus.status}
                                        </div>
                                    </div>
                                </div>

                                {/* Social proof micro-stat */}
                                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-boraq-teal-steel/5">
                                    <Users className="w-4 h-4 text-boraq-teal-steel" />
                                    <span className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">
                                        We've helped <span className="font-bold text-boraq-black dark:text-boraq-white">28+</span> clients grow
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    <a
                                        href={`https://wa.me/${currentMember.whatsapp}?text=Hi%20${currentMember.name},%20I'm%20interested%20in%20Boraq's%20services.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 transition-colors text-sm font-medium text-boraq-black dark:text-boraq-white group"
                                    >
                                        <WhatsAppIcon className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                                        Chat with {currentMember.name}
                                    </a>
                                    <a
                                        href={`https://wa.me/${BORAQ_WHATSAPP}?text=Hi%20Boraq,%20I'd%20like%20to%20discuss%20a%20project.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-boraq-teal-steel/10 transition-colors text-sm font-medium text-boraq-black dark:text-boraq-white group"
                                    >
                                        <MessageCircle className="w-4 h-4 text-boraq-teal-steel group-hover:scale-110 transition-transform" />
                                        Official WhatsApp
                                    </a>
                                    <a
                                        href={`mailto:${BORAQ_EMAIL}?subject=Project%20Inquiry&body=Hi%20Boraq%20team,%20I'd%20like%20to%20discuss%20a%20project.`}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-boraq-teal-steel/10 transition-colors text-sm font-medium text-boraq-black dark:text-boraq-white group"
                                    >
                                        <Mail className="w-4 h-4 text-boraq-teal-steel group-hover:scale-110 transition-transform" />
                                        Email Boraq
                                    </a>
                                </div>

                                <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5 text-center">
                                    <p className="text-[10px] text-boraq-gray-mid/50 dark:text-boraq-gray-silver/30">
                                        Avg. response time: <span className="font-bold">under 2 hours</span>
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-14 h-14 rounded-full bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black shadow-xl flex items-center justify-center pointer-events-auto hover:rotate-12 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-boraq-teal-steel/30 relative"
                    >
                        {onlineStatus.isOnline && !isOpen && (
                            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-boraq-white dark:border-boraq-black animate-pulse" />
                        )}
                        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
