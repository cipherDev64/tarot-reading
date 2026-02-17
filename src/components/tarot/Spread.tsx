import React from 'react';
import { Card } from './Card';
import { TarotCard } from '../../types';
import { motion } from 'framer-motion'; // Import motion

interface SpreadProps {
    cards: TarotCard[];
    revealedIndices: number[];
    onReveal: (index: number) => void;
}

const positions = ["PAST", "PRESENT", "FUTURE"];

export const Spread: React.FC<SpreadProps> = ({ cards, revealedIndices, onReveal }) => {
    if (cards.length === 0) return null;

    return (
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-12">
            {cards.map((card, index) => (
                <motion.div
                    key={card.name + index}
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, type: "spring" }}
                >
                    <div className="text-gold/50 font-heading tracking-widest text-sm mb-2">{positions[index]}</div>
                    <Card
                        card={card}
                        isRevealed={revealedIndices.includes(index)}
                        onReveal={() => onReveal(index)}
                        index={index}
                    />
                </motion.div>
            ))}
        </div>
    );
};
