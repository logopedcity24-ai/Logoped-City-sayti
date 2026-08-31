import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { MessageSquareQuote, CheckCircle, Heart, Star, MapPin } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200/60">
            <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>Ota-onalar Ishonchi va Rivojlanish Dinamikasi</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            OTA-ONALARNING FIKRLARI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Bizning eng katta yutug‘imiz — bolalarning ko‘zidagi quvonch, ota-onalarning xotirjamligi va erishilgan har bir yangi ko‘nikmadir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                      {test.parentName}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 mt-0.5">
                      <span>Bola yoshi: {test.childAge}</span>
                      <span>•</span>
                      <span className="flex items-center text-emerald-700 font-medium">
                        <MapPin className="w-3 h-3 mr-0.5" />
                        {test.branch}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Service tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-3">
                  Qatnagan yo‘nalishi: {test.serviceReceived}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{test.comment}"
                </p>
              </div>

              {/* Progress highlights */}
              <div className="pt-4 border-t border-slate-200/60">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Kuzatilgan ijobiy o‘zgarishlar:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {test.progressHighlights.map((prog, pIdx) => (
                    <span
                      key={pIdx}
                      className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-lg bg-emerald-100/70 text-emerald-900"
                    >
                      <CheckCircle className="w-3 h-3 mr-1 text-emerald-600" />
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
