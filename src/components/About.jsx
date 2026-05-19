import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-paper relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-dark/5" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="relative order-2 lg:order-1">
          {/* OVAL IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl"
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
            className="absolute -top-10 -left-10 w-64 bg-white shadow-2xl px-6 py-5 hidden md:block border-b-4 border-gold"
          >
            <p className="text-sm italic leading-relaxed text-dark">
              "Art is the signature of civilization. Our kitchen is where we
              write our history."
            </p>

            <p className="text-gold uppercase tracking-[0.2em] text-[9px] mt-3 font-bold">
              — Executive Director
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-12 order-1 lg:order-2">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] mb-4 block font-bold">
              The Philosophy
            </span>

            <h2 className="text-5xl md:text-7xl font-serif text-dark leading-tight italic">
              Curated <br /> <span className="not-italic">Simplicity</span>
            </h2>
          </div>

          <p className="text-lg text-dark/70 leading-relaxed font-serif italic">
            Each season, we invite you to discover a new chapter of culinary
            exploration. Our tables are set for those who appreciate the quiet
            beauty of a perfectly composed dish and the vibrant energy of fresh,
            organic ingredients.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-dark/10">
            <div>
              <h4 className="text-gold text-4xl mb-2 italic">Est. 2024</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
                India
              </p>
            </div>

            <div>
              <button className="flex items-center gap-4 group">
                <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-gold transition-colors">
                  Learn Our Story
                </span>
                <div className="w-8 h-[1px] bg-dark group-hover:bg-gold transition-all" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
