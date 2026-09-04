export interface Branch {
  id: string;
  name: string;
  nameRu?: string;
  city: string;
  cityRu?: string;
  address: string;
  addressRu?: string;
  landmark: string;
  landmarkRu?: string;
  phone: string;
  phoneRaw: string;
  instagram?: string;
  telegram?: string;
  mapUrl: string;
  yandexMapUrl: string;
  yandexNaviUrl?: string;
  coords?: { lat: number; lng: number };
  hasCBO: boolean;
  workHours: string;
  workHoursRu?: string;
  features: string[];
  featuresRu?: string[];
  imagePlaceholderColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleRu?: string;
  category: 'speech' | 'behavior_sensory' | 'motor_life' | 'all';
  categoryName: string;
  categoryNameRu?: string;
  shortDesc: string;
  shortDescRu?: string;
  fullDesc: string;
  fullDescRu?: string;
  goals: string[];
  goalsRu?: string[];
  forWhom: string;
  forWhomRu?: string;
  iconName: string;
  highlightTag?: string;
  highlightTagRu?: string;
  specialBranchNote?: string;
  specialBranchNoteRu?: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  titleRu?: string;
  description: string;
  descriptionRu?: string;
  duration: string;
  durationRu?: string;
  details: string[];
  detailsRu?: string[];
  icon: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  roleRu?: string;
  experience: string;
  experienceRu?: string;
  education: string;
  educationRu?: string;
  branch: string;
  branchRu?: string;
  specialization: string[];
  specializationRu?: string[];
  avatarBg: string;
  gender: 'female' | 'male';
  photoUrl?: string;
  certificateCount?: number;
}

export interface CertificateItem {
  id: string;
  specialistId: string;
  specialistName: string;
  specialistNameRu?: string;
  specialistRole: string;
  specialistRoleRu?: string;
  title: string;
  titleRu?: string;
  type: 'diploma' | 'certificate';
  issuer: string;
  issuerRu?: string;
  issueDate?: string;
  imageUrl: string;
  description?: string;
  descriptionRu?: string;
  badge?: string;
  badgeRu?: string;
}

export interface Course {
  id: string;
  title: string;
  titleRu?: string;
  targetAudience: string;
  targetAudienceRu?: string;
  duration: string;
  durationRu?: string;
  format: string;
  formatRu?: string;
  description: string;
  descriptionRu?: string;
  topics: string[];
  topicsRu?: string[];
  certificate: boolean;
  badge?: string;
  badgeRu?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childAge: string;
  branch: string;
  serviceReceived: string;
  serviceReceivedRu?: string;
  comment: string;
  commentRu?: string;
  progressHighlights: string[];
  progressHighlightsRu?: string[];
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionRu?: string;
  answer: string;
  answerRu?: string;
  category: string;
  categoryRu?: string;
}

export interface ChildNeedItem {
  id: string;
  title: string;
  titleRu?: string;
  description: string;
  descriptionRu?: string;
  category: 'speech' | 'behavior' | 'sensory' | 'motor' | 'daily';
  recommendedServices: string[];
  recommendedServicesRu?: string[];
}

export interface ContactFormData {
  parentName: string;
  phone: string;
  childAge: string;
  preferredBranch: string;
  serviceInterest: string;
  comment: string;
}

export interface TariffPlan {
  id: string;
  name: string;
  nameRu?: string;
  badge?: string;
  badgeRu?: string;
  schedule: string;
  scheduleRu?: string;
  lessonsSummary: string;
  lessonsSummaryRu?: string;
  price: string;
  priceNumeric: number;
  period: string;
  periodRu?: string;
  subtitle?: string;
  subtitleRu?: string;
  features: string[];
  featuresRu?: string[];
  excludedNote?: string;
  excludedNoteRu?: string;
  colorTheme: 'green' | 'blue' | 'purple';
  isPopular?: boolean;
  isPremium?: boolean;
}

