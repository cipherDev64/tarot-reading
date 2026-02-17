import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <motion.button
            onClick={onClick}
            className="relative px-12 py-4 text-2xl font-heading font-bold text-white tracking-widest uppercase rounded-full group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-glass group-hover:bg-white/20 transition-all duration-300 pointer-events-none" />

            {/* Inner Glow / Pulse Effect */}
            <motion.div
                className="absolute inset-0 rounded-full border border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 Pointer-events-none"
                animate={{ boxShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.5)", "0 0 0px rgba(212,175,55,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Text with separate z-index */}
            <span className="relative z-10 text-shadow-glow group-hover:text-gold-light transition-colors duration-300 pointer-events-none">
                {children}
            </span>
        </motion.button>
    );
};
