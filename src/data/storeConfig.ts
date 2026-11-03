export const storeConfig = {
  brandName: 'Majid CCTV Store',
  tagline: 'Your Trusted Security Partner',
  shortBio: 'Leading provider of high-definition CCTV security cameras, network video recorders, and certified installation services across homes, shops, and enterprises.',
  
  // Owner Information & Photo configuration
  owner: {
    name: 'Majid',
    title: 'Founder & Security Systems Consultant',
    experienceYears: '10+',
    bio: 'With over a decade of hands-on experience in electronic surveillance, Majid has overseen 500+ successful CCTV deployments across commercial markets, residential societies, and industrial warehouses in Pakistan.',
    photoUrl: '/images/majid-owner.jpg', // Place Majid's real photo in public/images/majid-owner.jpg
    photoPlaceholder: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80', // Professional owner in showroom
  },

  // Contact Information (Sample Demo)
  contact: {
    phone: '+92 300 1234567',
    phoneDisplay: '+92 (300) 123-4567',
    whatsapp: '+923001234567',
    whatsappDisplay: '+92 300 1234567',
    email: 'info@majidcctvstore.demo',
    address: 'Shop #14, Security Electronics Plaza, Main Hall Road, Lahore, Pakistan',
    mapQuery: 'Hall Road Lahore',
    workingHours: 'Mon - Sat: 10:00 AM - 8:30 PM (Sunday Closed)',
    emergencySupport: '24/7 Remote Monitoring Technical Assistance',
  },

  // Social Links
  socials: {
    facebook: 'https://facebook.com/#',
    instagram: 'https://instagram.com/#',
    youtube: 'https://youtube.com/#',
    whatsappDirect: 'https://wa.me/923001234567',
  },

  // Trust Badges / Stats
  stats: [
    { value: '500+', label: 'Sites Secured' },
    { value: '2,500+', label: 'Cameras Installed' },
    { value: '99.4%', label: 'Satisfied Clients' },
    { value: '100%', label: 'Genuine Products' },
  ],

  // Demo Notice
  demoDisclaimer: 'Demo Notice: This website is a demonstration preview created for Majid CCTV Store. All product prices (PKR), specifications, and contact numbers are realistic placeholders for demonstration purposes.',
};

export const formatPKR = (amount: number): string => {
  return 'PKR ' + amount.toLocaleString('en-PK');
};

export const generateWhatsAppOrderUrl = (
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number,
  customerName?: string
): string => {
  const intro = customerName
    ? `*Hello Majid CCTV Store!*%0A%0AMy name is *${encodeURIComponent(customerName)}*. I am interested in placing an order from your website demo:%0A%0A`
    : `*Hello Majid CCTV Store!*%0A%0AI would like to inquire/order the following security equipment:%0A%0A`;

  const itemLines = items
    .map((item, idx) => `${idx + 1}. *${encodeURIComponent(item.name)}* x ${item.quantity} = ${formatPKR(item.price * item.quantity)}`)
    .join('%0A');

  const totalLine = `%0A%0A*Total Amount:* ${formatPKR(total)}%0A%0APlease let me know about product availability, warranty, and delivery/installation details.`;

  return `https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${intro}${itemLines}${totalLine}`;
};
