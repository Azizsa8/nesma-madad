import { Service, Testimonial } from './types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Regular home cleaning to keep your space fresh and tidy. Includes dusting, vacuuming, mopping, and light kitchen/bathroom refresh.',
    iconName: 'Home',
    basePrice: 180,
    priceUnit: 'SAR / service',
    highlights: ['Kitchen & Bathroom sanitization', 'Dusting & vacuuming all rooms', 'Mopping hard floors', 'Trash removal']
  },
  {
    id: 'office',
    title: 'Office Cleaning',
    description: 'Professional cleaning for offices and other commercial spaces. Custom schedules to prevent disruption to your workday.',
    iconName: 'Building2',
    basePrice: 350,
    priceUnit: 'SAR / starting',
    highlights: ['Desk & workstation dusting', 'Common area cleaning', 'Restroom sanitization', 'Eco-friendly disposal']
  },
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'A full top-to-bottom clean for kitchens, bathrooms, bedrooms, and living areas. Ideal for seasonal refreshes or special occasions.',
    iconName: 'Sparkles',
    basePrice: 400,
    priceUnit: 'SAR / service',
    highlights: ['Deep bathroom & grout scrubbing', 'Oven & range hood degreasing', 'Inside windows & sills', 'Detailed baseboards dusting']
  },
  {
    id: 'move',
    title: 'Move-In & Move-Out Cleaning',
    description: 'Detailed, highly thorough cleaning before you move in or after you move out to secure your deposit or prep your new home.',
    iconName: 'Truck',
    basePrice: 500,
    priceUnit: 'SAR / service',
    highlights: ['Inside cabinets & closets cleaning', 'Thorough sanitization of all surfaces', 'Wall washing & detail vacuuming', 'Appliances interior deep clean']
  },
  {
    id: 'window',
    title: 'Window Cleaning',
    description: 'Clear, streak-free windows for homes and businesses. We clean both interior and exterior windows meticulously.',
    iconName: 'LayoutGrid',
    basePrice: 120,
    priceUnit: 'SAR / starting',
    highlights: ['Streak-free glass cleaning', 'Sill & frame wipe-down', 'Screen brushing', 'High-access window safety']
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah A., Riyadh',
    rating: 5,
    text: 'Excellent service! My house has never looked better.',
    date: '2026-07-15'
  },
  {
    id: 't2',
    name: 'Fahad M., Jeddah',
    rating: 5,
    text: 'Reliable, friendly staff and great value for money.',
    date: '2026-07-10'
  },
  {
    id: 't3',
    name: 'Layla K., Dammam',
    rating: 5,
    text: 'The deep cleaning service saved me so much time before our family gathering. Spotless and smells amazing!',
    date: '2026-07-18'
  },
  {
    id: 't4',
    name: 'Khalid T., Riyadh',
    rating: 5,
    text: 'Highly professional team. They cleaned our office space over the weekend with zero disruption. Recommended!',
    date: '2026-07-02'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Friendly & Experienced Cleaners',
    description: 'Our team consists of vetted, well-trained professionals who care about your comfort.',
    icon: 'Users'
  },
  {
    title: 'Affordable Prices',
    description: 'High-quality cleaning without the premium price tag. Get exact upfront quotes with zero hidden fees.',
    icon: 'Coins'
  },
  {
    title: 'Reliable, On-Time Service',
    description: 'Your time is valuable. We arrive exactly as scheduled, equipped, and ready to transform your space.',
    icon: 'Clock'
  },
  {
    title: 'Eco-Friendly Products Available',
    description: 'We care about your family, pets, and the planet. Green, non-toxic cleaning agents are available upon request.',
    icon: 'Leaf'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Whether you need a one-time deep clean, weekly visits, or weekend commercial services, we adapt to you.',
    icon: 'CalendarDays'
  },
  {
    title: '100% Customer Satisfaction',
    description: 'If you are not completely satisfied with our work, we will return and clean it again at no extra cost.',
    icon: 'Heart'
  }
];
