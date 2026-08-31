import React, { useState } from 'react';
import { Course } from '../types';
import { X, GraduationCap, Clock, Award, CheckCircle2, User, Phone } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              Arizangiz Qabul Qilindi!
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Rahmat, <strong>{name}</strong>! Siz <strong>"{course.title}"</strong> kursiga muvaffaqiyatli ro‘yxatdan o‘tdingiz. Tez orada o‘quv bo‘limi koordinatori siz bilan bog‘lanadi.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-fuchsia-700 text-white text-xs font-bold transition-colors"
            >
              Tushunarli
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-8">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-800 text-[11px] font-semibold mb-1">
                <GraduationCap className="w-3 h-3 text-fuchsia-600" />
                <span>O‘quv kursi ro‘yxati</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                {course.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Davomiyligi: {course.duration} | {course.format}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 space-y-1">
              <div className="font-semibold text-slate-900">Kimlar uchun:</div>
              <div>{course.targetAudience}</div>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-fuchsia-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Telefon raqamingiz <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-fuchsia-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mutaxassislik yoki faoliyat yo‘nalishingiz (ixtiyoriy)
              </label>
              <input
                type="text"
                placeholder="Masalan: Logopediya talabasi, tarbiyachi, ota-ona"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-fuchsia-500 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold text-sm shadow-md shadow-fuchsia-600/20 transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <span>Ro‘yxatdan o‘tishni tasdiqlash</span>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
