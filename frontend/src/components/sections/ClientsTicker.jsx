import { motion } from 'framer-motion';

const logos = [
    { name: 'Acme Corp', symbol: '⌘' },
    { name: 'Globex', symbol: '❖' },
    { name: 'Soylent', symbol: '⎈' },
    { name: 'Initech', symbol: '⎊' },
    { name: 'Umbrella', symbol: '☂' },
    { name: 'Massive Dynamic', symbol: '✧' },
    { name: 'Cyberdyne', symbol: '⎔' },
    { name: 'Wayne Ent', symbol: '🦇' },
];

export default function ClientsTicker() {
    // Duplicate array for seamless infinite scrolling
    const tickerItems = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="w-full py-16 overflow-hidden bg-black/5 dark:bg-white/5 border-y border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-semibold tracking-widest text-black/50 dark:text-white/50 uppercase">
                    Trusted by innovative teams worldwide
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#F8FBFF] dark:from-[#050A0F] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#F8FBFF] dark:from-[#050A0F] to-transparent z-10" />

                <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
                    {tickerItems.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                        >
                            <span className="text-2xl text-boraq-cyan">{logo.symbol}</span>
                            <span className="text-2xl font-bold tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
