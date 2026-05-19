import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import ReservationSection from "./components/ReservationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />

      {/* Dynamic Marquee */}
      <div className="py-16 bg-accent border-y border-dark/5 overflow-hidden flex whitespace-nowrap items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-6xl md:text-8xl font-serif font-light tracking-wide text-dark/5 italic"
        >
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center gap-20">
                <span>Authentic</span>
                <div className="w-12 h-[1px] bg-dark/10" />
                <span>Seasonal</span>
                <div className="w-12 h-[1px] bg-dark/10" />
                <span>Local</span>
                <div className="w-12 h-[1px] bg-dark/10" />
                <span>Crafted</span>
                <div className="w-12 h-[1px] bg-dark/10" />
              </span>
            ))}
        </motion.div>
      </div>

      <MenuSection />

      {/* Full Width Image Split */}
      <div className="grid md:grid-cols-2 bg-paper">
        <div className="h-[70vh] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000 border-r border-dark/5">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="h-[70vh] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-1000">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?_gl=1*14y3iar*_ga*NTU4NzU2NTU3LjE3NzkwMTU3ODY.*_ga_8JE65Q40S6*czE3NzkxMjcwODIkbzMkZzEkdDE3NzkxMjcxMjQkajE4JGwwJGgw"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <ReservationSection />
      <Footer />
    </div>
  );
}
