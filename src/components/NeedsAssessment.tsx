import React, { useState } from 'react';
import { CHILD_NEEDS } from '../data/mockData';
import { HelpCircle, Check, ArrowRight, Sparkles, Filter, AlertCircle } from 'lucide-react';

interface NeedsAssessmentProps {
  onOpenConsultationModal: (branch?: string, prefillService?: string) => void;
}

export const NeedsAssessment: React.FC<NeedsAssessmentProps> = ({ onOpenConsultationModal }) => {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barcha holatlar' },
    { id: 'speech', label: 'Nutq va Talaffuz' },
    { id: 'behavior', label: 'Muloqot va Xulq' },
    { id: 'sensory', label: 'Sensor Sezgirlik' },
    { id: 'daily', label: 'Kundalik Ko‘nikmalar' },
  ];

  const filteredNeeds = activeCategoryFilter === 'all'
    ? CHILD_NEEDS
    : CHILD_NEEDS.filter(item => item.category === activeCategoryFilter);

  const toggleNeed = (id: string) => {
    setSelectedNeeds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Collect all recommended services based on selected needs
  const recommendedServices = Array.from(
    new Set(
      CHILD_NEEDS.filter(item => selectedNeeds.includes(item.id))
        .flatMap(item => item.recommendedServices)
    )
  );

  return (
    <section id="holatlar" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200/60">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Korreksion-Pedagogik Yordam</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            BIZ QANDAY HOLATLARDA YORDAM BERAMIZ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Agar farzandingizda quyidagi holatlardan birortasi kuzatilayotgan bo‘lsa, mutaxassislarimiz dastlabki baholash orqali to‘g‘ri korreksion yo‘nalishni belgilashga ko‘maklashadilar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategoryFilter === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredNeeds.map((need) => {
            const isSelected = selectedNeeds.includes(need.id);
            return (
              <div
                key={need.id}
                onClick={() => toggleNeed(need.id)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50/80 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-slate-50/60 hover:bg-slate-100/80 border-slate-200/80 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                      {need.category === 'speech' && 'Nutq'}
                      {need.category === 'behavior' && 'Xulq-atvor'}
                      {need.category === 'sensory' && 'Sensor'}
                      {need.category === 'daily' && 'Kundalik'}
                      {need.category === 'motor' && 'Harakat'}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 text-base mb-2 leading-snug">
                    {need.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {need.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 mt-auto">
                  <div className="text-[11px] font-semibold text-slate-500 mb-1">
                    Tavsiya etiladigan yo‘nalishlar:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {need.recommendedServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white text-emerald-800 border border-emerald-200/80"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Recommendation Box if any need is selected */}
        {selectedNeeds.length > 0 ? (
          <div className="mt-8 bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="w-4 h-4" />
                  <span>Siz tanlagan {selectedNeeds.length} ta holat bo‘yicha tavsiyamiz:</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold">
                  Dastlabki diagnostik baholashdan o‘tishni tavsiya qilamiz
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {recommendedServices.map((srv, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/15 backdrop-blur-xs text-emerald-100 text-xs font-semibold border border-white/20"
                    >
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultationModal(undefined, recommendedServices.join(', '))}
                className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <span>Mutaxassis bilan bog‘lanish</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8 text-center text-xs text-slate-500 bg-slate-50 rounded-xl p-4 border border-slate-200/60 max-w-xl mx-auto flex items-center justify-center space-x-2">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              Farzandingizda kuzatilayotgan holatlarni belgilang — tizim sizga mos xizmatlarni tavsiya qiladi.
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
