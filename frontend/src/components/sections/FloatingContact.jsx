import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail, Users } from 'lucide-react';

import ceoPhoto from '../../assets/Team/Md Rubayet Islam - Founder CEO.jpg';
import cooPhoto from '../../assets/Team/Ma-Huan Sheikh Meem - Chief Operating Officer.jpg';

const teamMembers = [
    {
        name: 'Rubayet',
        role: 'CEO',
        image: ceoPhoto,
    },
    {
        name: 'Meem',
        role: 'COO',
        image: cooPhoto,
    },
];

function getOnlineStatus() {
    const hour = new Date().getHours();
    // Online during business hours (9 AM - 6 PM)
    if (hour >= 9 && hour < 18) {
        return { status: 'Online now', color: 'bg-green-500', isOnline: true };
    }
    return { status: 'Back by 9 AM', color: 'bg-amber-500', isOnline: false };
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
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-boraq-teal-steel/10 transition-colors text-sm font-medium text-boraq-black dark:text-boraq-white group">
                                        <MessageCircle className="w-4 h-4 text-boraq-teal-steel group-hover:scale-110 transition-transform" />
                                        Chat with us Live
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-boraq-teal-steel/10 transition-colors text-sm font-medium text-left text-boraq-black dark:text-boraq-white group">
                                        <Phone className="w-4 h-4 text-boraq-teal-steel group-hover:scale-110 transition-transform" />
                                        Schedule a Call
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-boraq-teal-steel/10 transition-colors text-sm font-medium text-boraq-black dark:text-boraq-white group">
                                        <Mail className="w-4 h-4 text-boraq-teal-steel group-hover:scale-110 transition-transform" />
                                        Leave a Message
                                    </button>
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
