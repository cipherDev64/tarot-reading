import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TarotCard } from '../Card/TarotCard';
import { DateReveal } from '../Reveal/DateReveal';
import { getRandomDateIdeas, DateIdea } from '../../data/date-ideas';

interface SpreadViewProps {
    cardImages: string[];
    onReshuffle: () => void;
}

export function SpreadView({ cardImages, onReshuffle }: SpreadViewProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [dateIdea, setDateIdea] = useState<DateIdea | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        // Generate the specific date idea for this spread on mount
        setDateIdea(getRandomDateIdeas(1)[0]);
    }, []);

    const handleCardClick = (index: number) => {
        if (selectedIndex !== null) return; // Prevent multiple clicks
        setSelectedIndex(index);
        // Add slight delay before revealing text so the flip animation has time
        setTimeout(() => {
            setIsRevealed(true);
        }, 600);
    };

    return (
        <div className="min-h-screen py-16 px-4 md:px-8 flex flex-col items-center justify-center relative w-full overflow-hidden">

            {/* Background dark shift when selected */}
            <motion.div
                className="absolute inset-0 bg-black/40 pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedIndex !== null ? 1 : 0 }}
                transition={{ duration: 1 }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-5xl w-full mx-auto relative z-10"
            >
                {/* Title disappears smoothly when a card is selected */}
                <AnimatePresence>
                    {selectedIndex === null && (
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                            transition={{ duration: 0.6 }}
                            className="text-center text-amber-500/70 font-serif italic text-xl md:text-2xl mt-4 mb-16 tracking-wide drop-shadow-sm"
                        >
                            Trust your intuition. Choose one.
                        </motion.h2>
                    )}
                </AnimatePresence>

                <motion.div
                    className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-14 max-w-4xl mx-auto"
                    // When a card is selected, shift the grid down slightly so the reveal has space, if needed
                    animate={{
                        y: selectedIndex !== null ? (window.innerWidth < 768 ? -20 : -30) : 0
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {cardImages.map((imgSrc, i) => {
                        const isFlipped = selectedIndex === i;
                        const isDisabled = selectedIndex !== null && selectedIndex !== i;

                        return (
                            <div key={i} className="flex justify-center w-full">
                                <TarotCard
                                    imageSrc={imgSrc}
                                    isFlipped={isFlipped}
                                    isDisabled={isDisabled}
                                    onClick={() => handleCardClick(i)}
                                    delay={i * 0.1}
                                />
                            </div>
                        );
                    })}
                </motion.div>

                {/* The Reveal Component */}
                <AnimatePresence>
                    {isRevealed && selectedIndex !== null && dateIdea && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mt-12 sm:mt-20 w-full flex justify-center pb-24"
                        >
                            <DateReveal idea={dateIdea} onReshuffle={onReshuffle} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
