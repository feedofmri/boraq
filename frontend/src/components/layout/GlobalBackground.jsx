export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

            {/* Dark Theme Background */}
            <div className="absolute inset-0 bg-boraq-black opacity-0 dark:opacity-100 transition-opacity duration-1000">
                <div
                    className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-[#032F38] blur-[120px] opacity-60 animate-blob-slow"
                    style={{ willChange: 'transform' }}
                />
                <div
                    className="absolute top-[-20%] left-1/4 w-[60%] h-[60%] rounded-full bg-[#AFD7E2]/10 blur-[100px] animate-blob-medium"
                    style={{ willChange: 'transform, opacity' }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2F555F]/20 blur-[120px] animate-blob-slow-reverse"
                    style={{ willChange: 'transform' }}
                />
            </div>

            {/* Light Theme Background */}
            <div className="absolute inset-0 bg-boraq-white opacity-100 dark:opacity-0 transition-opacity duration-1000">
                <div
                    className="absolute top-[-15%] right-[-15%] w-[80%] h-[80%] rounded-full bg-[#C1EFED] blur-[140px] opacity-40 animate-blob-medium"
                    style={{ willChange: 'transform' }}
                />
                <div
                    className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#D7E5F0] blur-[140px] opacity-50 animate-blob-slow-reverse"
                    style={{ willChange: 'transform' }}
                />
                <div
                    className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-[#EBDFEB] blur-[120px] animate-blob-slow"
                    style={{ willChange: 'transform, opacity' }}
                />
            </div>

            {/* Consistent Soft Grain/Frost Layer */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>
    );
}
