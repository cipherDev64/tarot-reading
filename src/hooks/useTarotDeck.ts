import { useState, useCallback } from 'react';
import { TarotCard, TarotDeck } from '../types';
import tarotDataRaw from '../data/tarot-images.json';

// Assert the type of the imported JSON
const tarotData = tarotDataRaw as unknown as TarotDeck;

export const useTarotDeck = () => {
    const [deck, setDeck] = useState<TarotCard[]>(tarotData.cards);
    const [reading, setReading] = useState<TarotCard[]>([]);

    const shuffleDeck = useCallback(() => {
        const shuffled = [...tarotData.cards].sort(() => Math.random() - 0.5);
        setDeck(shuffled);
    }, []);

    const drawThree = useCallback(() => {
        // Shuffle fresh from the source data to ensure randomness every time
        const shuffled = [...tarotData.cards].sort(() => Math.random() - 0.5);
        const drawn = shuffled.slice(0, 3);
        setReading(drawn);
    }, []);

    return { deck, reading, shuffleDeck, drawThree };
};
