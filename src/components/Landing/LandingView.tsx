import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface LandingViewProps {
    onStart: () => void;
}

export function LandingView({ onStart }: LandingViewProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
            {/* Background ambient stars/particles effect simulated with pure CSS/Divs */}
            <div className="absolute inset-0 pointer-events-none w-full h-full">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-amber-500/20 animate-pulse-slow"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: `${Math.random() * 4}s`,
                            animationDuration: `${Math.random() * 3 + 3}s`
                        }}
                    ></div>
                ))}
                {/* Soft center glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center z-10 flex flex-col items-center max-w-lg"
            >
                <div className="mb-6 flex space-x-2">
                    <Sparkles className="w-5 h-5 text-amber-500/60" />
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif mb-6 tracking-tight drop-shadow-2xl">
                    Choose Your <br className="md:hidden" /><span className="text-amber-500/90 italic mt-2 inline-block">Fate</span> Tonight
                </h1>

                <p className="text-slate-400 text-lg md:text-xl font-light mb-12 tracking-wide leading-relaxed px-4">
                    Pick one card. Let destiny decide our evening.
                </p>

                <motion.button
                    onClick={onStart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-amber-900/40 to-amber-600/20 border border-amber-500/30 rounded-full text-amber-100 font-serif tracking-widest text-sm hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all backdrop-blur-sm"
                >
                    DRAW CARDS
                </motion.button>
            </motion.div>
        </div>
    );
}
