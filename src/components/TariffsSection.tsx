import React from 'react';
import { 
  Check, 
  Sparkles, 
  Star, 
  Crown, 
  Calendar, 
  Info, 
  Waves, 
  Car, 
  Users, 
  GraduationCap, 
  ClipboardCheck, 
  TrendingUp, 
  ShieldCheck, 
  Heart, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { TARIFF_PLANS } from '../data/mockData';
import { TariffPlan } from '../types';

interface TariffsSectionProps {
  onOpenConsultationModal: (branchId?: string, topicTitle?: string) => void;
}

export const TariffsSection: React.FC<TariffsSectionProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleSelectTariff = (plan: TariffPlan) => {
    const topic = language === 'uz' 
      ? `Tarif: ${plan.name} (${plan.price} ${plan.period})`
      : `Тариф: ${plan.nameRu || plan.name} (${plan.price} ${plan.periodRu || plan.period})`;
    onOpenConsultationModal(undefined, topic);
  };

  return (
    <section id="tariflar" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs sm:text-sm font-semibold mb-4 border border-pink-200 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>{t.tariffs.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.tariffs.title}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.tariffs.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch mb-16">
          {TARIFF_PLANS.map((plan) => {
            const isComplex = plan.id === 'complex';
            const isPremium = plan.id === 'premium';
            const isGreen = plan.colorTheme === 'green';

            // Theme-based styling
            let cardBorder = 'border-slate-200 hover:border-emerald-400';
            let headerBg = 'bg-emerald-600 text-white';
            let priceColor = 'text-emerald-700';
            let btnClasses = 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20';

            if (isComplex) {
              cardBorder = 'border-2 border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-400/20';
              headerBg = 'bg-blue-600 text-white';
              priceColor = 'text-blue-700';
              btnClasses = 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25';
            } else if (isPremium) {
              cardBorder = 'border-2 border-purple-500 shadow-xl shadow-purple-500/10 ring-2 ring-purple-400/20';
              headerBg = 'bg-purple-700 text-white';
              priceColor = 'text-purple-700';
              btnClasses = 'bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-purple-700/25';
            }

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-white rounded-3xl border ${cardBorder} transition-all duration-300 hover:shadow-2xl overflow-hidden`}
              >
                {/* Popular Ribbon for Complex */}
                {isComplex && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-bl-xl shadow-md tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {language === 'uz' ? (plan.badge || 'ENG KO‘P TANLANADI!') : (plan.badgeRu || 'САМЫЙ ПОПУЛЯРНЫЙ!')}
                    </div>
                  </div>
                )}

                {/* Card Top / Header */}
                <div className="p-6 pb-4">
                  {/* Badge / Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${headerBg}`}>
                      {isPremium && <Crown className="w-4 h-4 text-amber-300" />}
                      {isComplex && <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />}
                      {isGreen && <Users className="w-4 h-4" />}
                      <span>{language === 'uz' ? plan.name : (plan.nameRu || plan.name)}</span>
                    </div>

                    {isPremium && (
                      <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200 uppercase tracking-wide">
                        {language === 'uz' ? 'Full Development' : 'Полный комплекс'}
                      </span>
                    )}
                  </div>

                  {/* Schedule & Lessons info */}
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
                    <div className="flex items-center text-xs sm:text-sm font-semibold text-slate-700">
                      <Calendar className="w-4 h-4 mr-1.5 text-slate-400 shrink-0" />
                      <span>{language === 'uz' ? plan.schedule : (plan.scheduleRu || plan.schedule)}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {language === 'uz' ? plan.lessonsSummary : (plan.lessonsSummaryRu || plan.lessonsSummary)}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-1">
                      <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${priceColor}`}>
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-500">
                        {language === 'uz' ? plan.period : (plan.periodRu || plan.period)}
                      </span>
                    </div>
                    {plan.subtitle && (
                      <p className="text-xs text-slate-500 mt-1">
                        {language === 'uz' ? plan.subtitle : (plan.subtitleRu || plan.subtitle)}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {t.tariffs.includedTitle}
                    </div>
                    
                    <ul className="space-y-2.5">
                      {(language === 'uz' ? plan.features : (plan.featuresRu || plan.features)).map((feat, idx) => {
                        const isPool = feat.toLowerCase().includes('basseyn') || feat.toLowerCase().includes('бассейн');
                        const isHorse = feat.toLowerCase().includes('ot sporti') || feat.toLowerCase().includes('конным');
                        const isTransfer = feat.toLowerCase().includes('olib kelish') || feat.toLowerCase().includes('трансфер');
                        const isBonus = feat.toLowerCase().includes('bonus') || feat.toLowerCase().includes('бонус');

                        return (
                          <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-snug">
                            <span className="mr-2 mt-0.5 shrink-0">
                              {isPool ? (
                                <span className="inline-flex p-0.5 rounded-full bg-sky-100 text-sky-600">
                                  <Waves className="w-3.5 h-3.5" />
                                </span>
                              ) : isHorse ? (
                                <span className="inline-flex p-0.5 rounded-full bg-amber-100 text-amber-700 font-bold text-[10px] px-1">
                                  🐎
                                </span>
                              ) : isTransfer ? (
                                <span className="inline-flex p-0.5 rounded-full bg-indigo-100 text-indigo-600">
                                  <Car className="w-3.5 h-3.5" />
                                </span>
                              ) : isBonus ? (
                                <span className="inline-flex p-0.5 rounded-full bg-purple-100 text-purple-600">
                                  <Sparkles className="w-3.5 h-3.5" />
                                </span>
                              ) : (
                                <span className="inline-flex p-0.5 rounded-full bg-emerald-100 text-emerald-600">
                                  <Check className="w-3.5 h-3.5" />
                                </span>
                              )}
                            </span>
                            <span className={isPool || isHorse || isTransfer || isBonus ? 'font-semibold text-slate-900' : ''}>
                              {feat}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Excluded Note (for Start 3 & Start 6) */}
                  {plan.excludedNote && (
                    <div className="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2 text-xs text-slate-500">
                      <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{language === 'uz' ? plan.excludedNote : (plan.excludedNoteRu || plan.excludedNote)}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-2">
                  <button
                    onClick={() => handleSelectTariff(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${btnClasses}`}
                  >
                    <span>{t.tariffs.selectTariffBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Mission Card (From the flyer) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Pillars: NIMA UCHUN LOGOPED CITY? */}
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                {t.tariffs.whyChooseTitle}
              </h3>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-10 text-center">
              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 mb-2">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">10+ yillik tajriba</h4>
                <p className="text-xs text-slate-300 hidden sm:block">Sinalgan pedagogik amaliyot</p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Malakali mutaxassislar</h4>
                <p className="text-xs text-slate-300 hidden sm:block">Diplom va xalqaro sertifikatlar</p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 mb-2">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Individual yondashuv</h4>
                <p className="text-xs text-slate-300 hidden sm:block">Har bir bolaga shaxsiy reja</p>
              </div>

              <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Natijaga yo‘naltirilgan</h4>
                <p className="text-xs text-slate-300 hidden sm:block">Doimiy monitoring va hisobot</p>
              </div>

              <div className="col-span-2 md:col-span-1 flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400 mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Xavfsiz va samarali</h4>
                <p className="text-xs text-slate-300 hidden sm:block">Zamonaviy korreksion usullar</p>
              </div>
            </div>

            {/* Mission & Action Call */}
            <div className="pt-6 border-t border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center space-x-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Heart className="w-4 h-4 fill-pink-400" />
                  <span>{t.tariffs.missionTitle}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {t.tariffs.missionDesc}
                </p>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  {t.tariffs.slogan}
                </div>
              </div>

              <button
                onClick={() => onOpenConsultationModal(undefined, language === 'uz' ? 'Tariflar haqida batafsil ma’lumot' : 'Подробная информация о тарифах')}
                className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all duration-200 flex items-center space-x-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>{t.tariffs.contactForInfo}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
