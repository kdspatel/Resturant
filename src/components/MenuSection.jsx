// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const MENU_DATA = [
//   {
//     id: "indian",
//     title: "Indian Veg",
//     items: [
//       {
//         name: "Paneer Butter Masala",
//         price: "320",
//         description: "Creamy tomato gravy with soft paneer cubes.",
//         image: "https://images.pexels.com/photos/12737805/pexels-photo-12737805.jpeg"
//       },
//       {
//         name: "Garlic Naan",
//         price: "180",
//         description: "Soft leavened bread topped with garlic and butter.",
//         image: "https://images.pexels.com/photos/16851842/pexels-photo-16851842.jpeg"
//       }
//     ]
//   },
//   {
//     id: "italian",
//     title: "Italian",
//     items: [
//       {
//         name: "Margherita Pizza",
//         price: "350",
//         description: "Classic pizza with fresh mozzarella & basil.",
//         image: "https://images.pexels.com/photos/27793841/pexels-photo-27793841.jpeg"
//       },
//       {
//         name: "White Sauce Pasta",
//         price: "300",
//         description: "Creamy alfredo pasta with herbs.",
//         image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
//       }
//     ]
//   },
//   {
//     id: "desserts",
//     title: "Desserts",
//     items: [
//       {
//         name: "Chocolate Cake",
//         price: "220",
//         description: "Rich chocolate layered cake.",
//         image: "https://images.pexels.com/photos/33778514/pexels-photo-33778514.jpeg"
//       },
//       {
//         name: "Ice Cream Sundae",
//         price: "150",
//         description: "Vanilla ice cream with chocolate syrup.",
//         image: "https://images.pexels.com/photos/6025810/pexels-photo-6025810.jpeg"
//       }
//     ]
//   }
// ];

// export default function MenuSection() {
//   const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

//   const activeItems = MENU_DATA.find(c => c.id === activeCategory)?.items || [];

//   return (
//     <section id="menu" className="py-32 bg-paper text-dark">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <div>
//             <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">
//               Curated Flavors
//             </span>
//             <h2 className="text-5xl md:text-7xl italic">
//               Special <span className="not-italic">Menu</span>
//             </h2>
//           </div>

//           {/* CATEGORY BUTTONS */}
//           <div className="flex gap-10">
//             {MENU_DATA.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`uppercase text-[10px] tracking-[0.2em] pb-2 border-b-2 ${
//                   activeCategory === cat.id
//                     ? "border-gold text-dark"
//                     : "border-transparent opacity-50"
//                 }`}
//               >
//                 {cat.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ITEMS */}
//         <motion.div className="grid md:grid-cols-2 gap-16">
//           {activeItems.map((item) => {
//             return (
//               <div
//                 key={item.name}
//                 className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
//               >

//                 {/* IMAGE */}
//                 <div className="h-[420px] md:h-[450px] w-full overflow-hidden rounded-xl">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div className="flex items-baseline mt-6 mb-3">
//                   <h3 className="text-2xl italic">{item.name}</h3>
//                   <div className="flex-1 border-b border-dotted mx-3" />
//                   <span className="text-gold font-semibold">₹{item.price}</span>
//                 </div>

//                 <p className="text-sm opacity-60 italic">
//                   {item.description}
//                 </p>

//               </div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function MenuSection() {
  const categories = ['South', 'Punjabi', 'Italian', 'Dessert'];
  
  const foodData = {
    South: [
      { name: 'Idli', price: '1,200', desc: 'A healthy, pillowy-soft breakfast staple traditionally served hot with spicy sambar and coconut chutney.', img: 'https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg?_gl=1*gplztn*_ga*NTU4NzU2NTU3LjE3NzkwMTU3ODY.*_ga_8JE65Q40S6*czE3NzkxMjA2NDUkbzIkZzEkdDE3NzkxMjQ2ODkkajU5JGwwJGgw' },
      { name: 'Dhosha', price: '950', desc: 'A thin, golden-brown, and crispy South Indian crepe made from a fermented rice and lentil batter.', img: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?_gl=1*pb88s7*_ga*NTU4NzU2NTU3LjE3NzkwMTU3ODY.*_ga_8JE65Q40S6*czE3NzkxMjA2NDUkbzIkZzEkdDE3NzkxMjQ4MDckajQ5JGwwJGgw' },
      { name: 'Paneer Tikka', price: '750', desc: 'Char-grilled artisanal cottage cheese cubes marinated in heavy yogurt, mustard oil, and traditional tandoori masalas.', img: 'https://images.pexels.com/photos/33430558/pexels-photo-33430558.jpeg' },
    ],
    Punjabi: [
      { name: 'Chole Bhature', price: '450', desc: 'Tangy, spicy chickpea curry infused with dark tea leaves, served with large, cloud-fluffy deep-fried leavened bread.', img: 'https://images.pexels.com/photos/4149256/pexels-photo-4149256.jpeg' },
      { name: 'Amritsari Kulcha', price: '400', desc: 'Flaky, crisp multi-layered flatbread stuffed with spiced potatoes and onions, shattered by hand with pure deshi ghee.', img: 'https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg' },
      { name: 'Rajma Chawal', price: '350', desc: 'Comforting Kashmiri red kidney bean curry slow-stewed in thick onion-tomato gravy, served over hot steamed basmati rice.', img: 'https://images.pexels.com/photos/8992843/pexels-photo-8992843.jpeg' }
    ],
    Italian: [
      { name: 'Margherita Pizza', price: '850', desc: 'Woodfired thin crust topped with premium San Marzano tomato reduction, fresh molten mozzarella, and freshly torn sweet basil.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80' },
      { name: 'Mushroom Risotto', price: '900', desc: 'Creamy Italian arborio rice systematically slow-cooked with rehydrated wild porcini mushrooms and aged Parmesan reggiano.', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&auto=format&fit=crop&q=80' },
      { name: 'Classic Lasagna', price: '1,100', desc: 'Rich multi-layered egg pasta sheets packed with slow-cooked ragù, creamy béchamel, and crispy gratin crust tops.', img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&auto=format&fit=crop&q=80' }
    ],
    Dessert: [
      { name: 'Gulab Jamun', price: '350', desc: 'Delicate reduced milk solid dumplings, flash-fried and submerged completely in warm cardamom and Kashmiri saffron sugar syrup.', img: 'https://images.pexels.com/photos/15014918/pexels-photo-15014918.jpeg' },
      { name: 'Kesar Basundi', price: '400', desc: 'The royal essence of saffron meets the creamy richness of thickened milk in every blissful spoonful.', img: 'https://images.pexels.com/photos/33430555/pexels-photo-33430555.jpeg' },
      { name: 'Gajar Ka Halwa', price: '450', desc: 'Winter-heritage grated red carrots slow-braised in full cream milk, rich khoya, and pan-roasted cashews.', img: 'https://images.pexels.com/photos/35782620/pexels-photo-35782620.jpeg' }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('Dessert');
  const [selectedItem, setSelectedItem] = useState(foodData['Dessert'][0]);

  useEffect(() => {
    setSelectedItem(foodData[activeCategory][0]);
  }, [activeCategory]);

  return (
    <>
      {/* High-End Design Studio Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

      <section id="menu" className="w-full min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-[#1c1b18] py-20 lg:py-32 overflow-hidden relative selection:bg-neutral-900 selection:text-white">
        
        {/* Decorative Grid Line System for Studio Vibe */}
        {/* <div className="absolute inset-0 flex justify-between pointer-events-none max-w-7xl mx-auto px-6 opacity-[0.03]">
          <div className="w-[1px] h-full bg-neutral-900" />
          <div className="w-[1px] h-full bg-neutral-900 hidden md:block" />
          <div className="w-[1px] h-full bg-neutral-900" />
        </div> */}

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          
          {/* ================= DYNAMIC TEXT LINK HEADER ================= */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 border-b border-neutral-200/60 pb-8">
            <div>
              <span className="text-[10px] uppercase font-extrabold tracking-[0.4em] text-neutral-400 block mb-3">
                Fine Dining Canvas / 2026
              </span>
              <h2 className="text-5xl md:text-7xl font-normal font-['Playfair_Display'] tracking-tight text-neutral-900 leading-none">
                Special <span className="italic text-neutral-400">Menu</span>
              </h2>
            </div>

            {/* Premium Category Capsule Bars */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => {
                const isCatActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                      isCatActive
                        ? 'bg-neutral-900 text-white shadow-xl shadow-neutral-900/10'
                        : 'bg-white/80 text-neutral-400 hover:text-neutral-800 backdrop-blur-sm'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= DUAL SPLIT GRAPHIC WORKBENCH ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Frame Element: Arched Editorial Image Frame */}
            <div className="col-span-1 lg:col-span-5 flex flex-col items-center lg:items-start">
              <div className="w-full max-w-[380px] h-[480px] sm:h-[560px] rounded-t-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.30)] bg-white p-3 border border-neutral-200/90 relative group">
                <div className="w-full h-full rounded-t-full overflow-hidden bg-neutral-100">
                  <img 
                    src={selectedItem.img} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Frame Element: Fine Line Content & Floating Pickers */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-between min-h-[480px]">
              
              {/* Highlight Presentation Plate Block */}
              <div className="mb-12">
                <div className="flex items-baseline mb-4">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-['Playfair_Display'] tracking-wide text-neutral-900">
                    {selectedItem.name}
                  </h1>
                  {/* Premium Dotted Connecting Spacer Line */}
                  <div className="flex-1 border-b border-dashed border-neutral-300 mx-4" />
                  <span className="text-2xl sm:text-3xl font-light font-['Playfair_Display'] text-neutral-800">
                    ₹{selectedItem.price}
                  </span>
                </div>

                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-['Playfair_Display'] italic max-w-xl mb-6">
                  {selectedItem.desc}
                </p>

                <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-neutral-200/50 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Fresh Artisanal Crafting
                  </span>
                </div>
              </div>

              {/* ================= UNIQUE BUBBLE INTERACTIVE SELECTOR ================= */}
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-neutral-400 block mb-6">
                  Select Plate Options
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {foodData[activeCategory].slice(0, 3).map((item, idx) => {
                    const isCurrent = selectedItem.name === item.name;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedItem(item)}
                        className="group flex items-center gap-4 cursor-pointer select-none"
                      >
                        {/* Rounded Organic Framed Thumbnail */}
                        <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 border-2 p-0.5 ${
                          isCurrent 
                            ? 'border-neutral-900 scale-110 shadow-md' 
                            : 'border-transparent group-hover:border-neutral-300'
                        }`}>
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
                        </div>

                        {/* Inline Micro Labels */}
                        <div>
                          <h4 className={`text-xs font-bold tracking-tight line-clamp-1 transition-colors ${
                            isCurrent ? 'text-neutral-900 font-extrabold' : 'text-neutral-400 group-hover:text-neutral-700'
                          }`}>
                            {item.name}
                          </h4>
                          <p className="text-[10px] font-mono font-medium text-neutral-400 mt-0.5">
                            ₹{item.price}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Tracking Aesthetic Hairline */}
                <div className="w-full bg-neutral-200/60 h-[2px] mt-12 relative rounded-full">
                  <div 
                    className="absolute h-full bg-neutral-900 transition-all duration-500 rounded-full"
                    style={{ 
                      width: '33.33%', 
                      left: `${foodData[activeCategory].slice(0, 3).findIndex(i => i.name === selectedItem.name) * 33.33}%` 
                    }}
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}