import React from 'react';
import { Play, Unlock } from 'lucide-react';
import { getDynamicLink } from '../constants';

const StickyFooter: React.FC = () => {
  const link = getDynamicLink();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#141414]/95 backdrop-blur-sm border-t border-gray-800 p-3 md:p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] animate-slide-up">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden md:flex flex-col">
          <span className="text-white font-bold text-lg flex items-center gap-2">
            <Unlock className="w-4 h-4 text-green-500" />
            Acesso Liberado
          </span>
          <span className="text-gray-400 text-xs">Vagas limitadas para hoje</span>
        </div>

        {/* Formulário envolvendo Botão Real para detecção do Pixel sem duplicação */}
        <form 
          action={link}
          target="_blank"
          className="w-full md:w-auto"
        >
          <button type="submit" className="w-full md:w-auto bg-[#E50914] hover:bg-[#b2070f] text-white font-black uppercase py-3 px-8 rounded flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition-transform active:scale-95 animate-pulse border-none cursor-pointer">
            <Play className="w-5 h-5 fill-white" />
            ENTRAR AGORA
          </button>
        </form>
      </div>
    </div>
  );
};

export default StickyFooter;
