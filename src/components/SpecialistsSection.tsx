import React from 'react';
import { SPECIALISTS } from '../data/mockData';
import { Award, GraduationCap, MapPin, CheckCircle2, UserCheck, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface SpecialistsSectionProps {
  onOpenConsultationModal: (branch?: string, specialist?: string) => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="mutaxassislar" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200/60">
            <UserCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.specialists.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.specialists.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.specialists.subtitle}
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {SPECIALISTS.map((spec) => {
            const role = language === 'uz' ? spec.role : (spec.roleRu || spec.role);
            const experience = language === 'uz' ? spec.experience : (spec.experienceRu || spec.experience);
            const education = language === 'uz' ? spec.education : (spec.educationRu || spec.education);
            const branch = language === 'uz' ? spec.branch : (spec.branchRu || spec.branch);
            const specialization = (language === 'uz' ? spec.specialization : (spec.specializationRu || spec.specialization)) || [];

            return (
              <div
                key={spec.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Specialist Photo */}
                  <div className="relative mb-4 flex justify-center">
                    {spec.photoUrl ? (
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden shadow-md border-2 border-white ring-4 ring-emerald-50/80 group-hover:ring-emerald-200 transition-all">
                        <img
                          src={spec.photoUrl}
                          alt={spec.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center font-bold text-3xl shadow-md ${spec.avatarBg}`}>
                        {spec.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="text-center mb-4">
                    <h3 className="font-heading font-black text-slate-900 text-base sm:text-lg leading-snug">
                      {spec.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700 mt-1">
                      {role}
                    </p>
                    <div className="flex items-center justify-center text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1 text-emerald-600" />
                      <span>{branch}</span>
                    </div>
                  </div>

                  {/* Experience & Education */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700">
                    <div className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{experience}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <GraduationCap className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{education}</span>
                    </div>
                  </div>

                  {/* Specialization Chips */}
                  <div className="pt-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      {t.specialists.mainAreasLabel}
                    </div>
                    <div className="space-y-1.5">
                      {specialization.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate link button */}
                {spec.certificateCount && spec.certificateCount > 0 && (
                  <div className="pt-3 border-t border-slate-100 mt-3">
                    <a
                      href="#sertifikatlar"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('filter-certificates', { detail: spec.id }));
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200/80 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors group/cert"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-teal-600 group-hover/cert:scale-110 transition-transform" />
                      <span>{t.specialists.viewCertificatesBtn} ({spec.certificateCount})</span>
                    </a>
                  </div>
                )}

                {/* Consultation button */}
                <div className={`pt-3 ${spec.certificateCount ? 'mt-2' : 'border-t border-slate-100 mt-4'}`}>
                  <button
                    onClick={() => {
                      const specDisplayName = language === 'uz' ? spec.name : (spec.nameRu || spec.name);
                      const topicText = `${specDisplayName} - ${language === 'uz' ? 'Diagnostikaga yozilish' : 'Запись на диагностику'}`;
                      onOpenConsultationModal(undefined, topicText);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    {t.specialists.bookSpecBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
