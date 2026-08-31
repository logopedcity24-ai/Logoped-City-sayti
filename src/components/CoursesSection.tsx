import React, { useState } from 'react';
import { COURSES } from '../data/mockData';
import { Course } from '../types';
import { GraduationCap, Clock, Award, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';

interface CoursesSectionProps {
  onOpenCourseModal: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenCourseModal }) => {
  return (
    <section id="kurslar" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fuchsia-100 text-fuchsia-900 text-xs sm:text-sm font-semibold">
            <GraduationCap className="w-4 h-4 text-fuchsia-600" />
            <span>Malaka Oshirish va O‘quv Dasturlari</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            PROFESSIONAL O‘QUV KURSLARI
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Bo‘lajak logopedlar, defektologlar, tarbiyachilar hamda ota-onalar uchun amaliyotga asoslangan zamonaviy kurslar.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-fuchsia-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge & Target audience */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {course.format}
                  </span>
                  {course.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Duration & Audience info */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Davomiyligi:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>Kimlar uchun:</strong> {course.targetAudience}</span>
                  </div>
                  {course.certificate && (
                    <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                      <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Rasmiy sertifikat beriladi</span>
                    </div>
                  )}
                </div>

                {/* Topics list */}
                <div className="pt-3">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    O‘rganiladigan asosiy mavzular:
                  </div>
                  <div className="space-y-1.5">
                    {course.topics.slice(0, 3).map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-500 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-4">
                <button
                  onClick={() => onOpenCourseModal(course)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-fuchsia-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Kursga ro‘yxatdan o‘tish</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
