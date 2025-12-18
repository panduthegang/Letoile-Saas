import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Star, ArrowUpRight, Wifi, Car, Crown, Gem } from 'lucide-react';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { Accordion } from '../components/Accordion';
import { Testimonial, FaqItem } from '../types';

// Updated Image URLs (High Quality Unsplash)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3870&auto=format&fit=crop",
  interior: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
  artGallery: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070&auto=format&fit=crop", // Updated to a better gallery/museum shot
  room1: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
  room2: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
  room3: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella V.",
    role: "Vogue Editor",
    quote: "L'Etoile Royale redefines the very concept of hospitality. It is not just a hotel; it is a theatre of dreams.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    id: 2,
    name: "Marc D.",
    role: "Architect",
    quote: "The attention to detail in the restoration is breathtaking. A masterclass in preserving history while embracing the future.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  },
  {
    id: 3,
    name: "Elena R.",
    role: "Travel Critic",
    quote: "I have stayed in the world's finest establishments, but nothing compares to the silent, effortless service found here.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200"
  }
];

const faqs: FaqItem[] = [
  {
    question: "Do you offer private airport transfers?",
    answer: "Yes, our fleet of Bentleys and Rolls Royces is available for complimentary pickup for all Suite guests. Helicopter transfers can also be arranged upon request."
  },
  {
    question: "What is the dress code for the restaurants?",
    answer: "Our signature restaurant, Le Jardin, requires formal attire in the evening. Gentlemen are requested to wear a jacket. Smart casual is welcome for lunch service."
  },
  {
    question: "Are pets allowed?",
    answer: "We are delighted to welcome small dogs. We offer a bespoke pet menu, grooming services, and walking arrangements to ensure their stay is as comfortable as yours."
  }
];

// Helper Animations
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img 
        style={{ scale }}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

const RoomCard = ({ img, title, price, delay }: { img: string, title: string, price: string, delay: number }) => (
  <Reveal delay={delay} className="group cursor-pointer">
    <div className="relative overflow-hidden aspect-[4/5] mb-6">
      <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/20 transition-colors duration-500 z-10"></div>
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 z-20">
        <span className="text-xs font-bold tracking-widest uppercase">{price}</span>
      </div>
    </div>
    <div className="flex justify-between items-end border-b border-forest-800/10 pb-4 group-hover:border-terra-500 transition-colors">
      <div>
        <h3 className="text-2xl font-display text-forest-800">{title}</h3>
        <p className="text-sm text-forest-800/60 mt-2">45m² • City View • King Bed</p>
      </div>
      <div className="bg-forest-800 text-white p-2 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight size={20} />
      </div>
    </div>
  </Reveal>
);

const LandingPage: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="bg-cream-50">
      
      {/* Hero Section - Magazine Cover Style */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-forest-900">
        <motion.div style={{ y }} className="absolute inset-0">
           <img src={IMAGES.hero} alt="Hotel Hero" className="w-full h-full object-cover brightness-[0.85]" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="border-[1px] border-white/30 p-8 md:p-16 backdrop-blur-[2px]"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-bold"
            >
              The Pinnacle of Living
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.9] mb-8"
            >
              L'Etoile <br/> <span className="italic">Royale</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-forest-800">
                Explore The Estate
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Editorial Text */}
      <section className="py-32 px-6 bg-cream-50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -top-10 -left-10 w-full h-full border border-terra-500/20 z-0"></div>
             <ParallaxImage src={IMAGES.interior} alt="Lobby" className="relative z-10 aspect-[4/5] shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <Reveal>
               <span className="text-terra-500 font-bold text-xs uppercase tracking-widest">Since 1924</span>
               <h2 className="text-5xl md:text-6xl font-display text-forest-800 mt-6 leading-tight">
                 A Timeless <span className="italic text-terra-500">Masterpiece</span> in the Heart of Paris
               </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-forest-800/70 font-sans leading-relaxed">
                Step into a world where grandeur meets intimacy. For nearly a century, L'Etoile Royale has been the silent witness to history's most whispered secrets.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-forest-800/70 font-sans leading-relaxed">
                Every corner tells a story, every suite is a sanctuary. We invite you to write your own chapter in our illustrious history.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="pt-4">
               <div className="flex gap-12">
                 <div>
                   <span className="block text-4xl font-display text-forest-800">120</span>
                   <span className="text-xs uppercase tracking-widest text-forest-800/50">Suites</span>
                 </div>
                 <div>
                   <span className="block text-4xl font-display text-forest-800">3</span>
                   <span className="text-xs uppercase tracking-widest text-forest-800/50">Restaurants</span>
                 </div>
                  <div>
                   <span className="block text-4xl font-display text-forest-800">1</span>
                   <span className="text-xs uppercase tracking-widest text-forest-800/50">Spa</span>
                 </div>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Rooms Showcase - Horizontal Scroll feel */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <Reveal>
              <h2 className="text-5xl font-display text-forest-800">The <span className="italic text-terra-500">Collection</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Button variant="ghost" withArrow>View All Accommodations</Button>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoomCard img={IMAGES.room1} title="Prestige Suite" price="From €1,200" delay={0.1} />
            <RoomCard img={IMAGES.room2} title="Royal Atelier" price="From €2,500" delay={0.2} />
            <RoomCard img={IMAGES.room3} title="Imperial Penthouse" price="Inquire" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Art Collection - Replaces Dining */}
      <section 
        className="relative py-40 flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${IMAGES.artGallery})` }}
      >
        <div className="absolute inset-0 bg-forest-900/60"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
           <Reveal>
             <div className="inline-block p-16 bg-cream-50 shadow-2xl text-center border-t-4 border-terra-500">
               <Gem className="w-8 h-8 mx-auto text-terra-500 mb-6" />
               <h2 className="text-4xl md:text-5xl font-display text-forest-800 mb-6">The Royal Gallery</h2>
               <p className="text-forest-800/70 mb-8 leading-relaxed font-sans text-lg">
                 Home to one of the largest private art collections in Europe. 
                 Wander through corridors adorned with original Renaissance masterpieces 
                 and contemporary avant-garde installations.
               </p>
               <Button variant="terra">Schedule Private Tour</Button>
             </div>
           </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-cream-50 px-6">
        <div className="container mx-auto">
          <Reveal className="text-center mb-20">
            <span className="text-terra-500 font-bold text-xs uppercase tracking-widest">Amenities</span>
            <h2 className="text-4xl md:text-5xl font-display text-forest-800 mt-4">Curated for <span className="italic">Perfection</span></h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: <Crown />, title: "Concierge", desc: "Our Clefs d'Or concierge team makes the impossible, possible." },
               { icon: <Car />, title: "Chauffeur", desc: "Arrive in style with our fleet of vintage and modern luxury vehicles." },
               { icon: <Wifi />, title: "Connectivity", desc: "Seamless high-speed fiber throughout the estate for business or leisure." },
               { icon: <Star />, title: "Experiences", desc: "Private tours of the Louvre, fashion week access, and more." },
             ].map((item, i) => (
               <Reveal key={i} delay={i * 0.1} className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                 <div className="w-12 h-12 bg-cream-50 flex items-center justify-center rounded-full text-terra-500 mb-6 group-hover:bg-terra-500 group-hover:text-white transition-colors">
                   {item.icon}
                 </div>
                 <h3 className="text-xl font-display font-bold text-forest-800 mb-3">{item.title}</h3>
                 <p className="text-forest-800/60 text-sm leading-relaxed">{item.desc}</p>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-32 bg-forest-800 text-cream-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-terra-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
               <span className="text-terra-500 font-bold text-xs uppercase tracking-widest">Testimonials</span>
               <h2 className="text-4xl md:text-5xl font-display leading-tight">
                 "A sanctuary of silence and beauty in a chaotic world."
               </h2>
               <div className="flex gap-2">
                 {[...Array(5)].map((_, i) => <Star key={i} className="fill-terra-500 text-terra-500 w-5 h-5" />)}
               </div>
               <div className="pt-8">
                 <Button variant="outline" className="text-cream-50 border-cream-50/20 hover:bg-cream-50 hover:text-forest-800">Read All Reviews</Button>
               </div>
             </div>
             
             <div className="grid gap-6">
               {testimonials.map((t, i) => (
                 <motion.div 
                   key={t.id}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.2, duration: 0.8 }}
                   className="bg-white/5 backdrop-blur p-8 border border-white/10 hover:bg-white/10 transition-colors"
                 >
                   <p className="font-serif italic text-lg mb-6 opacity-90">"{t.quote}"</p>
                   <div className="flex items-center gap-4">
                     <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                     <div>
                       <div className="font-bold text-sm uppercase tracking-wide">{t.name}</div>
                       <div className="text-xs text-terra-500">{t.role}</div>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-cream-100">
        <div className="container mx-auto max-w-4xl">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-display text-forest-800">Common <span className="italic text-terra-500">Inquiries</span></h2>
           </div>
           <Accordion items={faqs} />
        </div>
      </section>

    </div>
  );
};

export default LandingPage;