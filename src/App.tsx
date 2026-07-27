import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';

// Import Types and Data
import { Booking, Testimonial, Service } from './types';
import { INITIAL_SERVICES, INITIAL_TESTIMONIALS, WHY_CHOOSE_US } from './data';

// Import Custom Components
import ServiceCard from './components/ServiceCard';
import BookingForm from './components/BookingForm';
import ManageBookings from './components/ManageBookings';
import TestimonialSection from './components/TestimonialSection';

// Use string constants for generated assets to prevent TypeScript import errors
const heroBg = '/src/assets/images/amira_hero_bg_1784596129984.jpg';
const cleanerTeam = '/src/assets/images/amira_cleaner_team_1784596145691.jpg';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('Residential Cleaning');

  // Load persistent state on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('amira_bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    const savedTestimonials = localStorage.getItem('amira_testimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      setTestimonials(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleBookingCreated = (newBooking: Booking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('amira_bookings', JSON.stringify(updated));
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: 'Cancelled' as const } : b
    );
    setBookings(updated);
    localStorage.setItem('amira_bookings', JSON.stringify(updated));
  };

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    localStorage.setItem('amira_testimonials', JSON.stringify(updated));
  };

  const handleSelectService = (title: string) => {
    setSelectedServiceTitle(title);
    // Smooth scroll to the booking section
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfefe]" id="amira-root">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Group */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/10 text-white font-black font-display text-xl">
                A
              </div>
              <div>
                <h1 className="font-display font-extrabold text-lg text-slate-800 tracking-tight leading-none uppercase">
                  AMIRA
                </h1>
                <span className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">
                  Cleaning Services
                </span>
              </div>
            </div>

            {/* Quick Contact & Action */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-500">
                <a href="tel:+966501234567" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <Lucide.Phone className="w-4 h-4 text-emerald-500" />
                  <span>+966 50 123 4567</span>
                </a>
                <a href="mailto:info@amiracleaning.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <Lucide.Mail className="w-4 h-4 text-emerald-500" />
                  <span>info@amiracleaning.com</span>
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <Lucide.MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Saudi Arabia</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('booking-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 cursor-pointer"
                id="header-cta-btn"
              >
                Book Clean Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32" id="hero-section">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="AMIRA Clean Space Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#fdfefe]/80 to-[#fdfefe]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
                <Lucide.Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Cleaning You Can Count On
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight leading-tight">
                Clean Homes.<br />
                <span className="text-emerald-600">Fresh Offices.</span><br />
                Happy Customers.
              </h2>

              <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                At <strong className="text-slate-800">AMIRA Cleaning Services</strong>, we make cleaning easy with reliable, affordable, and high-quality services for homes and businesses. Our friendly team works hard to leave every space fresh, clean, and comfortable.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('booking-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-emerald-600/10 hover:shadow-emerald-600/25 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book Your Cleaning Today</span>
                  <Lucide.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl text-sm transition-all shadow-sm"
                >
                  Explore Services
                </button>
              </div>

              {/* Stat highlights */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <span className="block text-2xl font-black text-slate-800">100%</span>
                  <span className="text-xs font-medium text-slate-500">Satisfied Clients</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-800">5.0 ★</span>
                  <span className="text-xs font-medium text-slate-500">Superb Reviews</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-800">Eco</span>
                  <span className="text-xs font-medium text-slate-500">Friendly Option</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-4 shadow-2xl shadow-slate-200 border border-slate-100 relative"
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100">
                  <img
                    src={heroBg}
                    alt="Pristine modern interior"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white rounded-2xl p-4 shadow-xl max-w-xs border border-slate-800 hidden sm:block">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      <Lucide.ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold">Premium Quality Guarantee</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Friendly, vetted, and on-time specialists</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-3">
              Professional Catalog
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Whether it’s a detailed deep clean or standard recurring upkeep, we have the perfect custom solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIAL_SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleSelectService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AMIRA SECTION */}
      <section className="py-20 bg-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Section */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-10"></div>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative z-10 p-3">
                  <img
                    src={cleanerTeam}
                    alt="Friendly and experienced cleaner team"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="p-4 pt-5 text-center sm:text-left">
                    <h4 className="font-display font-bold text-slate-800 text-base">Friendly Specialists</h4>
                    <p className="text-slate-500 text-xs mt-1">Ready to bring sparkles and freshness to Saudi homes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-3">
                  Our Commitments
                </span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tight">
                  Why Choose AMIRA?
                </h2>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                  We treat every space like our own. Our clean guarantees and reliable scheduling are tailored specifically to ensure high client satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_CHOOSE_US.map((item, index) => {
                  // Resolve correct icon dynamically
                  const Icon = (Lucide as any)[item.icon] || Lucide.Check;
                  return (
                    <div key={index} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 h-fit shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-slate-800 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOOKING & DASHBOARD CONTAINER */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="booking-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Booking Form Left */}
            <div className="lg:col-span-7">
              <BookingForm
                services={INITIAL_SERVICES}
                selectedServiceTitle={selectedServiceTitle}
                onBookingCreated={handleBookingCreated}
              />
            </div>

            {/* Dashboard Right */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <ManageBookings
                bookings={bookings}
                onCancelBooking={handleCancelBooking}
              />

              <div className="mt-6 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-display font-bold text-sm text-slate-800 flex items-center gap-2">
                  <Lucide.ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Saudi Arabia Service Info</span>
                </h4>
                <div className="space-y-2 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Active Regions:</span>
                    <strong className="text-slate-700">Riyadh, Jeddah, Dammam</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Working Hours:</span>
                    <strong className="text-slate-700">Daily: 8:00 AM - 8:00 PM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Callback Response:</span>
                    <strong className="text-emerald-700">Within 15 Minutes</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white border-t border-slate-100" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSection
            testimonials={testimonials}
            onAddTestimonial={handleAddTestimonial}
          />
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer className="bg-slate-900 text-white pt-16 pb-12 mt-auto border-t border-slate-800" id="footer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-black text-lg">
                  A
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-base tracking-tight uppercase leading-none">
                    AMIRA
                  </h3>
                  <span className="text-[9px] text-emerald-400 font-bold tracking-wider uppercase">
                    Cleaning Services
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Reliable, affordable, and high-quality cleaning for homes and businesses. Our friendly team works hard to make every space fresh, clean, and comfortable.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <button
                    onClick={() => document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Cleaning Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Get a Quote / Book Now
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Contact Us</h4>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-3">
                  <Lucide.MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Saudi Arabia (Serving Riyadh, Jeddah, Dammam & surrounding areas)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Lucide.Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="tel:+966501234567" className="hover:text-white transition-colors">
                    +966 50 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Lucide.Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="mailto:info@amiracleaning.com" className="hover:text-white transition-colors">
                    info@amiracleaning.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} AMIRA Cleaning Services. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
              <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
