export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  dateTime: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
  estimatedPrice?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  isUserGenerated?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  basePrice: number;
  priceUnit: string;
  highlights: string[];
}
