import React from 'react';
import { motion } from 'framer-motion';
import { CardBack } from './CardBack';
import { cn } from '../../utils/cn';

interface TarotCardProps {
    imageSrc: string;
    isFlipped: boolean;
    isDisabled: boolean;
    onClick: () => void;
    className?: string;
    delay?: number; // Initial animation mount delay
}

export function TarotCard({
    imageSrc,
    isFlipped,
    isDisabled,
    onClick,
    className,
    delay = 0
}: TarotCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("perspective-1000 w-full aspect-[1/1.6] max-w-[240px] mx-auto", className)}
        >
            <motion.div
                className={cn(
                    "w-full h-full relative transform-style-3d transition-all duration-700",
                    !isDisabled && !isFlipped ? "cursor-pointer" : ""
                )}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    scale: isFlipped ? 1.05 : 1,
                    opacity: isDisabled && !isFlipped ? 0.4 : 1,
                    y: isFlipped ? -10 : 0
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.23, 1, 0.32, 1] // Apple-like easing smooth snap
                }}
                onClick={() => {
                    if (!isDisabled && !isFlipped) onClick();
                }}
                whileHover={!isDisabled && !isFlipped ? {
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgb(245 158 11 / 0.1), 0 8px 10px -6px rgb(245 158 11 / 0.1)"
                } : {}}
            >
                {/* Front (Back of Tarot Card) */}
                <div className="absolute inset-0 backface-hidden">
                    <CardBack />
                </div>

                {/* Back (Front of Tarot Card with real Image) */}
                <div
                    className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <img
                        src={imageSrc}
                        alt="Tarot Card Destiny"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay for realism */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none mix-blend-multiply"></div>
                    {/* Edge highlight */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                </div>
            </motion.div>
        </motion.div>
    );
}
