import { motion } from 'framer-motion';
import { TarotCard } from '../../types';

interface ReadingParsedProps {
    cards: TarotCard[];
}

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const words = text.split(" ");

    return (
        <p className="inline-block">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: delay + i * 0.05 }}
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
};

export const ReadingParsed: React.FC<ReadingParsedProps> = ({ cards }) => {
    if (cards.length !== 3) return null;

    const positions = ["The Past", "The Present", "The Future"];

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 space-y-12">
            {cards.map((card, index) => (
                <motion.div
                    key={card.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 1 }}
                    className="glass-panel p-8 text-left"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                        <div>
                            <h3 className="text-2xl font-heading text-gold">{positions[index]}</h3>
                            <span className="text-white/70 text-xl font-body flex items-center gap-2">
                                {card.name}
                                {card.number && <span className="text-sm border border-white/20 px-2 rounded-full text-white/50">{card.number}</span>}
                            </span>
                        </div>
                        {card.Archetype && (
                            <div className="text-right">
                                <span className="text-xs uppercase tracking-widest text-gold/60 block">Archetype</span>
                                <span className="text-white/80 font-heading">{card.Archetype}</span>
                            </div>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 font-body text-lg text-white/90 leading-relaxed">
                        <div className="space-y-4">
                            <div className="text-gold-light/90 italic text-xl">
                                <TypewriterText text={`"${card.fortune_telling[0]}"`} delay={index * 1 + 0.5} />
                            </div>

                            {card.Affirmation && (
                                <div className="bg-white/5 p-4 rounded-lg border-l-2 border-gold/50">
                                    <span className="block text-xs uppercase text-gold/50 mb-1">Affirmation</span>
                                    <p className="text-white">"{card.Affirmation.replace(/"/g, '')}"</p>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4 text-base">
                            <div>
                                <strong className="text-gold block mb-1 font-heading text-sm uppercase tracking-wide">Light Meaning</strong>
                                <TypewriterText text={card.meanings.light[0]} delay={index * 1 + 1.5} />
                            </div>

                            <div>
                                <strong className="text-white/60 block mb-1 font-heading text-sm uppercase tracking-wide">Shadow Warning</strong>
                                <TypewriterText text={card.meanings.shadow[0]} delay={index * 1 + 2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Keywords Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {card.keywords.map((keyword, i) => (
                            <span key={i} className="px-3 py-1 bg-black/30 rounded-full text-xs text-gold/70 uppercase tracking-wider border border-white/5">
                                {keyword}
                            </span>
                        ))}
                    </div>

                </motion.div>
            ))}

            {/* Grand Summary */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }}
                className="glass-panel p-10 border-gold/30 bg-black/40 text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gold/5 animate-pulse-slow" />
                <h2 className="text-3xl font-heading text-gold mb-6 relative z-10">Grand Synthesis</h2>
                <p className="font-body text-xl leading-loose text-white/90 relative z-10 max-w-3xl mx-auto">
                    The cards reveal a path from the archetype of <span className="text-gold">{cards[0].Archetype || cards[0].name}</span> in your past,
                    influencing your current state of <span className="text-gold">{cards[1].keywords[0]}</span>.
                    Destiny points towards <span className="text-gold">{cards[2].name}</span>, suggesting that <span className="italic">{cards[2].fortune_telling[0].toLowerCase()}</span>.
                </p>
            </motion.div>
        </div>
    );
};
