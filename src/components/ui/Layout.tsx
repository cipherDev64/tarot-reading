import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
}

const Particle = ({ index }: { index: number }) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    const size = Math.random() * 3 + 1;

    return (
        <motion.div
            className="absolute bg-white rounded-full opacity-50"
            style={{
                width: size,
                height: size,
                left: `${randomX}%`,
                top: `${randomY}%`,
            }}
            animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2,
            }}
        />
    );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [particles, setParticles] = useState<number[]>([]);

    useEffect(() => {
        setParticles(Array.from({ length: 50 }, (_, i) => i));
    }, []);

    return (
        <div className="relative min-h-screen bg-celestial-gradient overflow-hidden flex flex-col items-center justify-center text-center p-4">
            {/* Particle System */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {particles.map((i) => (
                    <Particle key={i} index={i} />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl">
                {children}
            </div>
        </div>
    );
};
