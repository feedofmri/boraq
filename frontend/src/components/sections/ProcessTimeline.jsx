import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Trophy } from 'lucide-react';
import { useProcessSteps } from '../../hooks/useApi';
import { getIcon } from '../../utils/iconMap';

const stepColors = [
    'border-blue-400/50 bg-blue-400/10 text-blue-400',
    'border-purple-400/50 bg-purple-400/10 text-purple-400',
    'border-pink-400/50 bg-pink-400/10 text-pink-400',
    'border-green-400/50 bg-green-400/10 text-green-400',
    'border-orange-400/50 bg-orange-400/10 text-orange-400',
];

export default function ProcessTimeline() {
    const { data: steps, loading } = useProcessSteps();
    const [completedSteps, setCompletedSteps] = useState(new Set());

    if (loading || !steps?.length) {
        return <section className="max-w-7xl mx-auto px-6 py-24"><p className="text-center text-boraq-gray-mid">Loading process...</p></section>;
    }

    const allComplete = completedSteps.size >= steps.length;

    const toggleStep = (index) => {
        setCompletedSteps((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-boraq-black dark:text-boraq-white">How We <span className="text-boraq-teal-steel">Work With You</span></h2>
                <p className="text-xl text-boraq-gray-mid dark:text-boraq-gray-silver max-w-2xl mx-auto font-light">
                    A transparent, human-driven process designed to eliminate surprises and deliver predictable excellence.
                </p>
            </div>

            {/* Interactive progress bar */}
            <div className="max-w-2xl mx-auto mb-16">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-boraq-gray-mid dark:text-boraq-gray-silver/60">PROJECT PROGRESS</span>
                    <span className="text-xs font-mono text-boraq-teal-steel font-bold">
                        {completedSteps.size}/{steps.length} phases
                    </span>
                </div>
                <div className="h-2 w-full rounded-full bg-boraq-gray-silver/10 dark:bg-boraq-teal-deep/10 overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${allComplete ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'}`}
                        style={{ width: `${(completedSteps.size / steps.length) * 100}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2">
                    {steps.map((step, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => toggleStep(i)}
                            className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${completedSteps.has(i) ? stepColors[i % stepColors.length] : 'border-boraq-gray-silver/30 dark:border-boraq-teal-deep/30'}`}
                        >
                            {completedSteps.has(i) && <Check className="w-3 h-3" />}
                        </motion.button>
                    ))}
                </div>
                <AnimatePresence>
                    {allComplete && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-4 text-center text-sm font-mono text-green-400 font-bold flex items-center justify-center gap-1.5">
                            <Trophy className="w-4 h-4" /> Project Complete! Ready for launch.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative">
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-boraq-teal-steel/30 to-transparent -translate-x-1/2" />
                <div className="space-y-12 lg:space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isComplete = completedSteps.has(index);
                        const StepIcon = getIcon(step.icon_name);
                        const TouchIcon = getIcon(step.touch_icon_name);
                        return (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-start lg:pl-16' : 'lg:items-end lg:pr-16 text-left lg:text-right'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.6 }}
                                        whileHover={{ y: -4 }}
                                        className={`glass-panel p-8 rounded-3xl max-w-lg transition-all duration-300 relative group cursor-pointer ${isComplete ? 'border-boraq-teal-steel/30 shadow-lg shadow-boraq-teal-steel/5' : 'hover:border-boraq-teal-steel/30'}`}
                                        onClick={() => toggleStep(index)}
                                    >
                                        {isComplete && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-400 flex items-center justify-center z-10">
                                                <Check className="w-3.5 h-3.5 text-white" />
                                            </motion.div>
                                        )}
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl pointer-events-none group-hover:scale-110 transition-transform hidden sm:block">
                                            0{index + 1}
                                        </div>
                                        <div className="flex items-center gap-4 mb-4 justify-start">
                                            <div className="px-3 py-1 rounded-full bg-boraq-teal-deep/10 text-boraq-teal-steel text-xs font-bold uppercase tracking-wider">
                                                {step.timeline}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 text-boraq-black dark:text-boraq-white">{step.title}</h3>
                                        <p className="text-boraq-gray-mid dark:text-boraq-gray-silver leading-relaxed mb-4">{step.description}</p>
                                        <div className={`flex items-start gap-3 pt-4 border-t border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 ${isEven ? '' : 'lg:flex-row-reverse lg:text-left'}`}>
                                            <div className="w-8 h-8 rounded-full bg-boraq-teal-steel/10 flex items-center justify-center flex-shrink-0">
                                                {TouchIcon && <TouchIcon className="w-4 h-4 text-boraq-teal-steel" />}
                                            </div>
                                            <p className="text-sm text-boraq-teal-steel font-medium leading-relaxed">{step.human_touch}</p>
                                        </div>
                                        {!isComplete && (
                                            <p className="text-[10px] font-mono text-boraq-gray-mid/40 dark:text-boraq-gray-silver/30 mt-3 text-center">Click to mark complete</p>
                                        )}
                                    </motion.div>
                                </div>
                                <div className="hidden lg:flex w-16 h-16 absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.4, type: "spring" }}
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        onClick={() => toggleStep(index)}
                                        className={`w-12 h-12 rounded-full glass-panel-heavy flex items-center justify-center z-10 cursor-pointer transition-all duration-300 ${isComplete ? 'border-green-400/50 bg-green-400/10 shadow-lg shadow-green-400/20' : 'border-boraq-teal-steel/30'}`}
                                    >
                                        {isComplete ? <Check className="w-5 h-5 text-green-400" /> : (StepIcon && <StepIcon className="w-5 h-5 text-boraq-teal-steel" />)}
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
