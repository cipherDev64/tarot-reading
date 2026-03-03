import React from 'react';
import { cn } from '../../utils/cn';
import { MoonStar } from 'lucide-react';

export function CardBack({ className }: { className?: string }) {
    return (
        <div className={cn(
            "w-full h-full rounded-xl flex items-center justify-center p-3 relative overflow-hidden",
            "bg-gradient-to-br from-slate-800 to-slate-950 border border-amber-500/20 shadow-2xl",
            className
        )}>
            {/* Subtle inner border */}
            <div className="absolute inset-2 border border-amber-500/30 rounded-lg pointer-events-none opacity-50"></div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-amber-500/60"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-amber-500/60"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-amber-500/60"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-amber-500/60"></div>

            {/* Center minimal symbol */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-3 opacity-80">
                <MoonStar className="w-8 h-8 text-amber-500/70" strokeWidth={1} />
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <div className="w-1 h-1 rounded-full bg-amber-500/50 mt-1"></div>
            </div>

            {/* Background glow overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Very faint noise/texture overlay simulation */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
        </div>
    );
}
