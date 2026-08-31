import React, { useState } from 'react';
import { BRANCHES } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Send, 
  Instagram,
  Navigation
} from 'lucide-react';
import { LogoEmblem } from './Logo';

interface BranchesSectionProps {
  onOpenConsultationModal: (branchId?: string) => void;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ onOpenConsultationModal }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('urganch');

  const selectedBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section id="filiallar" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Xorazm Bo‘ylab 4 Ta Manzil</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            FILIALLARIMIZ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sizga va oilangizga eng qulay bo‘lgan manzilni tanlang. Har bir filialimizda qulaylik va yuqori darajadagi mutaxassislar xizmat ko‘rsatadi.
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 mb-8 max-w-4xl mx-auto">
          {BRANCHES.map(branch => {
            const isActive = branch.id === activeBranchId;
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
                    CBO xonasi
                  </span>
                )}
                <div className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1">
                  {branch.city}
                </div>
                <div className="text-xs text-slate-500 line-clamp-1">
                  {branch.name}
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
                    {selectedBranch.city}
                  </span>
                  {selectedBranch.hasCBO && (
                    <span className="px-3 py-1 rounded-lg bg-fuchsia-100 text-fuchsia-800 text-xs font-bold">
                      ★ Maxsus CBO xonasi bilan jihozlangan
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {selectedBranch.name}
                </h3>
              </div>

              {/* Address details */}
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Manzil:</strong>
                    <span>{selectedBranch.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Mo‘ljal:</strong>
                    <span>{selectedBranch.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Ish vaqti:</strong>
                    <span>{selectedBranch.workHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Telefon raqam:</strong>
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
                  Filial imkoniyatlari:
                </h4>
                <div className="space-y-1.5">
                  {selectedBranch.features.map((feat, fIdx) => (
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
                  Shu filialga yozilish
                </button>

                <a
                  href={`tel:${selectedBranch.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  Qo‘ng‘iroq qilish
                </a>
              </div>
            </div>

            {/* Right: Interactive Maps & Social Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-base text-emerald-400">
                  Xaritada ko‘rish
                </h4>
                <Compass className="w-5 h-5 text-slate-400" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Manzilni o‘zingizga qulay onlayn xaritalar orqali oching va yo‘nalish (marshrut) chizing:
              </p>

              <div className="space-y-2.5">
                <a
                  href={selectedBranch.yandexMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    Yandex Xaritalar
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={selectedBranch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                    Google Maps
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-700/80 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Tezkor onlayn aloqa:
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
                <span className="font-heading font-bold text-sm text-slate-900">{b.name}</span>
                {b.hasCBO && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-fuchsia-100 text-fuchsia-800">
                    CBO
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">{b.landmark}</p>
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
