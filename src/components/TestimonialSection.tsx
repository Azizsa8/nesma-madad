import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Plus, Check, User, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  onAddTestimonial: (testimonial: Testimonial) => void;
}

export default function TestimonialSection({ testimonials, onAddTestimonial }: TestimonialSectionProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) {
      alert('Please fill out both your name and review text.');
      return;
    }

    const newTestimonial: Testimonial = {
      id: 'testimonial-' + Date.now(),
      name: `${name}, Guest Reviewer`,
      rating,
      text,
      date: new Date().toISOString().split('T')[0],
      isUserGenerated: true,
    };

    onAddTestimonial(newTestimonial);
    setIsSuccess(true);
    setTimeout(() => {
      setName('');
      setText('');
      setRating(5);
      setIsSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <div className="space-y-12">
      {/* Testimonials Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl text-center md:text-left">
          <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-3">
            Client Success
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-sm mt-3">
            Real feedback from satisfied homeowners and business managers across Saudi Arabia who trust AMIRA.
          </p>
        </div>

        <div className="flex justify-center md:justify-end shrink-0">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-emerald-700 font-bold rounded-2xl text-xs flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            {showAddForm ? 'Cancel' : 'Write a Review'}
            {!showAddForm && <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="bg-emerald-50/50 rounded-3xl p-6 md:p-8 border border-emerald-100/50 max-w-2xl mx-auto space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-800 mb-2">Share Your Experience</h3>
              
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-bold text-slate-800">Review Submitted!</h4>
                  <p className="text-xs text-slate-500 mt-1">Thank you for helping us grow.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Fatimah K."
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-emerald-500 rounded-xl text-sm transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Rating</label>
                      <div className="flex items-center gap-1.5 py-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(null)}
                            className="p-0.5 text-amber-400 hover:scale-110 transition-transform"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                (hoveredRating !== null ? star <= hoveredRating : star <= rating)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Tell others what you liked about our service..."
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-emerald-500 rounded-xl text-sm transition-all outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 font-bold rounded-xl text-xs transition-colors shadow-md shadow-emerald-600/10"
                    >
                      Submit Review
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((test, index) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-100 pointer-events-none" />
            
            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < test.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{test.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{test.name}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{test.date}</span>
                </div>
              </div>

              {test.isUserGenerated && (
                <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Verified Client
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
