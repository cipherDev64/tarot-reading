import { motion } from 'framer-motion';
import { TarotCard } from '../../types';
import { Sparkles } from 'lucide-react';

interface CardProps {
    card: TarotCard;
    isRevealed: boolean;
    onReveal: () => void;
    index: number;
}

export const Card: React.FC<CardProps> = ({ card, isRevealed, onReveal }) => {
    return (
        <div className="relative w-64 h-96 perspective-1000 cursor-pointer group" onClick={!isRevealed ? onReveal : undefined}>
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700"
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                initial={{ rotateY: 0, y: -50, opacity: 0 }}
                whileHover={!isRevealed ? { scale: 1.05, rotateX: 5, rotateY: 5 } : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onLayoutAnimationComplete={() => { }} // Fix for some react strict mode issues
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Card Back (Face Down) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-xl bg-midnight-800 border-2 border-gold/30 shadow-glass backface-hidden flex items-center justify-center overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Decorative Pattern */}
                    <div className="absolute inset-2 border border-gold/20 rounded-lg flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-dark/10 to-transparent opacity-50" />
                        <Sparkles className="w-12 h-12 text-gold/60 animate-pulse-slow" />
                    </div>
                    <div className="absolute top-4 left-4 text-gold/20 text-xs font-heading">TAROT</div>
                    <div className="absolute bottom-4 right-4 text-gold/20 text-xs font-heading">DESTINY</div>
                </div>

                {/* Card Front (Face Up) */}
                <div
                    className="absolute inset-0 w-full h-full rounded-xl bg-midnight-900 border-2 border-gold shadow-gold-glow backface-hidden rotate-y-180 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    {/* Image */}
                    <div className="absolute inset-2 rounded-lg overflow-hidden border border-gold/10">
                        {/* Using a placeholder if image fails or for dev */}
                        <img
                            src={`${import.meta.env.BASE_URL}cards/${card.img}`}
                            alt={card.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                console.error(`Failed to load image: ${import.meta.env.BASE_URL}cards/${card.img}`);
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.style.background = 'linear-gradient(45deg, #1a1a2e, #3a3a5e)';
                            }}
                        />
                        {/* Fallback text if image missing (visible through transparent bg if img hidden) */}
                        <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-[-1]">
                            <span className="text-gold font-heading">{card.name}</span>
                        </div>
                    </div>

                    {/* Label (Optional overlay) */}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                        {/* <span className="bg-black/50 text-gold font-body px-2 py-1 rounded text-sm">{card.name}</span> */}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
