import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_ITEMS.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Savollaringizga Aniq Javoblar</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            KO‘P BERILADIGAN SAVOLLAR
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Markazimiz faoliyati, mashg‘ulotlar tartibi va metodikamiz bo‘yicha ota-onalarni eng ko‘p qiziqtirgan savollarga to‘liq javoblar.
          </p>
        </div>

        {/* Search Filter Box */}
        <div className="mt-8 mb-8 max-w-xl mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Savolingiz bo‘yicha qidiring (masalan: baholash, CBO, to‘lov)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {faq.category}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              Siz izlagan so‘z bo‘yicha savol topilmadi. Qo‘shimcha savollar uchun bizga to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qilishingiz mumkin.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
