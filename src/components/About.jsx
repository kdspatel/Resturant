import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-paper relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-dark/5" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative order-2 lg:order-1 flex justify-center">
          
          {/* OVAL IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] w-full max-w-[500px] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"
          >
            <img
              src="/about.png"
              alt="Chef"
              className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* FLOATING QUOTE BOX */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -top-6 sm:-top-10 left-0 sm:-left-6 md:-left-10 w-[200px] sm:w-64 bg-white shadow-2xl px-4 sm:px-6 py-4 sm:py-5 hidden sm:block border-b-4 border-gold"
          >
            <p className="text-xs sm:text-sm italic leading-relaxed text-dark">
              "Art is the signature of civilization. Our kitchen is where we
              write our history."
            </p>

            <p className="text-gold uppercase tracking-[0.2em] text-[8px] sm:text-[9px] mt-3 font-bold">
              — Executive Director
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8 md:space-y-12 order-1 lg:order-2 text-center lg:text-left">
          
          <div>
            <span className="text-gold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-4 block font-bold">
              The Philosophy
            </span>

            <h2 className="text-[3rem] sm:text-5xl md:text-7xl font-serif text-dark leading-[1] md:leading-tight italic">
              Curated <br /> <span className="not-italic">Simplicity</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-dark/70 leading-relaxed font-serif italic max-w-xl mx-auto lg:mx-0">
            Each season, we invite you to discover a new chapter of culinary
            exploration. Our tables are set for those who appreciate the quiet
            beauty of a perfectly composed dish and the vibrant energy of fresh,
            organic ingredients.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-dark/10">
            
            <div>
              <h4 className="text-gold text-3xl sm:text-4xl mb-2 italic">
                Est. 2024
              </h4>

              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-40 font-bold">
                India
              </p>
            </div>

            <div className="flex justify-center lg:justify-start items-center">
              <button className="flex items-center gap-3 sm:gap-4 group">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-widest font-bold group-hover:text-gold transition-colors whitespace-nowrap">
                 Our Story
                </span>

                <div className="w-6 sm:w-8 h-[1px] bg-dark group-hover:bg-gold transition-all" />
              </button>
            </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
