import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-800 text-cream-100 pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
             <h2 className="text-4xl font-display font-bold">L'ÉTOILE</h2>
             <p className="text-cream-200/80 text-sm leading-relaxed max-w-xs font-sans">
               An icon of Parisian elegance since 1924. Where history meets contemporary luxury in the heart of the Golden Triangle.
             </p>
          </div>

          <div>
             <h3 className="font-display text-xl mb-6 italic">Discover</h3>
             <ul className="space-y-4 text-sm font-sans tracking-wide text-cream-200/80">
               <li><a href="#" className="hover:text-terra-500 transition-colors">Our Suites</a></li>
               <li><a href="#" className="hover:text-terra-500 transition-colors">Fine Dining</a></li>
               <li><a href="#" className="hover:text-terra-500 transition-colors">Wellness & Spa</a></li>
               <li><a href="#" className="hover:text-terra-500 transition-colors">Experiences</a></li>
             </ul>
          </div>

          <div>
             <h3 className="font-display text-xl mb-6 italic">Contact</h3>
             <ul className="space-y-4 text-sm font-sans tracking-wide text-cream-200/80">
               <li className="block">123 Avenue Montaigne<br/>75008 Paris, France</li>
               <li className="block">+33 1 49 52 70 00</li>
               <li className="block">contact@letoileroyale.com</li>
             </ul>
          </div>

          <div>
            <h3 className="font-display text-xl mb-6 italic">Newsletter</h3>
            <div className="flex border-b border-cream-200/30 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-sm placeholder-cream-200/50"
              />
              <button className="text-terra-500 hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream-200/10 text-xs uppercase tracking-widest text-cream-200/40">
           <p>© {new Date().getFullYear()} L'Etoile Royale.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Instagram className="w-5 h-5 hover:text-terra-500 cursor-pointer transition-colors" />
             <Facebook className="w-5 h-5 hover:text-terra-500 cursor-pointer transition-colors" />
             <Twitter className="w-5 h-5 hover:text-terra-500 cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
    </footer>
  );
};