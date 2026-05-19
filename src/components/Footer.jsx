import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-32 bg-paper border-t border-dark/5 text-dark" id='footer'>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        
        <div className="md:col-span-5">
          <h2 className="text-3xl font-light tracking-[0.2em] mb-8 text-dark">
            ELYSIAN
          </h2>

          <p className="text-lg italic font-serif leading-relaxed opacity-70 mb-12 max-w-sm">
            Join our mailing list to receive invitations to private tasting events and seasonal updates.
          </p>

          <div className="flex bg-accent p-2 rounded-sm max-w-md">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none outline-none p-4 flex-1 text-sm font-serif italic" 
            />
            <button className="bg-dark text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold">
              Subscribe
            </button>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Explore
            </h4>

            <div className="flex flex-col gap-4 text-sm italic font-serif opacity-60">
              <a href="#menu" className="hover:opacity-100 hover:text-gold transition-all">
                Menu
              </a>
              <a href="#about" className="hover:opacity-100 hover:text-gold transition-all">
                About
              </a>
              <a href="#reservations" className="hover:opacity-100 hover:text-gold transition-all">
                Reservation
              </a>
            </div>
          </div>
        </div>

        {/* VISIT */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Visit
            </h4>

            <p className="text-sm italic font-serif opacity-60 leading-relaxed">
              Street Name<br />
              Gujarat, India<br />
            </p>
          </div>
        </div>

        {/* CONTACT ADDED SECTION */}
        <div className="md:col-span-3 space-y-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">
              Contact
            </h4>

            <p className="text-sm italic font-serif opacity-60 leading-relaxed">
              Email: hello@elysian.com<br />
              Phone: +91 xxxxx xxxxx<br />
              Support: 10AM – 8PM (Mon–Sat)
            </p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="md:col-span-12 mt-12 flex flex-col items-end">

          <div className="flex gap-6 justify-end">
            <Instagram className="opacity-40 hover:opacity-100 hover:text-gold cursor-pointer transition-all" size={24} />
            <Facebook className="opacity-40 hover:opacity-100 hover:text-gold cursor-pointer transition-all" size={24} />
            <Twitter className="opacity-40 hover:opacity-100 hover:text-gold cursor-pointer transition-all" size={24} />
          </div>

          <div className="mt-12 h-px w-24 bg-black/20 ml-auto hidden md:block"></div>

          <div className="mt-4 text-[10px] uppercase tracking-widest text-right opacity-30 font-bold hidden md:block">
            Est. 2024
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-8 border-t border-dark/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest opacity-30 font-bold">
        <p>&copy; 2024 Elysian Table. Crafted with Passion.</p>

        <div className="flex gap-8">
          <span>Sustainability Report</span>
          <span>Privacy Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;