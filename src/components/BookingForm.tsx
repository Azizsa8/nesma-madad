import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Sparkles, User, Phone, Mail, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { Booking, Service } from '../types';

interface BookingFormProps {
  services: Service[];
  selectedServiceTitle: string;
  onBookingCreated: (booking: Booking) => void;
}

export default function BookingForm({ services, selectedServiceTitle, onBookingCreated }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Cleaning',
    dateTime: '',
    message: '',
  });

  // Dynamic parameters for live price estimator
  const [rooms, setRooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [windows, setWindows] = useState(4);
  const [officeSize, setOfficeSize] = useState('medium'); // small, medium, large
  const [ecoFriendly, setEcoFriendly] = useState(false);
  const [estimatePrice, setEstimatePrice] = useState(180);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  // Synchronize external selection
  useEffect(() => {
    if (selectedServiceTitle) {
      setFormData((prev) => ({ ...prev, service: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

  // Recalculate price dynamically
  useEffect(() => {
    const selected = services.find(s => s.title === formData.service);
    if (!selected) return;

    let cost = selected.basePrice;

    if (selected.id === 'residential') {
      cost += (rooms - 2) * 40;
      cost += (bathrooms - 1) * 30;
    } else if (selected.id === 'deep') {
      cost += (rooms - 2) * 60;
      cost += (bathrooms - 1) * 50;
    } else if (selected.id === 'window') {
      cost += (windows - 4) * 15;
    } else if (selected.id === 'office') {
      if (officeSize === 'small') cost -= 50;
      if (officeSize === 'large') cost += 300;
    }

    if (ecoFriendly) {
      cost += 30; // eco friendly solution fee
    }

    setEstimatePrice(Math.max(cost, 50));
  }, [formData.service, rooms, bathrooms, windows, officeSize, ecoFriendly, services]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.dateTime) {
      alert('Please fill out all required fields.');
      return;
    }

    const newBooking: Booking = {
      id: 'AMIRA-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      dateTime: formData.dateTime,
      message: formData.message,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      estimatedPrice: `${estimatePrice} SAR`,
    };

    onBookingCreated(newBooking);
    setSubmittedBooking(newBooking);
    setIsSubmitted(true);

    // Reset some form elements
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Residential Cleaning',
      dateTime: '',
      message: '',
    });
    setEcoFriendly(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-100" id="booking-form-container">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center md:text-left mb-8">
              <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-3">
                No Obligation Quote
              </span>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-800 tracking-tight">
                Request a Free Quote
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Fill in the details below. Our booking specialist will call you back within 15 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Ahmad Al-Saudi"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium"
                      id="input-name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g., +966 50 123 4567"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium"
                      id="input-phone"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., contact@domain.com"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium"
                      id="input-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Cleaning Service Needed <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium appearance-none"
                    id="input-service"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    {services.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Cost Estimator Controls */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Customize & Live Estimator</span>
                </div>

                {(formData.service.includes('Residential') || formData.service.includes('Deep')) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                        <span>Rooms to Clean</span>
                        <span className="text-emerald-600 font-bold">{rooms} Rooms</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={rooms}
                        onChange={(e) => setRooms(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                        <span>Bathrooms</span>
                        <span className="text-emerald-600 font-bold">{bathrooms} Baths</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="4"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                  </div>
                )}

                {formData.service.includes('Window') && (
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                      <span>Number of Windows</span>
                      <span className="text-emerald-600 font-bold">{windows} Windows</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={windows}
                      onChange={(e) => setWindows(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                )}

                {formData.service.includes('Office') && (
                  <div>
                    <span className="block text-xs font-semibold text-slate-600 mb-2">Office Space Size</span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Small (< 100 sqm)', val: 'small' },
                        { label: 'Medium (100-250 sqm)', val: 'medium' },
                        { label: 'Large (250+ sqm)', val: 'large' },
                      ].map((size) => (
                        <button
                          key={size.val}
                          type="button"
                          onClick={() => setOfficeSize(size.val)}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                            officeSize === size.val
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Eco-Friendly Upgrade Option */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60">
                  <input
                    type="checkbox"
                    id="eco-choice"
                    checked={ecoFriendly}
                    onChange={(e) => setEcoFriendly(e.target.checked)}
                    className="w-4.5 h-4.5 text-emerald-600 bg-white border-slate-300 rounded focus:ring-emerald-500 focus:ring-2 accent-emerald-600 cursor-pointer"
                  />
                  <label htmlFor="eco-choice" className="text-xs text-slate-600 font-medium cursor-pointer select-none">
                    Use <strong className="text-emerald-700">Eco-Friendly Non-Toxic products</strong> (+30 SAR)
                  </label>
                </div>
              </div>

              {/* Preferred Date and Time & Message */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Preferred Date & Time <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="datetime-local"
                      name="dateTime"
                      required
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium"
                      id="input-datetime"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    Special Message or Instructions
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      name="message"
                      rows={1}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g., Key under the doormat, pet friendly, etc."
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-2xl text-sm transition-all outline-none text-slate-800 font-medium resize-none min-h-[46px]"
                      id="input-message"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Price Estimate Showcase & Submission button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Estimated Price Quote</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-3xl text-emerald-600">{estimatePrice}</span>
                    <span className="text-sm text-slate-500 font-bold">SAR</span>
                    <span className="text-[10px] text-slate-400 ml-1 bg-slate-100 px-2 py-0.5 rounded-md">Vat Included</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all text-sm flex items-center justify-center gap-2 group cursor-pointer"
                  id="book-now-submit"
                >
                  <span>Book Now</span>
                  <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-booking"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-800 tracking-tight">
              Booking Request Received!
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mt-3 leading-relaxed">
              Thank you, <strong className="text-slate-800">{submittedBooking?.name}</strong>. Your appointment request has been logged successfully. 
            </p>

            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100/40 text-left max-w-md mx-auto my-6 space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-emerald-100/30">
                <span className="text-xs font-bold text-slate-400">Confirmation Code:</span>
                <span className="text-sm font-mono font-bold text-emerald-700">{submittedBooking?.id}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Service Type:</span>
                <strong className="text-slate-800">{submittedBooking?.service}</strong>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Preferred Date/Time:</span>
                <strong className="text-slate-800">
                  {submittedBooking?.dateTime ? new Date(submittedBooking.dateTime).toLocaleString() : 'Not Set'}
                </strong>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Estimated Price:</span>
                <strong className="text-emerald-700">{submittedBooking?.estimatedPrice}</strong>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600">
                <span>Status:</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-[10px] font-extrabold">PENDING APPROVAL</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/10"
              >
                Book Another Cleaning
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('my-bookings-container');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-200 transition-colors"
              >
                View My Bookings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
