"use client"

import { useState, useEffect } from 'react';
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function Dashboard() {
  const [gridGap, setGridGap] = useState(20);

  useEffect(() => {
    const updateGridGap = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setGridGap(12);
      } else if (width < 1024) {
        setGridGap(16);
      } else {
        setGridGap(20);
      }
    };

    updateGridGap();
    window.addEventListener('resize', updateGridGap);
    return () => window.removeEventListener('resize', updateGridGap);
  }, []);

  return (
    <main className="min-h-screen bg-[#d4c9b8] flex items-center justify-center p-8">
      {/* Diary Container */}
      his
    </main>
  );
} 