import React from 'react';
import { BRANCHES } from '../data/mockData';
import { Phone, Send, Instagram, ShieldCheck, Clock, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onOpenConsultationModal: (branchId?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3 rounded-2xl bg-white inline-block shadow-md border border-slate-700/50">
              <Logo variant="horizontal" size="md" showSubtitle={true} />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://t.me/logoped_city_admin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/logoped_city_urganch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-fuchsia-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+998992210006"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#holatlar" className="hover:text-emerald-400 transition-colors">{t.nav.needs}</a></li>
              <li><a href="#xizmatlar" className="hover:text-emerald-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#metodika" className="hover:text-emerald-400 transition-colors">{t.nav.methodology}</a></li>
              <li><a href="#filiallar" className="hover:text-emerald-400 transition-colors">{t.nav.branches}</a></li>
              <li><a href="#mutaxassislar" className="hover:text-emerald-400 transition-colors">{t.nav.specialists}</a></li>
              <li><a href="#sertifikatlar" className="hover:text-emerald-400 transition-colors">{t.nav.certificates || 'Sertifikatlar'}</a></li>
              <li><a href="#kurslar" className="hover:text-emerald-400 transition-colors">{t.nav.courses}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Branches list */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              {t.footer.branchesTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {BRANCHES.map(b => {
                const bN = language === 'uz' ? b.name : (b.nameRu || b.name);
                const bA = language === 'uz' ? b.address : (b.addressRu || b.address);
                return (
                  <div key={b.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="font-bold text-white flex items-center justify-between">
                      <span>{bN}</span>
                      {b.hasCBO && (
                        <span className="text-[9px] font-bold text-fuchsia-400">CBO</span>
                      )}
                    </div>
                    <p className="text-slate-400 line-clamp-1">{bA}</p>
                    <a href={`tel:${b.phoneRaw}`} className="text-emerald-400 font-semibold block hover:underline">
                      {b.phone}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>{language === 'uz' ? 'Ish vaqti: Dushanba – Shanba: 09:00 dan 18:00 gacha' : 'Режим работы: Понедельник – Суббота: с 09:00 до 18:00'}</span>
            </div>
          </div>

        </div>

        {/* Ethical Pedagogical Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-500 flex items-start space-x-3 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <span>
            {t.footer.disclaimer}
          </span>
        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Logoped City Xorazm. {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>{language === 'uz' ? 'Yuqoriga qaytish' : 'Наверх'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
