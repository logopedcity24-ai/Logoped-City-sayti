import React, { useState } from 'react';
import { BRANCHES, SERVICES } from '../data/mockData';
import { X, Phone, User, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { LogoEmblem } from './Logo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranch?: string;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultBranch = 'urganch',
  defaultTopic = 'Dastlabki baholash',
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('');
  const [branch, setBranch] = useState(defaultBranch);
  const [topic, setTopic] = useState(defaultTopic);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setParentName('');
    setPhone('');
    setChildAge('');
    onClose();
  };

  const selectedBranchData = BRANCHES.find(b => b.id === branch) || BRANCHES[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              Qabulingiz Yozib Olindi!
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Rahmat, <strong>{parentName}</strong>! <strong>{selectedBranchData.name}</strong> mutaxassisimiz tez orada <strong>{phone}</strong> raqamingiz orqali siz bilan bog‘lanadi.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${selectedBranchData.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>To‘g‘ridan-to‘g‘ri qo‘ng‘iroq qilish</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold"
              >
                Oynani yopish
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-8 flex items-start space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 p-0.5 overflow-hidden">
                <LogoEmblem className="w-full h-full rounded-xl" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold mb-0.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Tezkor ro‘yxatdan o‘tish</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 leading-tight">
                  Konsultatsiyaga Yozilish
                </h3>
                <p className="text-xs text-slate-500">
                  Ma’lumotlaringizni qoldiring, mutaxassisimiz tezda bog‘lanadi
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ism va familiyangiz <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Ismingiz"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Telefon raqam <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Bolaning yoshi
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Masalan: 3 yosh"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Filialni tanlang
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                >
                  {BRANCHES.map(b => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.landmark}) {b.hasCBO ? '★ CBO Xonasi bilan' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Yo‘nalish / Mavzu
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <span>Murojaatni yuborish</span>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
