import { useState } from 'react';
import { Layout } from './components/ui/Layout';
import { Button } from './components/ui/Button';
import { Spread } from './components/tarot/Spread';
import { ReadingParsed } from './components/tarot/ReadingParsed';
import { useTarotDeck } from './hooks/useTarotDeck';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const { drawThree, reading } = useTarotDeck();
    const [gameState, setGameState] = useState<'landing' | 'shuffling' | 'reading'>('landing');
    const [revealedIndices, setRevealedIndices] = useState<number[]>([]);

    const handleStart = () => {
        setGameState('shuffling');
        // Simulate shuffle duration
        setTimeout(() => {
            drawThree();
            setGameState('reading');
        }, 2000);
    };

    const handleReveal = (index: number) => {
        if (!revealedIndices.includes(index)) {
            setRevealedIndices([...revealedIndices, index]);
        }
    };

    const allRevealed = revealedIndices.length === 3;

    return (
        <Layout>
            <AnimatePresence mode="wait">
                {gameState === 'landing' && (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <h1 className="text-6xl md:text-8xl font-heading text-gold mb-4 text-center">
                            Celestial Tarot
                        </h1>
                        <p className="text-xl md:text-2xl font-body text-white/80 max-w-2xl mb-12">
                            Unlock the mysteries of your destiny. Let the stars guide your path through the ancient wisdom of the cards.
                        </p>
                        <Button onClick={handleStart}>
                            Get Reading
                        </Button>
                    </motion.div>
                )}

                {gameState === 'shuffling' && (
                    <motion.div
                        key="shuffling"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-[50vh]"
                    >
                        {/* Simple shuffling orbit animation */}
                        <div className="relative w-64 h-64">
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 border border-gold/30 rounded-xl bg-midnight-800/50"
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.1, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.1
                                    }}
                                    style={{ transformOrigin: 'center center' }}
                                />
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center text-gold font-heading tracking-widest animate-pulse">
                                SHUFFLING
                            </div>
                        </div>
                    </motion.div>
                )}

                {gameState === 'reading' && (
                    <motion.div
                        key="reading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full"
                    >
                        <Spread
                            cards={reading}
                            revealedIndices={revealedIndices}
                            onReveal={handleReveal}
                        />

                        {allRevealed && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <ReadingParsed cards={reading} />

                                <div className="mt-12 mb-20 flex justify-center">
                                    <Button onClick={() => {
                                        setGameState('landing');
                                        setRevealedIndices([]);
                                    }}>
                                        New Reading
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
}

export default App;
