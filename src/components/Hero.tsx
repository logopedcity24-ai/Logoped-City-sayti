import React from 'react';
import { Sparkles, MapPin, CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight, PhoneCall, Users, Compass } from 'lucide-react';
import { Logo, LogoEmblem } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const trustBadges = [
    { 
      text: language === 'uz' ? 'Individual rivojlanish dasturi' : 'Индивидуальная программа развития', 
      icon: Sparkles, 
      color: 'text-emerald-600 bg-emerald-50' 
    },
    { 
      text: language === 'uz' ? 'Kompleks mutaxassislar jamoasi' : 'Команда опытных специалистов', 
      icon: Users, 
      color: 'text-fuchsia-600 bg-fuchsia-50' 
    },
    { 
      text: language === 'uz' ? 'Xorazm bo‘ylab 4 ta qulay filial' : '4 удобных филиала в Хорезме', 
      icon: MapPin, 
      color: 'text-teal-600 bg-teal-50' 
    },
    { 
      text: language === 'uz' ? 'Pedagogik-korreksion yondashuv' : 'Коррекционно-педагогический подход', 
      icon: ShieldCheck, 
      color: 'text-indigo-600 bg-indigo-50' 
    },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative subtle background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-fuchsia-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, subtext, actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Center Announcement Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.titleHighlight} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-fuchsia-600 bg-clip-text text-transparent">
                {t.hero.titleMain}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-slate-900 font-semibold">Logoped City</strong> — {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>{t.hero.freeConsultationBtn}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <a
                href="#nutq-testi"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2 text-emerald-600" />
                <span>{t.hero.speechTestBtn}</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200/80">
              {trustBadges.map((badge, idx) => {
                const IconComp = badge.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2.5 text-left">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${badge.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Visual Infographic Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with official Logo and visual identity */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-slate-200/80 border border-slate-100 relative z-10 space-y-5 overflow-hidden">
                
                {/* Subtle wavy corner accents in card header */}
                <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 p-6 bg-gradient-to-r from-pink-500/10 via-white to-emerald-500/10 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    {/* Official Emblem */}
                    <div className="relative w-13 h-13 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex items-center justify-center p-0.5 shrink-0 overflow-hidden">
                      <LogoEmblem className="w-full h-full rounded-xl" />
                    </div>
                    <div>
                      <h2 className="font-heading font-black text-lg tracking-tight text-[#009933] uppercase">
                        LOGOPED <span className="text-[#EC008C]">CITY</span>
                      </h2>
                      <p className="text-[11px] font-semibold text-slate-500">{t.hero.subOffices}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#00A84F]/15 text-[#008A3F] border border-[#00A84F]/30">
                    {t.hero.activeAcceptance}
                  </span>
                </div>

                {/* Micro checklist of key pillars */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 transition-colors border border-slate-100 flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-[#009933] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.hero.cardPillar1Title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{t.hero.cardPillar1Desc}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 hover:bg-pink-50/50 transition-colors border border-slate-100 flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-[#EC008C] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{t.hero.cardPillar2Title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{t.hero.cardPillar2Desc}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 hover:bg-teal-50/50 transition-colors border border-slate-100 flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-bold text-slate-900">{t.hero.cardPillar3Title}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-pink-100 text-[#EC008C]">
                          {language === 'uz' ? 'Qo‘shko‘pirda' : 'В Кошкупыре'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{t.hero.cardPillar3Desc}</p>
                    </div>
                  </div>
                </div>

                {/* Quick Branch Directory Mini List */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {language === 'uz' ? 'Filiallarimiz:' : 'Наши филиалы:'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a href="#filiallar" className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 font-semibold text-slate-700 text-center transition-colors border border-slate-100">
                      📍 {language === 'uz' ? 'Urganch shahri' : 'г. Ургенч'}
                    </a>
                    <a href="#filiallar" className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 font-semibold text-slate-700 text-center transition-colors border border-slate-100">
                      📍 {language === 'uz' ? 'Xiva shahri' : 'г. Хива'}
                    </a>
                    <a href="#filiallar" className="p-2 rounded-xl bg-pink-50 hover:bg-pink-100 font-semibold text-[#EC008C] text-center transition-colors border border-pink-100">
                      📍 {language === 'uz' ? 'Qo‘shko‘pir (CBO)' : 'Кошкупыр (СБО)'}
                    </a>
                    <a href="#filiallar" className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 font-semibold text-slate-700 text-center transition-colors border border-slate-100">
                      📍 {language === 'uz' ? 'Xonqa tumani' : 'Ханкинский район'}
                    </a>
                  </div>
                </div>

                {/* Direct quick call banner */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">{t.hero.contactAdmin}</div>
                  <a
                    href="tel:+998992210006"
                    className="inline-flex items-center text-xs font-bold text-[#009933] hover:text-emerald-800"
                  >
                    <PhoneCall className="w-3.5 h-3.5 mr-1 text-[#009933]" />
                    +998 (99) 221-00-06
                  </a>
                </div>

              </div>

              {/* Floating decorative badge with brand logo styling */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl items-center space-x-3 z-20 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-white p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                  <LogoEmblem className="w-full h-full rounded-lg" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold">{t.hero.floatingBadge1}</div>
                  <div className="text-[11px] text-slate-300">{t.hero.floatingBadge2}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
