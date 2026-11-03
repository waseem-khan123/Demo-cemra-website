export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'quality',
    title: 'Quality Security Products',
    description: 'We supply 100% genuine, certified surveillance cameras and NVRs from industry-leading global brands with official warranty coverage.',
    iconName: 'ShieldCheck',
    badge: '100% Genuine'
  },
  {
    id: 'pricing',
    title: 'Affordable Prices',
    description: 'Transparent and competitive wholesale & retail rates in Pakistan. No hidden fees or inflated charges for equipment and parts.',
    iconName: 'BadgePercent',
    badge: 'Best Value'
  },
  {
    id: 'installation',
    title: 'Professional Installation',
    description: 'Neat concealed cabling, optimal camera placement with zero blind spots, and comprehensive mobile app configuration by trained technicians.',
    iconName: 'Wrench',
    badge: 'Certified Team'
  },
  {
    id: 'support',
    title: 'Dedicated Customer Support',
    description: 'Prompt after-sales assistance, remote mobile viewing troubleshooting, system health checks, and warranty claim facilitation.',
    iconName: 'Headphones',
    badge: 'Prompt Help'
  }
];

export interface InstallationTier {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  idealFor: string;
  highlights: string[];
  cameraRange: string;
  popular?: boolean;
}

export const installationTiers: InstallationTier[] = [
  {
    id: 'home',
    title: 'Residential Home Security',
    tagline: 'Peace of mind for your family, main gate, perimeter & backyard.',
    iconName: 'Home',
    idealFor: 'Villas, bungalows, apartments & farmhouses',
    cameraRange: '2 to 8 Cameras',
    highlights: [
      'Discreet aesthetic concealed wiring',
      'Smart mobile phone live viewing for all family members',
      'Infrared night vision for gate & parking',
      'Motion alert push notifications on smartphones'
    ]
  },
  {
    id: 'retail',
    title: 'Retail Shop & Commercial',
    tagline: 'Prevent theft, monitor cash counters & supervise customer traffic.',
    iconName: 'Store',
    idealFor: 'Retail stores, pharmacies, restaurants & boutiques',
    cameraRange: '4 to 16 Cameras',
    popular: true,
    highlights: [
      'Cash register counter high-definition zoom focus',
      'Vandal-resistant dome cameras with audio recording',
      'Multi-screen monitor output for store managers',
      'Remote monitoring from mobile while traveling'
    ]
  },
  {
    id: 'corporate',
    title: 'Offices & Corporate Premises',
    tagline: 'Access corridor monitoring, employee safety & entrance management.',
    iconName: 'Building2',
    idealFor: 'Software houses, corporate offices, clinics & banks',
    cameraRange: '8 to 32 Cameras',
    highlights: [
      'PoE network cabling structured inside server racks',
      'AcuSense human/vehicle smart classification',
      'Centralized NVR storage with up to 60-day backup',
      'Role-based multi-user viewing permissions'
    ]
  },
  {
    id: 'industrial',
    title: 'Warehouse & Industrial Sites',
    tagline: 'Perimeter protection, loading bay monitoring & heavy-duty coverage.',
    iconName: 'Factory',
    idealFor: 'Warehouses, factories, stockyards & construction sites',
    cameraRange: '16 to 64+ Cameras',
    highlights: [
      'Long-distance fiber optic and PTZ camera deployment',
      'Surge protection against heavy industrial voltage drops',
      'License plate recognition & vehicle entry logs',
      '24/7 uninterrupted operation with solar/UPS backup'
    ]
  }
];

export const installationProcessSteps = [
  {
    step: '01',
    title: 'Free Site Survey',
    description: 'Our security specialist visits your site or evaluates your floor plan to identify vulnerabilities and key coverage angles.'
  },
  {
    step: '02',
    title: 'Tailored Solution',
    description: 'We present a clear, itemized proposal detailing camera counts, DVR/NVR specifications, storage duration, and wiring.'
  },
  {
    step: '03',
    title: 'Clean Installation',
    description: 'Our technicians execute neat, safe concealed cabling and mount cameras at precision angles with weatherproofing.'
  },
  {
    step: '04',
    title: 'Mobile App Setup',
    description: 'We configure free mobile apps on your phones/laptops and provide a complete walkthrough so you feel confident operating your system.'
  }
];
