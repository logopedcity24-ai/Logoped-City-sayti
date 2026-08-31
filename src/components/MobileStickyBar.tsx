import React from 'react';
import { Phone, Send, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultationModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultationModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href="tel:+998992210006"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-bounce" />
          <span>Qo‘ng‘iroq</span>
        </a>

        {/* Telegram Button */}
        <a
          href="https://t.me/logoped_city_admin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-500 active:bg-sky-600 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span>Telegram</span>
        </a>

        {/* Book Consultation Modal Button */}
        <button
          onClick={onOpenConsultationModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95"
        >
          <Sparkles className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span>Yozilish</span>
        </button>

      </div>
    </div>
  );
};
