import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck } from 'lucide-react';

/**
 * Minimal human-trust strip — one clean line.
 * Avatar + name + CTA. That's it.
 *
 * Props:
 *  - lead: { name, role, avatar }
 *  - centered: boolean (default false) — center-align for centered hero layouts
 */
export default function HeroTrustStrip({ lead, centered = false }) {
    return (
        <div className={`mt-8 flex flex-wrap items-center gap-4 ${centered ? 'justify-center' : 'justify-start'}`}>
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src={lead.avatar}
                        alt={lead.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-boraq-white dark:border-boraq-black"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-boraq-white dark:border-boraq-black" />
                </div>
                <div>
                    <p className="text-sm font-bold text-boraq-black dark:text-boraq-white flex items-center gap-1">
                        {lead.name}
                        <BadgeCheck className="w-3.5 h-3.5 text-boraq-teal-steel" />
                    </p>
                    <p className="text-xs text-boraq-gray-mid dark:text-boraq-gray-silver">{lead.role}</p>
                </div>
            </div>

            <Link
                to="/book-a-call"
                className="group px-5 py-2.5 bg-boraq-black text-boraq-white dark:bg-boraq-white dark:text-boraq-black rounded-full text-sm font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
                Talk to {lead.name.split(' ')[0]}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
    );
}
