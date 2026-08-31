import React, { useState, useEffect } from 'react';
import { Phone, Send, Instagram, Menu, X, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultationModal: (defaultBranch?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Holatlar', href: '#holatlar' },
    { label: 'Xizmatlar', href: '#xizmatlar' },
    { label: 'Metodika', href: '#metodika' },
    { label: 'Filiallar', href: '#filiallar' },
    { label: 'Mutaxassislar', href: '#mutaxassislar' },
    { label: 'Kurslar', href: '#kurslar' },
    { label: 'Savol-javob', href: '#faq' },
    { label: 'Bog‘lanish', href: '#boglanish' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Xorazm viloyati: Urganch, Xiva, Qo‘shko‘pir, Xonqa
            </span>
            <span className="hidden md:flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1" />
              Du - Sha: 09:00 - 18:00
            </span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
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
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 rounded-lg hover:bg-emerald-50/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenConsultationModal()}
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-emerald-200" />
              Konsultatsiyaga yozilish
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
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
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

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Konsultatsiyaga yozilish
              </button>

              <a
                href="tel:+998992210006"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                +998 (99) 221-00-06 ga qo‘ng‘iroq qilish
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
