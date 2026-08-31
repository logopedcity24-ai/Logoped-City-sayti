export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  landmark: string;
  phone: string;
  phoneRaw: string;
  instagram?: string;
  telegram?: string;
  mapUrl: string;
  yandexMapUrl: string;
  hasCBO: boolean;
  workHours: string;
  features: string[];
  imagePlaceholderColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'speech' | 'behavior_sensory' | 'motor_life' | 'all';
  categoryName: string;
  shortDesc: string;
  fullDesc: string;
  goals: string[];
  forWhom: string;
  iconName: string;
  highlightTag?: string;
  specialBranchNote?: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
  icon: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  education: string;
  branch: string;
  specialization: string[];
  avatarBg: string;
  gender: 'female' | 'male';
}

export interface Course {
  id: string;
  title: string;
  targetAudience: string;
  duration: string;
  format: string;
  description: string;
  topics: string[];
  certificate: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childAge: string;
  branch: string;
  serviceReceived: string;
  comment: string;
  progressHighlights: string[];
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChildNeedItem {
  id: string;
  title: string;
  description: string;
  category: 'speech' | 'behavior' | 'sensory' | 'motor' | 'daily';
  recommendedServices: string[];
}

export interface ContactFormData {
  parentName: string;
  phone: string;
  childAge: string;
  preferredBranch: string;
  serviceInterest: string;
  comment: string;
}
