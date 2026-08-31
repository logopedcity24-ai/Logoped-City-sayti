import React from 'react';
import { METHODOLOGY_STEPS } from '../data/mockData';
import { SearchCheck, FileText, Puzzle, TrendingUp, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

interface MethodologySectionProps {
  onOpenConsultationModal: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenConsultationModal }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-teal-600" />;
      case 'Puzzle': return <Puzzle className="w-6 h-6 text-fuchsia-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      default: return <SearchCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="metodika" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs sm:text-sm font-semibold border border-teal-200/60">
            <span>Ilmiy va Tizimli Yondashuv</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            BIZ QANDAY ISHLAYMIZ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Biz har bir bolaga individual shaxs sifatida qaraymiz. Rivojlanish jarayoni aniq 4 ta asosiy bosqichdan iborat bo‘lib, ota-ona bilan to‘liq hamkorlikda olib boriladi.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between relative hover:bg-emerald-50/30 hover:border-emerald-300 transition-all duration-300 group"
            >
              <div>
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-emerald-600/30 group-hover:text-emerald-600 transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex items-center justify-center">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Duration indicator */}
                <div className="inline-flex items-center text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200/60 mb-3">
                  <Clock className="w-3 h-3 mr-1 text-slate-400" />
                  <span>{step.duration}</span>
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Specific bullets */}
                <div className="space-y-2 border-t border-slate-200/60 pt-3">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 text-[11px] font-medium text-emerald-700 flex items-center">
                <span>Bosqich {idx + 1} / 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Commitment Box */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                Markazimizning Korreksion-Pedagogik Tamoyili
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Logoped City faoliyati tibbiy davolash emas, balki bolaning tabiiy qobiliyatlari, nutqi, sensor va xulqiy ko‘nikmalarini rivojlantirishga qaratilgan pedagogik-psixologik yordamdir.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="shrink-0 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            Baholashga yozilish
          </button>
        </div>

      </div>
    </section>
  );
};
