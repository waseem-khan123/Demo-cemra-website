import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-1',
    name: '2MP HD Bullet Camera',
    category: 'bullet-cameras',
    price: 3800,
    originalPrice: 4500,
    rating: 4.8,
    reviewsCount: 34,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    shortDescription: '1080p Full HD weatherproof outdoor bullet camera with 30m Smart IR night vision.',
    fullDescription: 'The 2MP HD Bullet Camera delivers crisp 1080p surveillance video with high-definition clarity for residential gates, perimeter boundaries, and parking lots. Features an IP67 weatherproof metal housing, Smart IR night illumination up to 30 meters, and wide dynamic range for backlit areas.',
    features: [
      '1080p Full HD Resolution (1920x1080)',
      'IP67 Weatherproof Heavy Duty Housing',
      'Smart IR Night Vision up to 30 Meters',
      '3.6mm Wide Angle Fixed Lens (82° FOV)',
      'Compatible with TVI/AHD/CVI/CVBS video signals'
    ],
    specs: {
      resolution: '2 Megapixel (1080p)',
      lens: '3.6mm Fixed Focal',
      nightVision: '30 Meters Smart IR',
      weatherproof: 'IP67 Ingress Protection',
      connectivity: 'BNC Coaxial',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: true,
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-2',
    name: '5MP Dome Camera',
    category: 'dome-cameras',
    price: 6500,
    originalPrice: 7800,
    rating: 4.9,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ultra HD 5MP ColorVu vandal-resistant dome camera with 24/7 full-color night vision.',
    fullDescription: 'Specially engineered for indoor commercial spaces, jewelry stores, offices, and modern homes. The 5MP Dome Camera features ColorVu sensor technology, capturing vibrant full-color video even in pitch-black conditions without glaring spotlights. Vandal-proof dome prevents tampering.',
    features: [
      '5 Megapixel Super HD Crystal Clarity',
      '24/7 Vivid Color Night Vision (F1.0 Aperture)',
      'Built-in Microphone for High Quality Audio Recording',
      'IK10 Vandal-Proof Rugged Dome Enclosure',
      'Digital Noise Reduction & True WDR'
    ],
    specs: {
      resolution: '5 Megapixel (2560x1944)',
      lens: '2.8mm Ultra-Wide Lens (102° FOV)',
      nightVision: '25 Meters Full Color Night Vision',
      weatherproof: 'IP66 Indoor/Outdoor',
      connectivity: 'Coaxial / HD-TVI',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: true,
    isNew: true,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-3',
    name: '4K IP Security Camera',
    category: 'bullet-cameras',
    price: 14200,
    originalPrice: 16500,
    rating: 5.0,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&w=800&q=80',
    shortDescription: '8MP 4K Ultra HD PoE IP network camera with AI human and vehicle smart detection.',
    fullDescription: 'The pinnacle of perimeter security. This 4K (8 Megapixel) IP Camera captures razor-sharp license plates, facial details, and distant objects. Equipped with on-board AI deep-learning analytics to accurately differentiate humans and vehicles from pets and falling leaves, reducing false alarms by 95%.',
    features: [
      'True 4K UHD 8MP (3840x2160) Video Streaming',
      'Power over Ethernet (PoE) single cable installation',
      'Deep Learning Human & Vehicle Motion Classification',
      'DarkFighter Low-Light Technology with 50m IR',
      'MicroSD Card Slot supporting up to 512GB local storage'
    ],
    specs: {
      resolution: '8 Megapixel 4K UHD',
      lens: '4mm Precision Glass Lens',
      nightVision: '50 Meters Matrix IR',
      weatherproof: 'IP67 Waterproof & Dustproof',
      connectivity: 'RJ-45 Ethernet / PoE (802.3af)',
      warranty: '2 Years Manufacturer & Store Warranty'
    },
    isFeatured: true,
    isNew: true,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-4',
    name: 'Wireless Wi-Fi Camera',
    category: 'wifi-cameras',
    price: 7900,
    originalPrice: 9500,
    rating: 4.7,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Smart 360° pan-tilt Wi-Fi camera with two-way audio and phone app remote live viewing.',
    fullDescription: 'The ultimate standalone security solution for homes, kids rooms, clinics, and small retail shops. Plug it directly into power and connect to your Wi-Fi network in under 3 minutes using the mobile app. Control 360-degree rotation from your smartphone from anywhere in the world.',
    features: [
      '360° Horizontal Pan & 90° Vertical Tilt Coverage',
      'Two-Way Audio with Noise Cancellation',
      'Instant Smartphone App Push Notifications on Motion',
      'Auto Motion Tracking follows subjects automatically',
      'Dual-Band Wi-Fi 2.4GHz for reliable penetration'
    ],
    specs: {
      resolution: '3 Megapixel 2K QHD',
      lens: '3.6mm Motorized Pan-Tilt',
      nightVision: '15 Meters Infrared Night Vision',
      weatherproof: 'Indoor Design',
      connectivity: 'Wi-Fi 802.11 b/g/n & Micro-USB Power',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: true,
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-5',
    name: '8 Channel DVR',
    category: 'dvr-nvr',
    price: 11500,
    originalPrice: 13500,
    rating: 4.8,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: '8-Channel AcuSense hybrid DVR supporting 5MP cameras with H.265+ ultra compression.',
    fullDescription: 'Reliable 8-channel hybrid Digital Video Recorder supporting HD-TVI, AHD, CVI, CVBS, and IP cameras simultaneously. Equipped with H.265+ high efficiency compression that saves up to 75% hard drive storage space and internet bandwidth. Includes HDMI and VGA dual video outputs.',
    features: [
      'Supports up to 8 HD Analog Cameras + 2 IP Cameras',
      'AcuSense Smart False Alarm Reduction',
      'H.265+ High-Efficiency Video Encoding',
      'Free Mobile App (Android & iOS) for Worldwide Live View',
      '1 SATA Interface supporting up to 10TB HDD'
    ],
    specs: {
      channels: '8 Video Inputs + 1 Audio Input',
      resolution: 'Encodes up to 5MP Lite / 1080p @ 15fps',
      storage: '1 SATA Port (up to 10TB)',
      connectivity: 'HDMI, VGA, LAN, 2x USB 2.0',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: true,
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-6',
    name: '16 Channel NVR',
    category: 'dvr-nvr',
    price: 24000,
    originalPrice: 28000,
    rating: 4.9,
    reviewsCount: 17,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Enterprise 16-Channel 4K NVR with built-in 16 PoE ports for commercial installations.',
    fullDescription: 'Commercial-grade 16-Channel Network Video Recorder designed for factories, shopping complexes, educational institutes, and large residences. Features 16 independent PoE interfaces allowing plug-and-play IP camera connections without external PoE switches.',
    features: [
      '16 Channels of 4K IP Camera Live View & Recording',
      '16 Built-in Plug & Play PoE Network Ports',
      '160 Mbps Incoming Bandwidth for smooth multi-camera stream',
      'Dual SATA Slots supporting up to 20TB Total Storage',
      '4K HDMI Video Output for ultra-clear monitor display'
    ],
    specs: {
      channels: '16 PoE IP Channels',
      resolution: 'Decodes up to 12MP / 4K Ultra HD',
      storage: '2 SATA Ports (up to 20TB Total)',
      connectivity: '16x PoE RJ45, 1x LAN, HDMI 4K, VGA',
      warranty: '2 Years Majid Store Warranty'
    },
    isFeatured: true,
    isNew: true,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-7',
    name: '1TB Surveillance Hard Drive',
    category: 'accessories',
    price: 13500,
    originalPrice: 15000,
    rating: 4.9,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Western Digital Purple 1TB 24/7 surveillance-grade SATA internal hard drive.',
    fullDescription: 'Standard PC hard drives fail under constant continuous video recording. The WD Purple 1TB Surveillance Hard Drive is engineered specifically for 24/7, always-on, high-temperature security systems. Built with AllFrame technology to minimize frame drops and pixelation.',
    features: [
      'Engineered specifically for 24/7 Surveillance Systems',
      'AllFrame 4K Technology reduces frame loss',
      'Workload rating of up to 180 TB/year',
      'Tarnish-resistant components for harsh environments',
      'Supports up to 64 HD single-stream cameras'
    ],
    specs: {
      storage: '1TB Capacity, 64MB Cache',
      connectivity: 'SATA 6 Gb/s Interface, 3.5 Inch Form Factor',
      warranty: '3 Years Official Brand Warranty'
    },
    isFeatured: true,
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-8',
    name: 'CCTV Cable Roll',
    category: 'cctv-cables',
    price: 9200,
    originalPrice: 10500,
    rating: 4.8,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'RG59 Coaxial with 2-Core Power Pure Copper 305 Meter Wooden Drum Cable Roll.',
    fullDescription: 'Premium quality CCTV composite cable combining 75-ohm RG59 coaxial video transmission with 2-core power cable in a single outer PVC jacket. Pure solid copper conductor ensures crystal clear HD video transmission without ghosting or signal interference up to 300+ meters.',
    features: [
      '305 Meters (1000 Feet) Heavy Duty Wooden Drum',
      '99.9% Pure Solid Copper Core for Maximum Signal Purity',
      'Dual-Shielded Aluminum Braiding protects from RF noise',
      'Combined Video & Power saves installation labor by 50%',
      'Weather-resistant UV-stabilized black PVC jacket'
    ],
    specs: {
      connectivity: 'RG59 (Coax) + 2x0.75mm Power Wires',
      storage: '305 Meters / Drum',
      weatherproof: 'UV Resistant Outdoor & Conduit Safe',
      warranty: '100% Copper Purity Guarantee'
    },
    isFeatured: true,
    isNew: false,
    stockStatus: 'In Stock'
  },
  {
    id: 'prod-9',
    name: '4G Solar PTZ Camera',
    category: 'ptz-cameras',
    price: 18900,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    shortDescription: '100% Wire-free 4G SIM solar powered 2K PTZ camera for farms, plots, and remote sites.',
    fullDescription: 'No electricity? No Wi-Fi? No problem! This 4G Solar PTZ Camera operates independently with a high-efficiency solar panel and heavy-duty rechargeable battery pack. Simply insert any Pakistani 4G SIM card (Jazz, Zong, Telenor, Ufone) and monitor your farm, construction site, or farmhouse from anywhere.',
    features: [
      '10W Monocrystalline Solar Panel + 20,000mAh Battery',
      'Works with 4G SIM Cards (All Pakistani Networks)',
      '355° Pan & 100° Tilt with PIR Thermal Radar Detection',
      'Dual Floodlights + Infrared for Full Color Night Vision',
      'Two-way voice communication with built-in siren'
    ],
    specs: {
      resolution: '4 Megapixel 2K QHD',
      nightVision: '30 Meters Full Color Floodlight & IR',
      weatherproof: 'IP66 Extreme Weather Rated',
      connectivity: '4G LTE SIM Card Slot',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: true,
    isNew: true,
    stockStatus: 'Limited Stock'
  },
  {
    id: 'prod-10',
    name: '12V 10A Centralized Power Supply',
    category: 'accessories',
    price: 3400,
    originalPrice: 4200,
    rating: 4.7,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: '9-Channel 12V 10A CCTV metal power distribution box with individual fuse protection.',
    fullDescription: 'Heavy-duty centralized regulated switching power supply designed to power up to 9 CCTV cameras safely. Housed in a lockable metal cabinet with LED status indicators and individual PTC auto-reset fuses on each channel to protect cameras against voltage surges and short circuits.',
    features: [
      'Powers up to 9 CCTV Cameras simultaneously',
      'Input: 110V-240V AC, Output: Regulated 12V DC 10 Amp',
      'Individual PTC Resettable Fuses for surge safety',
      'Heavy-duty lockable metal box with 2 keys included',
      'Built-in EMI filter reduces image noise and hum'
    ],
    specs: {
      channels: '9 Outputs (PTC Fuse Protected)',
      storage: 'Lockable Wall Mount Metal Enclosure',
      warranty: '1 Year Majid Store Warranty'
    },
    isFeatured: false,
    isNew: false,
    stockStatus: 'In Stock'
  }
];
