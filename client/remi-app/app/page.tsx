"use client"

import { useState, useEffect } from 'react';
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function Home() {
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
      <div className="w-full max-w-5xl h-[85vh] flex flex-col">
        
        {/* Toolbar */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Left Side Tools */}
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>

          <div className="w-px h-8 bg-stone-400/30 mx-2"></div>

          {/* Right Side Tools */}
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
            </svg>
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-transparent hover:bg-stone-300/30 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        {/* Diary Page */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
          {/* Center Seam */}
          <div className="absolute left-1/2 top-0 mt-2 mb-2 bottom-0 w-px bg-stone-200 z-10"></div>
          
          {/* Writing Area with ReactFlow */}
          <div className="w-full h-full">
            <ReactFlow 
              fitView
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              panOnScroll={false}
              nodesConnectable={true}
              elementsSelectable={true}
              panOnDrag={false}
            >
              <Background 
                color="black" 
                variant={BackgroundVariant.Dots} 
                gap={gridGap}
                size={1}
              />
            </ReactFlow>
          </div>
        </div>
      </div>
    </main>
  );
} 