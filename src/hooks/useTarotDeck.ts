import { useState, useCallback } from 'react';
import { TarotCard, TarotDeck } from '../types';
import tarotDataRaw from '../data/tarot-images.json';

// Assert the type of the imported JSON
const tarotData = tarotDataRaw as unknown as TarotDeck;

export const useTarotDeck = () => {
    const [deck, setDeck] = useState<TarotCard[]>(tarotData.cards);
    const [reading, setReading] = useState<TarotCard[]>([]);

    // Fisher-Yates Shuffle for better randomness
    const fisherYatesShuffle = (array: TarotCard[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const shuffleDeck = useCallback(() => {
        const shuffled = fisherYatesShuffle(tarotData.cards);
        setDeck(shuffled);
    }, []);

    const drawThree = useCallback(() => {
        const shuffled = fisherYatesShuffle(tarotData.cards);
        const drawn = shuffled.slice(0, 3);
        setReading(drawn);
    }, []);

    return { deck, reading, shuffleDeck, drawThree };
};
