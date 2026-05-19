import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const ReservationSection = () => {
  return (
    <section id="reservations" className="py-32 bg-accent text-dark">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-4 space-y-8">
           <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Seating available</span>
           <h2 className="text-5xl md:text-6xl italic leading-tight">Secure <br /> Your Seat</h2>
           <p className="opacity-60 max-w-xs font-serif italic leading-relaxed">
             We recommend booking your table at least 2 weeks in advance for weekend dinners.
           </p>
           <div className="pt-8 flex flex-col gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Inquiries</div>
                <div className="text-lg italic underline underline-offset-4 decoration-gold/30">elysian@google.com</div>
              </div>
           </div>
        </div>
         
        <div className="md:col-span-8">
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border-t-8 border-gold"
          >
            <form className="grid sm:grid-cols-2 gap-8 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark font-bold">Select Date</label>
                <div className="relative">
                   <input type="date" className="w-full bg-paper border border-dark/5 p-5 focus:border-gold outline-none transition-colors italic font-serif" />
                   <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gold" size={18} />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-dark font-bold">Party Size</label>
                <select className="w-full bg-paper border border-dark/5 p-5 focus:border-gold outline-none transition-colors appearance-none italic font-serif">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>Large Party Call Us</option>
                </select>
              </div>
              <button className="sm:col-span-2 w-full bg-dark text-white py-6 uppercase tracking-[0.4em] font-bold text-xs hover:bg-gold transition-colors duration-500 shadow-xl">
                Check Availability
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
