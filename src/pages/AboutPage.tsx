import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';
import { Button } from '../components/Button';

// High Quality Images
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop", // Elegant interior/architectural
  founder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
  team2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
  team3: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=684&auto=format&fit=crop",
  team4: "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?q=80&w=687&auto=format&fit=crop",
};

const team: TeamMember[] = [
  { id: 1, name: "Antoine Griezmann", role: "General Manager", image: IMAGES.team1, bio: "Overseeing excellence in every detail." },
  { id: 2, name: "Isabella Rossi", role: "Head Sommelier", image: IMAGES.team2, bio: "Curating a cellar of 5000+ vintages." },
  { id: 3, name: "Henri Laurent", role: "Executive Chef", image: IMAGES.team3, bio: "Transforming dining into an art form." },
  { id: 4, name: "Sarah Chen", role: "Head of Concierge", image: IMAGES.team4, bio: "Your key to the city of lights." },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-cream-50 pt-24">
      
      {/* Editorial Hero */}
      <section className="px-6 pb-20 pt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-[140px] leading-[0.85] font-display font-medium text-forest-800 mb-12">
                  Our <br/> <span className="italic text-terra-500 ml-12">Legacy</span>
                </h1>
              </motion.div>
              <div className="aspect-video overflow-hidden rounded-sm relative">
                 <motion.img 
                   initial={{ scale: 1.1 }}
                   animate={{ scale: 1 }}
                   transition={{ duration: 2 }}
                   src={IMAGES.hero} 
                   alt="Library" 
                   className="w-full h-full object-cover absolute inset-0" 
                 />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end pb-12">
              <h3 className="text-2xl font-serif italic text-forest-800 mb-6">"Tradition is not the worship of ashes, but the preservation of fire."</h3>
              <p className="text-forest-800/70 leading-relaxed font-sans mb-8">
                Founded in 1924 by Count Alexandre de Valois, L'Etoile Royale was born from a desire to create a sanctuary for the world's elite. 
                Unlike the grand railway hotels of the time, Valois envisioned an intimate palace, a home away from home for royalty, artists, and captains of industry.
              </p>
              <p className="text-forest-800/70 leading-relaxed font-sans mb-12">
                Nearly a century later, we remain family-owned, fiercely independent, and dedicated to the art of French hospitality.
              </p>
              <div className="flex gap-12 border-t border-forest-800/10 pt-8">
                 <div>
                   <div className="text-4xl font-display text-terra-500">1924</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-forest-800 mt-2">Established</div>
                 </div>
                 <div>
                   <div className="text-4xl font-display text-terra-500">4th</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-forest-800 mt-2">Generation</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-forest-800 text-cream-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <span className="text-terra-500 font-bold text-xs uppercase tracking-widest mb-6 block">Our Philosophy</span>
           <h2 className="text-4xl md:text-6xl font-display leading-tight mb-12">
             We believe that true luxury is <span className="italic text-terra-500">invisible</span>. It is the anticipation of a need before it is felt.
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
             {[
               { t: "Discretion", d: "We are the vault of your secrets. Privacy is our currency." },
               { t: "Detail", d: "From the thread count to the fresh flowers, nothing is overlooked." },
               { t: "Warmth", d: "Service that is attentive, yet pleasantly unobtrusive." }
             ].map((item, i) => (
               <div key={i} className="border-t border-white/20 pt-6">
                 <h3 className="text-2xl font-serif italic mb-4">{item.t}</h3>
                 <p className="text-white/60 text-sm leading-relaxed">{item.d}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-cream-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
             <h2 className="text-5xl font-display text-forest-800">The <span className="italic text-terra-500">Artisans</span></h2>
             <Button variant="outline">View Careers</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-forest-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                     <p className="text-white font-serif italic text-lg leading-relaxed">"{member.bio}"</p>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-forest-800">{member.name}</h3>
                <p className="text-xs text-terra-500 uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;