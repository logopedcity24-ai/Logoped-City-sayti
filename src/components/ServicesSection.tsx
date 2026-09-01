import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  MessageSquareText, 
  Brain, 
  Sparkles, 
  Activity, 
  Dumbbell, 
  Music, 
  Palette, 
  Home, 
  Users, 
  ChevronRight, 
  CheckCircle, 
  Info,
  MapPin
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationModal: (branch?: string, serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText': return <MessageSquareText className="w-6 h-6 text-emerald-600" />;
      case 'Brain': return <Brain className="w-6 h-6 text-teal-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-fuchsia-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-indigo-600" />;
      case 'Music': return <Music className="w-6 h-6 text-pink-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-purple-600" />;
      case 'Home': return <Home className="w-6 h-6 text-fuchsia-600" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  const categories = [
    { id: 'all', label: t.services.allTab },
    { id: 'speech', label: t.services.speechTab },
    { id: 'behavior_sensory', label: t.services.behaviorSensoryTab },
    { id: 'motor_life', label: t.services.motorLifeTab },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory || s.category === 'all');

  return (
    <section id="xizmatlar" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-105'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isCBO = service.id === 'cbo-kundalik-hayot';
            const title = language === 'uz' ? service.title : (service.titleRu || service.title);
            const categoryName = language === 'uz' ? service.categoryName : (service.categoryNameRu || service.categoryName);
            const shortDesc = language === 'uz' ? service.shortDesc : (service.shortDescRu || service.shortDesc);
            const highlightTag = language === 'uz' ? service.highlightTag : (service.highlightTagRu || service.highlightTag);
            const specialBranchNote = language === 'uz' ? service.specialBranchNote : (service.specialBranchNoteRu || service.specialBranchNote);
            const goals = (language === 'uz' ? service.goals : (service.goalsRu || service.goals)) || [];

            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col justify-between group ${
                  isCBO 
                    ? 'border-fuchsia-300 ring-2 ring-fuchsia-400/20 bg-gradient-to-b from-white to-fuchsia-50/20' 
                    : 'border-slate-200/80 hover:border-emerald-300'
                }`}
              >
                <div>
                  {/* Top tags & Icon */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {highlightTag && (
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          isCBO 
                            ? 'bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200' 
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}>
                          {highlightTag}
                        </span>
                      )}
                      <span className="text-[10px] font-medium text-slate-600">
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl mb-2 group-hover:text-emerald-700 transition-colors">
                    {index + 1}. {title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {shortDesc}
                  </p>

                  {/* Special constraint note for CBO room */}
                  {specialBranchNote && (
                    <div className="mb-4 p-3 rounded-xl bg-fuchsia-50 border border-fuchsia-200/80 text-[11px] font-semibold text-fuchsia-900 flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-fuchsia-700 shrink-0 mt-0.5" />
                      <span>{specialBranchNote}</span>
                    </div>
                  )}

                  {/* Key Goals List */}
                  <div className="space-y-2 mb-4">
                    {goals.slice(0, 3).map((goal, gIdx) => (
                      <div key={gIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => setSelectedServiceForModal(service)}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center py-1"
                  >
                    <Info className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {language === 'uz' ? 'Batafsil ma’lumot' : 'Подробнее'}
                  </button>

                  <button
                    onClick={() => onOpenConsultationModal(isCBO ? 'qoshkopir' : undefined, title)}
                    className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>{language === 'uz' ? 'Yozilish' : 'Записаться'}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for Detailed Service Information */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  {getIcon(selectedServiceForModal.iconName)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl">
                    {language === 'uz' ? selectedServiceForModal.title : (selectedServiceForModal.titleRu || selectedServiceForModal.title)}
                  </h3>
                  <span className="text-xs text-emerald-800 font-medium">
                    {language === 'uz' ? selectedServiceForModal.categoryName : (selectedServiceForModal.categoryNameRu || selectedServiceForModal.categoryName)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {(language === 'uz' ? selectedServiceForModal.specialBranchNote : (selectedServiceForModal.specialBranchNoteRu || selectedServiceForModal.specialBranchNote)) && (
                <div className="p-3 rounded-xl bg-fuchsia-50 border border-fuchsia-200 text-xs font-bold text-fuchsia-900 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-fuchsia-600 shrink-0" />
                  <span>{language === 'uz' ? selectedServiceForModal.specialBranchNote : (selectedServiceForModal.specialBranchNoteRu || selectedServiceForModal.specialBranchNote)}</span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {language === 'uz' ? 'Yo‘nalish haqida:' : 'О направлении:'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {language === 'uz' ? selectedServiceForModal.fullDesc : (selectedServiceForModal.fullDescRu || selectedServiceForModal.fullDesc)}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t.services.goalsTitle}
                </h4>
                <div className="space-y-2">
                  {(language === 'uz' ? selectedServiceForModal.goals : (selectedServiceForModal.goalsRu || selectedServiceForModal.goals)).map((g, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t.services.forWhomTitle}
                </h4>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {language === 'uz' ? selectedServiceForModal.forWhom : (selectedServiceForModal.forWhomRu || selectedServiceForModal.forWhom)}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                {t.modals.closeBtn}
              </button>
              <button
                onClick={() => {
                  const service = selectedServiceForModal;
                  setSelectedServiceForModal(null);
                  onOpenConsultationModal(
                    service.id === 'cbo-kundalik-hayot' ? 'qoshkopir' : undefined, 
                    language === 'uz' ? service.title : (service.titleRu || service.title)
                  );
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20"
              >
                {t.services.enrollServiceBtn}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
