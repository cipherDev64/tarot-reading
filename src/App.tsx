import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LandingView } from './components/Landing/LandingView';
import { SpreadView } from './components/Spread/SpreadView';
import { getRandomCardImages } from './utils/cardUtils';

type GameState = 'landing' | 'spread';

function App() {
    const [gameState, setGameState] = useState<GameState>('landing');
    const [cardImages, setCardImages] = useState<string[]>([]);

    // Select 6 random cards on init
    useEffect(() => {
        setCardImages(getRandomCardImages(6));
    }, []);

    const handleStart = () => {
        setGameState('spread');
    };

    const handleReshuffle = () => {
        // Flow: Fade out to landing, then secretly reshuffle cards for the next round
        setGameState('landing');
        setTimeout(() => {
            setCardImages(getRandomCardImages(6));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    };

    return (
        <div className="w-full min-h-screen bg-background relative overflow-x-hidden selection:bg-amber-500/30">
            <AnimatePresence mode="wait">
                {gameState === 'landing' && (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8 } }}
                        className="w-full min-h-screen relative"
                    >
                        <LandingView onStart={handleStart} />
                    </motion.div>
                )}

                {gameState === 'spread' && (
                    <motion.div
                        key="spread"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8 } }}
                        className="w-full min-h-screen relative overflow-y-auto"
                    >
                        <SpreadView cardImages={cardImages} onReshuffle={handleReshuffle} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
