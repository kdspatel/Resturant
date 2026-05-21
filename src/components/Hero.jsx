// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { ChevronDown } from "lucide-react";

// const Hero = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

//   return (
//     <header
//       ref={ref}
//       className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-paper"
//     >
//       {/* Asymmetric Background */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-accent -z-10" />

//       <div className="max-w-[1500px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-14 items-center w-full relative z-10">
        
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="col-span-1 md:col-span-5 flex flex-col gap-10"
//         >
//           <div className="space-y-4">
//             <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
//               Taste the excellence
//             </span>

//             <h1 className="text-7xl lg:text-[7.5rem] leading-[0.85] font-light italic -ml-1 text-dark">
//               Ethereal <br />{" "}
//               <span className="not-italic">Dining</span>
//             </h1>
//           </div>

//           <p className="text-xl leading-relaxed text-dark/70 max-w-md">
//             Experience a curated selection of organic, locally-sourced
//             ingredients prepared with experimental techniques and artistic
//             passion.
//           </p>

//           <div className="flex items-center gap-6 group cursor-pointer w-fit">
//             <div className="w-14 h-14 rounded-full border border-dark flex items-center justify-center transition-all group-hover:bg-dark group-hover:text-paper">
//               <span className="text-2xl">→</span>
//             </div>

//             <span className="text-[11px] uppercase tracking-widest font-bold">
//               View Tasting Menu
//             </span>
//           </div>
//         </motion.div>

//         <div className="col-span-1 md:col-span-7 relative flex justify-center items-center h-full sm:pt-0 pt-20">
          
//           <motion.div
//             style={{ y, rotate }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.5 }}
//             className="w-[340px] md:w-[520px] aspect-[3/4] bg-gold rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1024"
//               alt="Artistic Gastronomy"
//               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
//               referrerPolicy="no-referrer"
//             />
//           </motion.div>

//           {/* Floating Highlight Box */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="absolute -left-6 md:left-4 top-1/4 z-20"
//           >
//             <div className="bg-white p-6 shadow-2xl rounded-sm max-w-[220px] border-t-4 border-gold">
              
//               <div className="text-[10px] uppercase tracking-widest mb-2 opacity-60">
//                 Chef's Special
//               </div>

//               <div className="text-xl leading-tight italic mb-4 text-dark font-serif">
//                 Paneer Tikka with Mint Chutney
//               </div>

//               <div className="w-full h-[1px] bg-dark/10 mb-2"></div>

//               <div className="text-[9px] uppercase tracking-widest font-medium">
//                 Chef Name
//               </div>
//             </div>
//           </motion.div>

//           {/* Rotating Text Circle */}
//           <div className="absolute -bottom-12 -right-6 md:right-12 z-20">
//             <div className="w-36 md:w-52 h-36 md:h-52 rounded-full border border-dashed border-gold flex items-center justify-center animate-spin-slow">
              
//               <svg
//                 viewBox="0 0 100 100"
//                 className="w-28 md:w-40 h-28 md:h-40 fill-gold opacity-50"
//               >
//                 <path
//                   id="textPath"
//                   d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   fill="none"
//                 />

//                 <text
//                   fontSize="8"
//                   className="uppercase tracking-[0.2em] font-sans"
//                 >
//                   <textPath href="#textPath">
//                     AUTHENTIC • SEASONAL • LOCAL • CRAFTED •{" "}
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Hero;

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
      className="relative min-h-screen w-full flex items-center pt-24 md:pt-20 overflow-hidden bg-paper"
    >
      {/* Asymmetric Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-[45%] md:h-full bg-accent -z-10" />

      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-14 items-center w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="col-span-1 md:col-span-5 flex flex-col gap-8 md:gap-10 text-center md:text-left order-2 md:order-1"
        >
          <div className="space-y-4">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-gold font-bold">
              Taste the excellence
            </span>

            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-7xl lg:text-[7.5rem] leading-[0.9] md:leading-[0.85] font-light italic text-dark">
              Ethereal <br />
              <span className="not-italic">Dining</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-dark/70 max-w-md mx-auto md:mx-0">
            Experience a curated selection of organic, locally-sourced
            ingredients prepared with experimental techniques and artistic
            passion.
          </p>

          {/* RATING BADGE */}
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border border-dark/20 rounded-full bg-white/50 backdrop-blur-md w-fit">

              {/* Stars */}
              <div className="text-gold text-xs sm:text-sm tracking-widest">
                ★★★★☆
              </div>

              {/* Rating text */}
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-widest font-bold text-dark whitespace-nowrap">
                4.8 Rating • 1.2k Reviews
              </span>

            </div>
          </div>
        </motion.div>

        <div className="col-span-1 md:col-span-7 relative flex justify-center items-center h-full pt-8 md:pt-0 order-1 md:order-2">
          
          <motion.div
            style={{ y, rotate }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-[260px] sm:w-[340px] md:w-[520px] aspect-[3/4] bg-gold rounded-full overflow-hidden border-[10px] sm:border-[14px] md:border-[16px] border-white shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1024"
              alt="Artistic Gastronomy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Floating Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute left-0 sm:left-4 md:left-4 top-[12%] sm:top-1/4 z-20"
          >
            <div className="bg-white p-4 sm:p-6 shadow-2xl rounded-sm max-w-[170px] sm:max-w-[220px] border-t-4 border-gold">
              
              <div className="text-[8px] sm:text-[10px] uppercase tracking-widest mb-2 opacity-60">
                Chef's Special
              </div>

              <div className="text-base sm:text-xl leading-tight italic mb-4 text-dark font-serif">
                Paneer Tikka with Mint Chutney
              </div>

              <div className="w-full h-[1px] bg-dark/10 mb-2"></div>

              <div className="text-[8px] sm:text-[9px] uppercase tracking-widest font-medium">
                Chef Name
              </div>
            </div>
          </motion.div>

          {/* Rotating Text Circle */}
          <div className="absolute -bottom-8 right-0 sm:right-6 md:right-12 z-20">
            <div className="w-28 sm:w-36 md:w-52 h-28 sm:h-36 md:h-52 rounded-full border border-dashed border-gold flex items-center justify-center animate-spin-slow">
              
              <svg
                viewBox="0 0 100 100"
                className="w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 fill-gold opacity-50"
              >
                <path
                  id="textPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />

                <text fontSize="8" className="uppercase tracking-[0.2em] font-sans">
                  <textPath href="#textPath">
                    AUTHENTIC • SEASONAL • LOCAL • CRAFTED •{" "}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;