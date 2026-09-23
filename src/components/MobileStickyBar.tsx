import React from 'react';
import { Phone, Send, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileStickyBarProps {
  onOpenConsultationModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <a
          href="tel:+998992210006"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>{language === 'uz' ? 'Qo‘ng‘iroq' : 'Звонок'}</span>
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

        {/* Book Consultation Modal Button with 50% discount badge */}
        <button
          onClick={onOpenConsultationModal}
          className="relative flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 active:from-emerald-700 active:to-teal-800 text-white font-bold text-[11px] shadow-sm transition-transform active:scale-95"
        >
          <span className="absolute -top-2 right-1 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-900 font-black text-[9px] shadow-xs">
            -50%
          </span>
          <Sparkles className="w-4 h-4 mb-0.5 text-amber-200" />
          <span>{language === 'uz' ? 'Yozilish' : 'Записаться'}</span>
        </button>

      </div>
    </div>
  );
};
