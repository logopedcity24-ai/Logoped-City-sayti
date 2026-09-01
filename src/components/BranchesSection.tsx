import React, { useState } from 'react';
import { BRANCHES } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Compass, 
  Send, 
  Instagram,
  Navigation
} from 'lucide-react';

interface BranchesSectionProps {
  onOpenConsultationModal: (branchId?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('urganch');
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const selectedBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  const branchName = language === 'uz' ? selectedBranch.name : (selectedBranch.nameRu || selectedBranch.name);
  const branchCity = language === 'uz' ? selectedBranch.city : (selectedBranch.cityRu || selectedBranch.city);
  const branchAddress = language === 'uz' ? selectedBranch.address : (selectedBranch.addressRu || selectedBranch.address);
  const branchLandmark = language === 'uz' ? selectedBranch.landmark : (selectedBranch.landmarkRu || selectedBranch.landmark);
  const branchWorkHours = language === 'uz' ? selectedBranch.workHours : (selectedBranch.workHoursRu || selectedBranch.workHours);
  const branchFeatures = (language === 'uz' ? selectedBranch.features : (selectedBranch.featuresRu || selectedBranch.features)) || [];

  return (
    <section id="filiallar" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>{t.branches.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.branches.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.branches.subtitle}
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mb-8 max-w-4xl mx-auto">
          {BRANCHES.map(branch => {
            const isActive = branch.id === activeBranchId;
            const bName = language === 'uz' ? branch.name : (branch.nameRu || branch.name);
            const bCity = language === 'uz' ? branch.city : (branch.cityRu || branch.city);

            return (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-white border-emerald-600 shadow-lg ring-2 ring-emerald-600/20'
                    : 'bg-white/80 hover:bg-white border-slate-200 text-slate-700'
                }`}
              >
                {branch.hasCBO && (
                  <span className="absolute -top-2.5 right-3 text-[10px] font-black uppercase tracking-wider bg-fuchsia-600 text-white px-2 py-0.5 rounded-full shadow-xs">
                    {t.branches.cboBadge}
                  </span>
                )}
                <div className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                  {bCity}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1">
                  {bName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Display Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Branch Info */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                    {branchCity}
                  </span>
                  {selectedBranch.hasCBO && (
                    <span className="px-3 py-1 rounded-lg bg-fuchsia-100 text-fuchsia-800 text-xs font-bold">
                      ★ {language === 'uz' ? 'Maxsus CBO xonasi bilan jihozlangan' : 'Оснащен специальной комнатой СБО'}
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {branchName}
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{t.branches.addressLabel}</strong>
                    <span>{branchAddress}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{t.branches.landmarkLabel}</strong>
                    <span>{branchLandmark}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{t.branches.workHoursLabel}</strong>
                    <span>{branchWorkHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">{language === 'uz' ? 'Telefon raqam:' : 'Номер телефона:'}</strong>
                    <a
                      href={`tel:${selectedBranch.phoneRaw}`}
                      className="text-emerald-700 font-bold text-base hover:underline"
                    >
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Branch Features */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t.branches.featuresLabel}
                </h4>
                <div className="space-y-1.5">
                  {branchFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultationModal(selectedBranch.id)}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all"
                >
                  {t.branches.bookBranchBtn}
                </button>

                <a
                  href={`tel:${selectedBranch.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  {t.branches.callBranchBtn}
                </a>
              </div>
            </div>

            {/* Right: Interactive Maps & Social Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-base text-emerald-400">
                  {language === 'uz' ? 'Xaritada ko‘rish' : 'Посмотреть на карте'}
                </h4>
                <Compass className="w-5 h-5 text-slate-400" />
              </div>

              {/* Live Interactive Yandex Map Widget */}
              {selectedBranch.coords && (
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                  <iframe
                    src={`https://yandex.uz/map-widget/v1/?ll=${selectedBranch.coords.lng}%2C${selectedBranch.coords.lat}&z=16&pt=${selectedBranch.coords.lng}%2C${selectedBranch.coords.lat},pm2rdm`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    title={branchName}
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}

              <div className="space-y-2">
                {/* Yandex Navigator / Direct Route button */}
                <a
                  href={selectedBranch.yandexNaviUrl || selectedBranch.yandexMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-red-500/20 hover:from-amber-500/30 hover:to-red-500/30 border border-amber-400/40 text-xs font-bold text-amber-200 transition-all shadow-xs group"
                >
                  <span className="flex items-center">
                    <Navigation className="w-4 h-4 mr-2 text-amber-400 group-hover:rotate-12 transition-transform" />
                    <span>{t.branches.yandexNaviBtn || 'Yandex Navigator (Marshrut)'}</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-md border border-amber-400/30">
                    {language === 'uz' ? 'Marshrut' : 'Маршрут'}
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={selectedBranch.yandexMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-yellow-400 shrink-0" />
                    <span className="truncate">Yandex Xarita</span>
                  </a>

                  <a
                    href={selectedBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-700/80 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {language === 'uz' ? 'Tezkor onlayn aloqa:' : 'Онлайн связь:'}
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://t.me/logoped_city_admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    Telegram
                  </a>
                  {selectedBranch.instagram && (
                    <a
                      href={selectedBranch.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-fuchsia-500/20 hover:bg-fuchsia-500/30 text-fuchsia-300 text-xs font-medium flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 mr-1.5" />
                      Instagram
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Grid summary of all 4 branches */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              onClick={() => setActiveBranchId(b.id)}
              className="cursor-pointer p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400 transition-all space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-sm text-slate-900">
                  {language === 'uz' ? b.name : (b.nameRu || b.name)}
                </span>
                {b.hasCBO && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-fuchsia-100 text-fuchsia-800">
                    CBO
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">
                {language === 'uz' ? b.landmark : (b.landmarkRu || b.landmark)}
              </p>
              <a
                href={`tel:${b.phoneRaw}`}
                className="text-xs font-bold text-emerald-700 flex items-center"
              >
                <Phone className="w-3 h-3 mr-1" />
                {b.phone}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
