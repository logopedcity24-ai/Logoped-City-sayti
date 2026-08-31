import React, { useState } from 'react';
import { BRANCHES, SERVICES } from '../data/mockData';
import { ContactFormData } from '../types';
import { Send, Phone, User, Calendar, MapPin, Sparkles, CheckCircle2, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Logo, LogoEmblem } from './Logo';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    phone: '',
    childAge: '',
    preferredBranch: 'urganch',
    serviceInterest: 'Logopediya',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) {
      return;
    }
    setIsSubmitting(true);

    // Simulate reliable immediate local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const selectedBranchData = BRANCHES.find(b => b.id === formData.preferredBranch) || BRANCHES[0];

  return (
    <section id="boglanish" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/40 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Support Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-md inline-flex items-center space-x-3">
              <Logo variant="horizontal" size="md" showSubtitle={true} />
            </div>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Bepul Boshlang‘ich Maslahat</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              KONSULTATSIYAGA RO‘YXATDAN O‘TING
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Murojaat qoldiring — mutaxassislarimiz siz bilan tezda bog‘lanib, bolangiz uchun eng qulay filial va diagnostika vaqtini kelishib oladilar.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Bosh markaz aloqa telefoni:</div>
                  <a
                    href="tel:+998992210006"
                    className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    +998 (99) 221-00-06
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Tezkor Telegram admin:</div>
                  <a
                    href="https://t.me/logoped_city_admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-sky-700 hover:underline"
                  >
                    @logoped_city_admin
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy & Guarantee guarantee */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 flex items-start space-x-3 text-xs text-emerald-950">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                Kiritilgan barcha shaxsiy ma’lumotlar to‘liq maxfiy saqlanadi va faqat siz bilan bog‘lanish maqsadida ishlatiladi.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form or Success Banner */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 relative">
              
              {submitted ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                      Rahmat, {formData.parentName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Sizning murojaatingiz muvaffaqiyatli qabul qilindi. <strong>{selectedBranchData.name}</strong> bo‘yicha mas’ul mutaxassisimiz tez orada <strong>{formData.phone}</strong> raqamingizga qo‘ng‘iroq qiladi.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
                    <div><strong>Tanlangan filial:</strong> {selectedBranchData.name} ({selectedBranchData.landmark})</div>
                    <div><strong>Qiziqtirgan yo‘nalish:</strong> {formData.serviceInterest}</div>
                    {formData.childAge && <div><strong>Bolaning yoshi:</strong> {formData.childAge}</div>}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${selectedBranchData.phoneRaw}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>To‘g‘ridan-to‘g‘ri qo‘ng‘iroq qilish</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          parentName: '',
                          phone: '',
                          childAge: '',
                          preferredBranch: 'urganch',
                          serviceInterest: 'Logopediya',
                          comment: '',
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                    >
                      Yangi murojaat qoldirish
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900">
                      Murojaat formasini to‘ldiring
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Barcha maydonlarni to‘ldirib, tugmani bosing
                    </p>
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Ota-onaning ismi-familiyasi <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Malika Karimova"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Child Age in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Telefon raqamingiz <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+998 90 123 45 67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Bolaning yoshi
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Masalan: 3.5 yosh"
                          value={formData.childAge}
                          onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Branch Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Sizga ma’qul filial <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.preferredBranch}
                        onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none"
                      >
                        {BRANCHES.map(b => (
                          <option key={b.id} value={b.id}>
                            {b.name} ({b.landmark}) {b.hasCBO ? '— CBO Xonasi bilan' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                    {formData.preferredBranch === 'qoshkopir' && (
                      <p className="text-[11px] font-semibold text-fuchsia-800 mt-1">
                        ★ Qo‘shko‘pir filialida maxsus CBO (kundalik hayot ko‘nikmalari) xonasi mavjud.
                      </p>
                    )}
                  </div>

                  {/* Interested Service */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Qiziqtirgan yo‘nalish
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.categoryName})
                        </option>
                      ))}
                      <option value="Dastlabki kompleks diagnostika">Dastlabki kompleks diagnostika (barchasi)</option>
                    </select>
                  </div>

                  {/* Comment / Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Qisqa izoh yoki bolangizdagi holat (ixtiyoriy)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Bolangizdagi holat yoki sizni qiziqtirgan savollar haqida qisqacha yozishingiz mumkin..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base tracking-wide uppercase shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Phone className="w-5 h-5" />
                        <span>MENGA QO‘NG‘IROQ QILING</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
