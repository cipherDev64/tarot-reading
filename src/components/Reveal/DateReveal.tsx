import React from 'react';
import { motion } from 'framer-motion';
import { DateIdea } from '../../data/date-ideas';

interface DateRevealProps {
    idea: DateIdea;
    onReshuffle: () => void;
}

export function DateReveal({ idea, onReshuffle }: DateRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="max-w-xl mx-auto mt-8 text-center flex flex-col items-center justify-center px-6 relative z-10"
        >
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-10"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-amber-50 font-serif mb-6 drop-shadow-lg tracking-wide">
                {idea.title}
            </h2>

            <p className="text-slate-300 font-sans text-lg md:text-xl leading-relaxed mb-8 font-light max-w-md">
                {idea.description}
            </p>

            <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-6 mb-12 w-full relative overflow-hidden backdrop-blur-sm shadow-xl">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50"></div>
                <h4 className="text-amber-500/80 text-xs font-semibold uppercase tracking-widest mb-3">The Twist</h4>
                <p className="text-amber-100/90 italic text-sm md:text-base">
                    "{idea.twist}"
                </p>
            </div>

            <button
                onClick={onReshuffle}
                className="group relative px-8 py-3 rounded-full overflow-hidden bg-transparent transition-all hover:scale-105 active:scale-95"
            >
                <div className="absolute inset-0 border border-amber-500/40 rounded-full group-hover:bg-amber-500/10 transition-colors"></div>
                <span className="relative z-10 text-amber-500 font-serif tracking-widest text-sm transition-colors group-hover:text-amber-300">
                    Reshuffle Fate
                </span>
            </button>
        </motion.div>
    );
}
