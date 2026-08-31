import React from 'react';
import { SPECIALISTS } from '../data/mockData';
import { Award, GraduationCap, MapPin, CheckCircle2, UserCheck } from 'lucide-react';

interface SpecialistsSectionProps {
  onOpenConsultationModal: (branch?: string, specialist?: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="mutaxassislar" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200/60">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>Tajribali va Malakali Jamoa</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            MUTAXASSISLARIMIZ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Har bir mutaxassisimiz oliy pedagogik-defektologik ma’lumotga va bolalar rivojlanishi sohasida ko‘p yillik amaliy tajribaga ega.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SPECIALISTS.map((spec) => (
            <div
              key={spec.id}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar & Basic Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0 shadow-xs ${spec.avatarBg}`}>
                    {spec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg">
                      {spec.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700">
                      {spec.role}
                    </p>
                    <div className="flex items-center text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                      <span>{spec.branch}</span>
                    </div>
                  </div>
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 py-3 border-y border-slate-200/60 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{spec.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{spec.education}</span>
                  </div>
                </div>

                {/* Specialization Chips */}
                <div className="pt-3">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Asosiy yo‘nalishlari:
                  </div>
                  <div className="space-y-1">
                    {spec.specialization.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation button */}
              <div className="pt-4 border-t border-slate-200/60 mt-4">
                <button
                  onClick={() => onOpenConsultationModal(undefined, spec.name)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs border border-slate-200 hover:border-emerald-600 transition-colors shadow-xs"
                >
                  Konsultatsiyaga yozilish
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
