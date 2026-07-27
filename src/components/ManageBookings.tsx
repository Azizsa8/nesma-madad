import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Trash2, ShieldCheck, AlertCircle, Sparkles, Ban } from 'lucide-react';
import { Booking } from '../types';

interface ManageBookingsProps {
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
}

export default function ManageBookings({ bookings, onCancelBooking }: ManageBookingsProps) {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-800" id="my-bookings-container">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5 justify-center sm:justify-start">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Your Dashboard</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-center sm:text-left">
            My Inquiries & Bookings
          </h3>
          <p className="text-slate-400 text-xs mt-1.5 text-center sm:text-left">
            Track and manage your submitted cleaning service inquiries in real time.
          </p>
        </div>
        <div className="bg-slate-800/80 rounded-2xl px-5 py-3 border border-slate-700/50 flex flex-col items-center sm:items-end">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Orders</span>
          <span className="text-2xl font-black text-emerald-400">{bookings.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {bookings.length === 0 ? (
          <motion.div
            key="empty-bookings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 px-4 rounded-2xl border-2 border-dashed border-slate-800"
          >
            <AlertCircle className="w-10 h-10 text-slate-600 mx-auto mb-4" />
            <h4 className="font-display font-bold text-base text-slate-300">No active bookings yet</h4>
            <p className="text-slate-500 text-xs max-w-sm mx-auto mt-2 leading-relaxed">
              Your inquiries will be listed here. Use the request form to schedule a service and get custom estimates.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="bookings-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
          >
            {bookings.map((booking) => (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-slate-800/40 rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {booking.id}
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      {booking.service}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold bg-slate-800 px-2 py-0.5 rounded-full">
                      {new Date(booking.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-300 pt-1">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>Scheduled:</span>
                      <strong className="text-slate-200">
                        {new Date(booking.dateTime).toLocaleDateString()}
                      </strong>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>Time Slot:</span>
                      <strong className="text-slate-200">
                        {new Date(booking.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </strong>
                    </div>
                  </div>

                  {booking.message && (
                    <p className="text-xs text-slate-400 italic bg-slate-900/40 px-3 py-2 rounded-xl mt-2 line-clamp-2">
                      &ldquo;{booking.message}&rdquo;
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Estimate</span>
                    <span className="font-display font-extrabold text-emerald-400 text-lg">{booking.estimatedPrice}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {booking.status === 'Pending' ? (
                      <div className="flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[10px] font-extrabold uppercase tracking-wide">
                          Pending
                        </span>
                        <button
                          onClick={() => onCancelBooking(booking.id)}
                          className="p-2 bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 rounded-xl transition-all duration-300"
                          title="Cancel Booking"
                        >
                          <Ban className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 text-[10px] font-extrabold uppercase tracking-wide">
                        Cancelled
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
