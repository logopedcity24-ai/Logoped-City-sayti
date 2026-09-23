import React, { useState, useEffect } from 'react';
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
  Navigation,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Image as ImageIcon
} from 'lucide-react';

interface BranchesSectionProps {
  onOpenConsultationModal: (branchId?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('urganch');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const selectedBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  const branchName = language === 'uz' ? selectedBranch.name : (selectedBranch.nameRu || selectedBranch.name);
  const branchCity = language === 'uz' ? selectedBranch.city : (selectedBranch.cityRu || selectedBranch.city);
  const branchAddress = language === 'uz' ? selectedBranch.address : (selectedBranch.addressRu || selectedBranch.address);
  const branchLandmark = language === 'uz' ? selectedBranch.landmark : (selectedBranch.landmarkRu || selectedBranch.landmark);
  const branchWorkHours = language === 'uz' ? selectedBranch.workHours : (selectedBranch.workHoursRu || selectedBranch.workHours);
  const branchFeatures = (language === 'uz' ? selectedBranch.features : (selectedBranch.featuresRu || selectedBranch.features)) || [];

  const branchPhotos = selectedBranch.images && selectedBranch.images.length > 0 
    ? selectedBranch.images 
    : (selectedBranch.imageUrl ? [selectedBranch.imageUrl] : []);

  // Reset active photo index when active branch changes
  const handleSelectBranch = (branchId: string) => {
    setActiveBranchId(branchId);
    setActivePhotoIndex(0);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex(prev => (prev === 0 ? branchPhotos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex(prev => (prev === branchPhotos.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? branchPhotos.length - 1 : prev - 1));
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === branchPhotos.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev === 0 ? branchPhotos.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev === branchPhotos.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, branchPhotos.length]);

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
                onClick={() => handleSelectBranch(branch.id)}
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
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {branchCity}
                </span>
                {selectedBranch.hasCBO && (
                  <span className="px-3 py-1 rounded-lg bg-fuchsia-100 text-fuchsia-800 text-xs font-bold">
                    ★ {language === 'uz' ? 'Maxsus CBO xonasi bilan jihozlangan' : 'Оснащен специальной комнатой СБО'}
                  </span>
                )}
                <span className="inline-flex items-center text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  <Camera className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  {branchPhotos.length} {t.branches.allPhotosCount || 'ta rasm'}
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                {branchName}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenConsultationModal(selectedBranch.id)}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all"
              >
                {t.branches.bookBranchBtn}
              </button>
              <a
                href={`tel:${selectedBranch.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                {t.branches.callBranchBtn}
              </a>
            </div>
          </div>

          {/* Interactive Photo Gallery Showcase */}
          {branchPhotos.length > 0 && (
            <div className="mb-8 bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                    {t.branches.galleryTitle || 'Filial sur’atlari va jihozlanishi'}
                  </span>
                </div>
                <button
                  onClick={() => openLightbox(activePhotoIndex)}
                  className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-white hover:bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors shadow-2xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 mr-1.5" />
                  {t.branches.viewPhotoBtn || 'Kattalashtirish'}
                </button>
              </div>

              {/* Main Featured Photo Box */}
              <div 
                className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-900 shadow-md group cursor-pointer"
                onClick={() => openLightbox(activePhotoIndex)}
              >
                <img
                  src={branchPhotos[activePhotoIndex]}
                  alt={`${branchName} - ${activePhotoIndex + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Photo Badge overlay */}
                <div className="absolute bottom-3.5 left-4 flex items-center gap-2 text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-emerald-400" />
                    {activePhotoIndex + 1} / {branchPhotos.length}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white/90 drop-shadow-md hidden sm:inline">
                    {branchName}
                  </span>
                </div>

                {/* Click to expand hover hint */}
                <div className="absolute top-3.5 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  {language === 'uz' ? 'To‘liq ochish' : 'Во весь экран'}
                </div>

                {/* Prev / Next controls on main photo */}
                {branchPhotos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      aria-label="Oldingi rasm"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 opacity-80 hover:opacity-100 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      aria-label="Keyingi rasm"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 opacity-80 hover:opacity-100 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails row */}
              {branchPhotos.length > 1 && (
                <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-thin">
                  {branchPhotos.map((photo, pIdx) => {
                    const isSelected = pIdx === activePhotoIndex;
                    return (
                      <button
                        key={pIdx}
                        onClick={() => setActivePhotoIndex(pIdx)}
                        className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-18 rounded-xl overflow-hidden border-2 transition-all ${
                          isSelected
                            ? 'border-emerald-600 ring-2 ring-emerald-500/30 scale-102 shadow-sm'
                            : 'border-white/80 opacity-70 hover:opacity-100 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={photo}
                          alt={`${branchName} thumbnail ${pIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-emerald-600/10" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Details & Map Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Branch Info */}
            <div className="md:col-span-7 space-y-6">
              
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {branchFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
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
                    <span className="truncate">{t.branches.yandexMapBtn || 'Yandex Xarita'}</span>
                  </a>

                  <a
                    href={selectedBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{t.branches.googleMapBtn || 'Google Maps'}</span>
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

        {/* Grid summary of all 4 branches with real photo previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {BRANCHES.map((b) => {
            const isCardActive = b.id === activeBranchId;
            const bThumbnail = b.imageUrl || (b.images && b.images[0]) || '';
            const bName = language === 'uz' ? b.name : (b.nameRu || b.name);
            const bLandmark = language === 'uz' ? b.landmark : (b.landmarkRu || b.landmark);

            return (
              <div
                key={b.id}
                onClick={() => {
                  handleSelectBranch(b.id);
                  // Smoothly scroll up slightly to active branch card
                  const el = document.getElementById('filiallar');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`cursor-pointer rounded-2xl bg-white border transition-all overflow-hidden flex flex-col justify-between group shadow-xs ${
                  isCardActive 
                    ? 'border-emerald-500 ring-2 ring-emerald-500/30 shadow-md' 
                    : 'border-slate-200/90 hover:border-emerald-400 hover:shadow-md'
                }`}
              >
                {/* Photo Thumbnail */}
                {bThumbnail ? (
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={bThumbnail}
                      alt={bName}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* City Tag on image */}
                    <div className="absolute bottom-2.5 left-3 text-white">
                      <span className="text-xs font-bold drop-shadow-md">
                        {language === 'uz' ? b.city : (b.cityRu || b.city)}
                      </span>
                    </div>

                    {b.hasCBO && (
                      <span className="absolute top-2.5 right-2.5 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-fuchsia-600 text-white shadow-xs">
                        CBO
                      </span>
                    )}

                    {isCardActive && (
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                        ✓ {language === 'uz' ? 'Tanlangan' : 'Выбран'}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className={`h-24 w-full bg-gradient-to-r ${b.imagePlaceholderColor}`} />
                )}

                {/* Branch Info Body */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {bName}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {bLandmark}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a
                      href={`tel:${b.phoneRaw}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-bold text-emerald-700 hover:underline flex items-center"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      {b.phone}
                    </a>

                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                      {language === 'uz' ? 'Batafsil →' : 'Подробнее →'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxOpen && branchPhotos.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div 
            className="w-full max-w-5xl flex items-center justify-between text-white py-3 px-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-sm sm:text-base">{branchName}</span>
              <span className="text-xs text-white/60">
                ({lightboxIndex + 1} / {branchPhotos.length})
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Yopish"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Large Image Container */}
          <div 
            className="relative max-w-5xl w-full flex-1 flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={branchPhotos[lightboxIndex]}
              alt={`${branchName} - ${lightboxIndex + 1}`}
              className="max-h-[75vh] sm:max-h-[82vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            {/* Prev/Next buttons in modal */}
            {branchPhotos.length > 1 && (
              <>
                <button
                  onClick={handleLightboxPrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg"
                  aria-label="Oldingi"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleLightboxNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all shadow-lg"
                  aria-label="Keyingi"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails */}
          {branchPhotos.length > 1 && (
            <div 
              className="w-full max-w-xl flex justify-center gap-2 py-3 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {branchPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-14 h-12 sm:w-18 sm:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    idx === lightboxIndex 
                      ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105' 
                      : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

    </section>
  );
};
