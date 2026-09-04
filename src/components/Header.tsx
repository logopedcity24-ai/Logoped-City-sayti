import React, { useState, useEffect } from 'react';
import { Phone, Send, Instagram, Menu, X, Clock, MapPin, Sparkles, ChevronRight, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onOpenConsultationModal: (defaultBranch?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#xizmatlar' },
    { label: t.nav.speechTest, href: '#nutq-testi' },
    { label: t.nav.methodology, href: '#metodika' },
    { label: t.nav.branches, href: '#filiallar' },
    { label: t.nav.specialists, href: '#mutaxassislar' },
    { label: t.nav.certificates || 'Sertifikatlar', href: '#sertifikatlar' },
    { label: t.nav.courses, href: '#kurslar' },
    { label: t.nav.reviews, href: '#fikrlar' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#boglanish' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              {language === 'uz' ? 'Xorazm viloyati: Urganch, Xiva, Qo‘shko‘pir, Xonqa' : 'Хорезм: Ургенч, Хива, Кошкупыр, Ханка'}
            </span>
            <span className="hidden md:flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {language === 'uz' ? 'Du - Sha: 09:00 - 18:00' : 'Пн - Сб: 09:00 - 18:00'}
            </span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {/* Language Switcher in Top Bar */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 mr-1">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-0.5 rounded-md text-xs font-bold transition-all ${
                  language === 'uz'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="O‘zbekcha"
              >
                O‘Z
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-0.5 rounded-md text-xs font-bold transition-all ${
                  language === 'ru'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Русский"
              >
                RU
              </button>
            </div>

            <a
              href="https://t.me/logoped_city_admin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Send className="w-3.5 h-3.5 mr-1 text-sky-400" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a
              href="https://instagram.com/logoped_city_urganch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-300 hover:text-fuchsia-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 mr-1 text-fuchsia-400" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="tel:+998992210006"
              className="flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
              +998 (99) 221-00-06
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-emerald-100'
            : 'bg-white py-4 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group transition-transform hover:scale-[1.02]">
            <Logo variant="horizontal" size="md" showSubtitle={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-emerald-600 rounded-lg hover:bg-emerald-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => onOpenConsultationModal()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-emerald-200" />
              {t.nav.bookConsultation}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyuni ochish"
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Language Switcher in Mobile Menu */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700 flex items-center">
                <Globe className="w-4 h-4 mr-1.5 text-emerald-600" />
                {language === 'uz' ? 'Sayt tili:' : 'Язык сайта:'}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    language === 'uz'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  O‘zbekcha
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    language === 'ru'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  Русский
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all"
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                {t.nav.bookConsultation}
              </button>
              <a
                href="tel:+998992210006"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                +998 (99) 221-00-06
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
