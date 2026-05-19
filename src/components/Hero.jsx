import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <header
      ref={ref}
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-paper"
    >
      {/* Asymmetric Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent -z-10" />

      <div className="max-w-[1500px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-14 items-center w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="col-span-1 md:col-span-5 flex flex-col gap-10"
        >
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
              Taste the excellence
            </span>

            <h1 className="text-7xl lg:text-[7.5rem] leading-[0.85] font-light italic -ml-1 text-dark">
              Ethereal <br />
              <span className="not-italic">Dining</span>
            </h1>
          </div>

          <p className="text-xl leading-relaxed text-dark/70 max-w-md">
            Experience a curated selection of organic, locally-sourced
            ingredients prepared with experimental techniques and artistic
            passion.
          </p>

          {/* RATING BADGE (REPLACED CTA) */}
          <div className="flex items-center gap-4 w-fit">

            <div className="flex items-center gap-3 px-5 py-3 border border-dark/20 rounded-full bg-white/50 backdrop-blur-md">

              {/* Stars */}
              <div className="text-gold text-sm tracking-widest">
                ★★★★☆
              </div>

              {/* Text */}
              <span className="text-[11px] uppercase tracking-widest font-bold text-dark">
                4.8 Rating • 1.2k Reviews
              </span>

            </div>

          </div>
        </motion.div>

        <div className="col-span-1 md:col-span-7 relative flex justify-center items-center h-full sm:pt-0 pt-20">
          
          <motion.div
            style={{ y, rotate }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-[340px] md:w-[520px] aspect-[3/4] bg-gold rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1024"
              alt="Artistic Gastronomy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default Hero;