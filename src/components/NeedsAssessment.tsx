import React, { useState } from 'react';
import { CHILD_NEEDS } from '../data/mockData';
import { QUIZ_QUESTIONS, TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { 
  HelpCircle, 
  Check, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  ListChecks,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface NeedsAssessmentProps {
  onOpenConsultationModal: (branch?: string, prefillService?: string) => void;
}

export const NeedsAssessment: React.FC<NeedsAssessmentProps> = ({ onOpenConsultationModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Tab mode: 'quiz' or 'catalog'
  const [activeTab, setActiveTab] = useState<'quiz' | 'catalog'>('quiz');

  // Quiz State
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { optionId: string; score: number }>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Catalog State
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', labelUz: 'Barcha holatlar', labelRu: 'Все состояния' },
    { id: 'speech', labelUz: 'Nutq va Talaffuz', labelRu: 'Речь и произношение' },
    { id: 'behavior', labelUz: 'Muloqot va Xulq', labelRu: 'Общение и поведение' },
    { id: 'sensory', labelUz: 'Sensor Sezgirlik', labelRu: 'Сенсорная чувствительность' },
    { id: 'daily', labelUz: 'Kundalik Ko‘nikmalar', labelRu: 'Бытовые навыки' },
  ];

  const filteredNeeds = activeCategoryFilter === 'all'
    ? CHILD_NEEDS
    : CHILD_NEEDS.filter(item => item.category === activeCategoryFilter);

  const toggleNeed = (id: string) => {
    setSelectedNeeds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectOption = (questionId: string, optionId: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { optionId, score }
    }));
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsQuizCompleted(false);
  };

  // Calculate Quiz Score & Results
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);

  let resultType: 'high' | 'moderate' | 'low' = 'low';
  if (totalScore >= 5) {
    resultType = 'high';
  } else if (totalScore >= 2) {
    resultType = 'moderate';
  }

  // Recommended Services for Quiz Result
  const getQuizRecommendedServices = () => {
    if (resultType === 'high') {
      return ['Logopediya', 'Defektologiya', 'ABA terapiya', 'Sensor integratsiya'];
    }
    if (resultType === 'moderate') {
      return ['Logopediya', 'Sensor integratsiya', 'Logoritmika'];
    }
    return ['Dastlabki pedagogik baholash', 'Logoritmika', 'Art-terapiya'];
  };

  // Recommended services from catalog
  const catalogRecommendedServices = Array.from(
    new Set(
      CHILD_NEEDS.filter(item => selectedNeeds.includes(item.id))
        .flatMap(item => item.recommendedServices)
    )
  );

  return (
    <section id="nutq-testi" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-100">
      <div id="holatlar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{t.quiz.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
            {t.quiz.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 border border-slate-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-emerald-800 shadow-md ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{language === 'uz' ? 'Interaktiv Test (4 savol)' : 'Интерактивный тест (4 вопроса)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'catalog'
                  ? 'bg-white text-emerald-800 shadow-md ring-1 ring-black/5'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListChecks className="w-4 h-4 text-emerald-600" />
              <span>{language === 'uz' ? 'Belgilar Ro‘yxati (Katalog)' : 'Список признаков (Каталог)'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            {!isQuizCompleted ? (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                    <span className="uppercase tracking-wider">
                      {t.quiz.stepOf} {currentStep + 1} / {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="text-emerald-700 font-extrabold">
                      {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Current Question */}
                {(() => {
                  const currentQ = QUIZ_QUESTIONS[currentStep];
                  const currentAnswer = answers[currentQ.id];

                  return (
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-1">
                        {language === 'uz' ? currentQ.questionUz : currentQ.questionRu}
                      </h3>
                      {currentQ.subtitleUz && (
                        <p className="text-xs sm:text-sm text-slate-500 mb-6">
                          {language === 'uz' ? currentQ.subtitleUz : currentQ.subtitleRu}
                        </p>
                      )}

                      {/* Options */}
                      <div className="space-y-3">
                        {currentQ.options.map((opt) => {
                          const isSelected = currentAnswer?.optionId === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectOption(currentQ.id, opt.id, opt.score)}
                              className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'bg-emerald-50/70 border-emerald-600 text-slate-900 shadow-md ring-2 ring-emerald-600/20'
                                  : 'bg-slate-50/50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                              }`}
                            >
                              <span className="text-sm sm:text-base font-semibold pr-4">
                                {language === 'uz' ? opt.textUz : opt.textRu}
                              </span>
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'border-emerald-600 bg-emerald-600 text-white'
                                    : 'border-slate-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                        <button
                          onClick={handlePrev}
                          disabled={currentStep === 0}
                          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                            currentStep === 0
                              ? 'text-slate-300 cursor-not-allowed'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>{t.quiz.prevBtn}</span>
                        </button>

                        <button
                          onClick={handleNext}
                          disabled={!currentAnswer}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                            currentAnswer
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25 hover:-translate-y-0.5'
                              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                          }`}
                        >
                          <span>
                            {currentStep === QUIZ_QUESTIONS.length - 1
                              ? (language === 'uz' ? 'Natijani ko‘rish' : 'Посмотреть результат')
                              : t.quiz.nextBtn}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              /* QUIZ RESULT CARD */
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-200 shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 rounded-2xl bg-emerald-100 text-emerald-700 mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                    {t.quiz.resultTitle}
                  </h3>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    {resultType === 'high' ? t.quiz.resultHigh : resultType === 'moderate' ? t.quiz.resultModerate : t.quiz.resultLow}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {resultType === 'high' ? t.quiz.resultHighDesc : resultType === 'moderate' ? t.quiz.resultModerateDesc : t.quiz.resultLowDesc}
                  </p>
                </div>

                {/* Recommended Services based on test */}
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {language === 'uz' ? 'Tavsiya etiladigan xizmatlar:' : 'Рекомендуемые услуги:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getQuizRecommendedServices().map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-200"
                      >
                        ✓ {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenConsultationModal(undefined, getQuizRecommendedServices().join(', '))}
                    className="grow flex items-center justify-center py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>{t.quiz.enrollConsultationBtn}</span>
                  </button>
                  <button
                    onClick={handleRestartQuiz}
                    className="flex items-center justify-center px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 mr-1.5" />
                    <span>{t.quiz.restart}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SYMPTOM CATALOG */}
        {activeTab === 'catalog' && (
          <div>
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategoryFilter === cat.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {language === 'uz' ? cat.labelUz : cat.labelRu}
                </button>
              ))}
            </div>

            {/* Needs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNeeds.map((need) => {
                const isSelected = selectedNeeds.includes(need.id);
                return (
                  <div
                    key={need.id}
                    onClick={() => toggleNeed(need.id)}
                    className={`cursor-pointer rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-50/70 border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                        : 'bg-white hover:bg-slate-50/80 border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-heading font-bold text-slate-900 text-base">
                          {language === 'uz' ? need.title : (need.titleRu || need.title)}
                        </h3>
                        <div
                          className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {language === 'uz' ? need.description : (need.descriptionRu || need.description)}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {language === 'uz' ? 'Tavsiya etiladigan xizmatlar:' : 'Рекомендуемые услуги:'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {(language === 'uz' ? need.recommendedServices : (need.recommendedServicesRu || need.recommendedServices)).map((srv, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-100/60 text-emerald-800"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating / Sticky Bar for Selected Needs */}
            {selectedNeeds.length > 0 && (
              <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                <div className="space-y-1 text-center md:text-left">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {selectedNeeds.length} {language === 'uz' ? 'ta holat belgilandi' : 'состояний выбрано'}
                  </div>
                  <div className="text-sm font-semibold">
                    {language === 'uz' ? 'Tavsiya etiladigan yo‘nalishlar:' : 'Рекомендуемые направления:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {catalogRecommendedServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    onClick={() => setSelectedNeeds([])}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    {language === 'uz' ? 'Tozalash' : 'Сбросить'}
                  </button>
                  <button
                    onClick={() => onOpenConsultationModal(undefined, catalogRecommendedServices.join(', '))}
                    className="grow md:grow-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    {language === 'uz' ? 'Mutaxassis bilan maslahatlashish' : 'Проконсультироваться со специалистом'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
