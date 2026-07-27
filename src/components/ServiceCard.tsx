import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  key?: string;
  service: Service;
  onSelect: (serviceTitle: string) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  // Dynamically resolve icon or fallback to Sparkles
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full justify-between group"
      id={`service-card-${service.id}`}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-xl text-slate-800 tracking-tight group-hover:text-emerald-700 transition-colors duration-300">
            {service.title}
          </h3>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="border-t border-slate-100 pt-5 mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Service Details:</h4>
          <ul className="space-y-2.5">
            {service.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
                <LucideIcons.CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-400 block">Estimated price</span>
          <span className="font-display font-extrabold text-lg text-emerald-600">{service.basePrice}</span>
          <span className="text-xs text-slate-500 font-medium ml-1">{service.priceUnit.replace('SAR', '')} SAR</span>
        </div>
        <button
          onClick={() => onSelect(service.title)}
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 shadow-sm"
          id={`book-btn-${service.id}`}
        >
          <span>Select Service</span>
          <LucideIcons.ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
