import { motion } from 'framer-motion';

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

            {/* 🌙 Dark Theme Background (Default) */}
            <div className="absolute inset-0 bg-boraq-black opacity-0 dark:opacity-100 transition-opacity duration-1000">
                {/* Deep Tech Teal Glow - Top Right */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#032F38] blur-[120px] opacity-60"
                />

                {/* Cyan Hint - Top Center */}
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-20%] left-1/4 w-[60%] h-[60%] rounded-full bg-[#AFD7E2]/10 blur-[100px]"
                />

                {/* Subtle Slate Teal - Bottom Left */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -20, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2F555F]/20 blur-[120px]"
                />
            </div>

            {/* ☀️ Light Theme Background */}
            <div className="absolute inset-0 bg-boraq-white opacity-100 dark:opacity-0 transition-opacity duration-1000">

                {/* Vibrant Pastel Cyan - Top Right */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 20, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[-15%] right-[-15%] w-[80%] h-[80%] rounded-full bg-[#C1EFED] blur-[140px] opacity-40"
                />

                {/* Soft Ice Blue - Bottom Left */}
                <motion.div
                    animate={{
                        scale: [1.3, 1, 1.3],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#D7E5F0] blur-[140px] opacity-50"
                />

                {/* Pearlescent Lavender - Center/Left */}
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-[#EBDFEB] blur-[120px]"
                />
            </div>

            {/* Consistent Soft Grain/Frost Layer */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>
    );
}
