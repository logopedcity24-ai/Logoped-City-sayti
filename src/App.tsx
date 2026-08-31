import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NeedsAssessment } from './components/NeedsAssessment';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { BranchesSection } from './components/BranchesSection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { CoursesSection } from './components/CoursesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';
import { CourseModal } from './components/CourseModal';
import { Course } from './types';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedBranchForModal, setSelectedBranchForModal] = useState<string>('urganch');
  const [selectedTopicForModal, setSelectedTopicForModal] = useState<string>('Dastlabki baholash');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  const handleOpenConsultationModal = (branchId?: string, topicTitle?: string) => {
    if (branchId) {
      setSelectedBranchForModal(branchId);
    }
    if (topicTitle) {
      setSelectedTopicForModal(topicTitle);
    } else {
      setSelectedTopicForModal('Dastlabki pedagogik baholash');
    }
    setIsConsultationModalOpen(true);
  };

  const handleOpenCourseModal = (course: Course) => {
    setSelectedCourseForModal(course);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Navigation Header */}
      <Header onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* 1. Needs & Symptoms Assessment */}
        <NeedsAssessment onOpenConsultationModal={handleOpenConsultationModal} />

        {/* 2. Comprehensive Services (9 Services) */}
        <ServicesSection onOpenConsultationModal={handleOpenConsultationModal} />

        {/* 3. 4-Stage Methodology */}
        <MethodologySection onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* 4. Branches with interactive Tab & Maps */}
        <BranchesSection onOpenConsultationModal={handleOpenConsultationModal} />

        {/* 5. Specialists */}
        <SpecialistsSection onOpenConsultationModal={handleOpenConsultationModal} />

        {/* 6. Professional Training Courses */}
        <CoursesSection onOpenCourseModal={handleOpenCourseModal} />

        {/* 7. Parent Reviews & Testimonials */}
        <ReviewsSection />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 9. Contact & Lead Generation Form */}
        <ContactFormSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenConsultationModal={() => handleOpenConsultationModal()} />

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultBranch={selectedBranchForModal}
        defaultTopic={selectedTopicForModal}
      />

      <CourseModal
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
      />
    </div>
  );
}
