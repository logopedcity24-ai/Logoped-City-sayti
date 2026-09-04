import React, { useState, useEffect } from 'react';
import { CERTIFICATES, SPECIALISTS } from '../data/mockData';
import { CertificateItem } from '../types';
import { Award, GraduationCap, ZoomIn, X, CheckCircle2, ShieldCheck, Building2, Calendar, FileText, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface CertificatesSectionProps {
  onOpenConsultationModal: (branch?: string, specialist?: string) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const certTranslations = t.certificates || {
    badge: 'Rasmiy Malaka va Diplomlar',
    title: 'PEDAGOGLARIMIZ DIPLOM VA SERTIFIKATLARI',
    subtitle: 'Mutaxassislarimizning davlat oliy ma’lumot diplomlari, xalqaro va respublika miqyosidagi sertifikatlari bilan tanishing.',
    allSpecialists: 'Barcha hujjatlar',
    stateDiplomaBadge: 'Davlat Diplomi',
    qualificationBadge: 'Malaka Sertifikati',
    issuedBy: 'Beruvchi muassasa:',
    specialistLabel: 'Pedagog:',
    dateLabel: 'Sana / Joy:',
    viewFullBtn: 'Kattalashtirib ko‘rish',
    closeModal: 'Yopish',
    verifiedSpecialist: 'Tasdiqlangan mutaxassis',
    countLabel: 'ta rasmiy hujjat'
  };

  const [selectedSpecialistId, setSelectedSpecialistId] = useState<string>('all');
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  // Listen for custom event from Specialists section
  useEffect(() => {
    const handleFilterEvent = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedSpecialistId(customEvent.detail);
        const sectionEl = document.getElementById('sertifikatlar');
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('filter-certificates', handleFilterEvent);
    return () => window.removeEventListener('filter-certificates', handleFilterEvent);
  }, []);

  // Keyboard escape for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalCert) {
        setActiveModalCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalCert]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (activeModalCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalCert]);

  // Unique specialists who have certificates
  const specialistsWithCerts = Array.from(
    new Set(CERTIFICATES.map(c => c.specialistId))
  ).map(id => {
    const spec = SPECIALISTS.find(s => s.id === id);
    const count = CERTIFICATES.filter(c => c.specialistId === id).length;
    const certSample = CERTIFICATES.find(c => c.specialistId === id);
    return {
      id,
      name: spec ? spec.name : (certSample?.specialistName || id),
      nameRu: spec ? (spec.nameRu || spec.name) : (certSample?.specialistNameRu || certSample?.specialistName || id),
      role: spec ? spec.role : (certSample?.specialistRole || ''),
      roleRu: spec ? (spec.roleRu || spec.role) : (certSample?.specialistRoleRu || certSample?.specialistRole || ''),
      count,
      avatarBg: spec?.avatarBg || 'bg-emerald-100 text-emerald-800',
      hasDiploma: CERTIFICATES.some(c => c.specialistId === id && c.type === 'diploma')
    };
  });

  const filteredCertificates = selectedSpecialistId === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.specialistId === selectedSpecialistId);

  return (
    <section id="sertifikatlar" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs sm:text-sm font-semibold border border-teal-200/60">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>{certTranslations.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {certTranslations.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {certTranslations.subtitle}
          </p>
        </div>

        {/* Teacher Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
          <button
            onClick={() => setSelectedSpecialistId('all')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center space-x-2 ${
              selectedSpecialistId === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>{certTranslations.allSpecialists}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              selectedSpecialistId === 'all' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {CERTIFICATES.length}
            </span>
          </button>

          {specialistsWithCerts.map((spec) => {
            const isSelected = selectedSpecialistId === spec.id;
            const displayName = language === 'uz' ? spec.name : (spec.nameRu || spec.name);

            return (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialistId(spec.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isSelected ? 'bg-white/20 text-white' : spec.avatarBg
                }`}>
                  {displayName.charAt(0)}
                </div>
                <span className="truncate max-w-[180px] sm:max-w-none">{displayName}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isSelected ? 'bg-emerald-800 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                }`}>
                  {spec.count} ta
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {filteredCertificates.map((cert) => {
            const title = language === 'uz' ? cert.title : (cert.titleRu || cert.title);
            const specialistName = language === 'uz' ? cert.specialistName : (cert.specialistNameRu || cert.specialistName);
            const specialistRole = language === 'uz' ? cert.specialistRole : (cert.specialistRoleRu || cert.specialistRole);
            const issuer = language === 'uz' ? cert.issuer : (cert.issuerRu || cert.issuer);
            const description = language === 'uz' ? cert.description : (cert.descriptionRu || cert.description);
            const badge = language === 'uz' ? cert.badge : (cert.badgeRu || cert.badge);

            const isDiploma = cert.type === 'diploma';

            return (
              <div
                key={cert.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-400 p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Specialist Details & Type Badge */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                        {specialistName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h4 className="font-heading font-bold text-sm text-slate-900 leading-tight">
                            {specialistName}
                          </h4>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" title={certTranslations.verifiedSpecialist} />
                        </div>
                        <p className="text-[11px] font-semibold text-emerald-700 mt-0.5">
                          {specialistRole}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isDiploma ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200/80 text-[11px] font-bold">
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{certTranslations.stateDiplomaBadge}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 text-[11px] font-bold">
                          <Award className="w-3.5 h-3.5 text-amber-600" />
                          <span>{badge || certTranslations.qualificationBadge}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate Document Preview */}
                  <div
                    onClick={() => setActiveModalCert(cert)}
                    className="relative w-full h-64 sm:h-72 bg-slate-950/5 rounded-2xl overflow-hidden border border-slate-200 cursor-pointer group-hover:border-emerald-400/80 transition-all flex items-center justify-center shadow-inner"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={title}
                      className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <div className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4 text-emerald-600" />
                        <span>{certTranslations.viewFullBtn}</span>
                      </div>
                    </div>

                    {/* Corner Tag */}
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-medium backdrop-blur-xs shadow-xs">
                        {isDiploma ? 'Oliy Ma’lumot' : 'Sertifikat'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer Info */}
                  <div className="space-y-2 pt-1">
                    <h3 className="font-heading font-extrabold text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition-colors">
                      {title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start space-x-2">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-800">{issuer}</span>
                      </div>
                      {cert.issueDate && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{cert.issueDate}</span>
                        </div>
                      )}
                    </div>

                    {description && (
                      <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 mt-2">
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <ZoomIn className="w-4 h-4 text-emerald-600" />
                    <span>{certTranslations.viewFullBtn}</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultationModal(undefined, specialistName)}
                    className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-xs"
                    title={t.specialists.bookSpecBtn}
                  >
                    <User className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Certificate Modal (Lightbox) */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 text-white">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-sm shrink-0">
                  {activeModalCert.type === 'diploma' ? <GraduationCap className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </div>
                <div className="truncate">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white truncate">
                    {language === 'uz' ? activeModalCert.title : (activeModalCert.titleRu || activeModalCert.title)}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {language === 'uz' ? activeModalCert.specialistName : (activeModalCert.specialistNameRu || activeModalCert.specialistName)} • {language === 'uz' ? activeModalCert.specialistRole : (activeModalCert.specialistRoleRu || activeModalCert.specialistRole)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <a
                  href={activeModalCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition-colors hidden sm:inline-flex items-center space-x-1"
                >
                  <FileText className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  <span>Asl o‘lchamda ochish</span>
                </a>
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Document Image Preview */}
            <div className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-auto flex items-center justify-center min-h-[300px]">
              <img
                src={activeModalCert.imageUrl}
                alt={activeModalCert.title}
                className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="px-5 py-4 bg-slate-900/95 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold text-white">
                    {language === 'uz' ? activeModalCert.issuer : (activeModalCert.issuerRu || activeModalCert.issuer)}
                  </span>
                  {activeModalCert.issueDate && (
                    <span className="text-slate-400">({activeModalCert.issueDate})</span>
                  )}
                </div>
                {activeModalCert.description && (
                  <p className="text-[11px] text-slate-400 max-w-2xl leading-relaxed">
                    {language === 'uz' ? activeModalCert.description : (activeModalCert.descriptionRu || activeModalCert.description)}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    const specName = language === 'uz' ? activeModalCert.specialistName : (activeModalCert.specialistNameRu || activeModalCert.specialistName);
                    setActiveModalCert(null);
                    onOpenConsultationModal(undefined, specName);
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center space-x-1.5"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{t.specialists.bookSpecBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
