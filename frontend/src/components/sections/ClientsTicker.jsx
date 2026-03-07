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
        <section className="w-full py-16 overflow-hidden bg-boraq-black/5 dark:bg-boraq-white/5 border-y border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center pt-8 md:pt-0">
                <p className="text-xs font-bold tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver uppercase">
                    Trusted by innovative teams worldwide
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* Gradients for smooth fade effect at edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-boraq-white dark:from-boraq-black to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-boraq-white dark:from-boraq-black to-transparent z-10" />

                <div className="flex animate-marquee whitespace-nowrap">
                    <div className="flex items-center">
                        {logos.map((logo, index) => (
                            <div
                                key={`l1-${index}`}
                                className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center">
                        {logos.map((logo, index) => (
                            <div
                                key={`l2-${index}`}
                                className="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <span className="text-2xl text-boraq-teal-steel">{logo.symbol}</span>
                                <span className="text-2xl font-bold tracking-tight text-boraq-black dark:text-boraq-white">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
