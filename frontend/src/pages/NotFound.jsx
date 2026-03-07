import { motion } from 'framer-motion';
import { Terminal, Home, ArrowLeft } from 'lucide-react';
import CallToAction from '../components/sections/CallToAction';

import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex-grow flex items-center justify-center min-h-[70vh] pb-32">
      <div className="max-w-2xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-panel-heavy p-12 md:p-16 rounded-[3rem] relative overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto rounded-3xl glass-panel border border-boraq-cyan/30 flex items-center justify-center mb-8 bg-black/5 dark:bg-white/5 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <Terminal className="w-10 h-10 text-boraq-cyan" />
            </div>

            <h1 className="text-8xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black to-black/30 dark:from-white dark:to-white/30">
              404
            </h1>
            <h2 className="text-2xl font-bold mb-4">Signal Lost.</h2>
            <p className="text-black/60 dark:text-white/60 mb-10 max-w-sm mx-auto leading-relaxed">
              The endpoint you're trying to reach doesn't exist or has been restructured.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel border border-black/10 dark:border-white/10 flex items-center justify-center gap-2 font-medium hover:border-boraq-cyan/50 hover:text-boraq-cyan transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Go Back
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center gap-2 font-bold hover:scale-[1.02] transition-transform"
              >
                <Home className="w-4 h-4" /> Return Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <CallToAction />
    </div>
  );
}
