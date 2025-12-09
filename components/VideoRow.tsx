import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { getDynamicLink } from '../constants';

interface VideoRowProps {
  title: string;
  items: string[];
}

const VideoRow: React.FC<VideoRowProps> = ({ title, items }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const link = getDynamicLink();
  
  // Usamos refs para rastrear o movimento sem causar re-renderizações desnecessárias
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // State apenas para mudar o cursor visualmente
  const [isCursorGrabbing, setIsCursorGrabbing] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Drag Handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    isDraggingRef.current = false;
    startXRef.current = e.pageX - rowRef.current.offsetLeft;
    scrollLeftRef.current = rowRef.current.scrollLeft;
    setIsCursorGrabbing(true);
  };

  const onMouseLeave = () => {
    setIsCursorGrabbing(false);
    isDraggingRef.current = false;
  };

  const onMouseUp = () => {
    setIsCursorGrabbing(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    if (e.buttons !== 1) return;

    e.preventDefault();
    
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startXRef.current); 
    
    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true;
      rowRef.current.scrollLeft = scrollLeftRef.current - walk * 2;
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    // Se houve arrasto real, bloqueamos a navegação do link
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="space-y-2 mb-8 px-4 md:px-12 group relative z-20">
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg md:text-2xl font-semibold cursor-pointer hover:text-gray-300 transition w-fit block no-underline"
      >
        {title}
      </a>
      
      <div className="relative group/row">
        {/* Left Arrow */}
        <button 
          onClick={(e) => { e.stopPropagation(); scroll('left'); }}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 items-center justify-center hidden md:flex opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={rowRef}
          className={`flex gap-2 overflow-x-auto no-scrollbar scroll-smooth py-4 select-none ${
            isCursorGrabbing ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {items.map((imgUrl, index) => (
            <a 
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              onDragStart={(e) => e.preventDefault()} 
              className="relative min-w-[240px] md:min-w-[320px] aspect-video rounded overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:z-50 shadow-lg group/item block"
            >
              <img 
                src={imgUrl} 
                alt={`Thumbnail ${index}`} 
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                 <PlayCircle className="text-white w-12 h-12 drop-shadow-lg" />
              </div>

              {/* Badges */}
              <div className="absolute top-2 right-2 bg-[#E50914] text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/item:opacity-100 transition duration-300 pointer-events-none">
                NOVO
              </div>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={(e) => { e.stopPropagation(); scroll('right'); }}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/50 hover:bg-black/70 w-12 items-center justify-center hidden md:flex opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default VideoRow;