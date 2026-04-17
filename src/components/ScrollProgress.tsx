"use client";

import { useScrollSignals } from "@/hooks/useScrollSignals";

export default function ScrollProgress() {
  const { progress } = useScrollSignals();

  return (
    <div className='fixed top-0 left-0 right-0 h-1.5 z-[60] bg-gray-100/30 backdrop-blur-sm'>
      <div
        className='h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 transition-all duration-150 shadow-[0_0_8px_rgba(0,0,0,0.2)] relative overflow-hidden'
        style={{ width: `${progress * 100}%` }}
      >
        {/* Animated shimmer effect */}
        <div 
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer 2s infinite',
            width: '50%',
          }}
        />
      </div>
    </div>
  );
}
