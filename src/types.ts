export type TabType = 'inicio' | 'servicios' | 'auditorias' | 'contacto';

export interface PartnerProfile {
  id: string;
  name: string;
  credentials: string;
  tag: string;
  specialty: string;
  bio: string;
  photoUrl?: string;
  initials: string;
}

export interface ServiceItem {
  id: string;
  category: 'infra' | 'calidad' | 'bioprocesos';
  badge: {
    label: string;
    icon: string;
  };
  standards: {
    left: string;
    right: string;
  };
  title: string;
  description: string;
  scopeTitle: string;
  scopeItems: string[];
  deliverables: string[];
  ctaText: string;
  imageUrl: string;
}

export interface AuditFactor {
  id: number;
  title: string;
  subtitle: string;
  compliant: boolean;
}

export interface AuditModule {
  id: string;
  number: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
  metadata?: {
    duration?: string;
    deliverable?: string;
    alignedStandards?: string;
  };
  imageUrl?: string;
}

export interface ProjectInquiryData {
  institutionType: string;
  fullName: string;
  workEmail: string;
  phone: string;
  projectScope: string;
  specificDetails: string;
  ndaRequested: boolean;
}
