import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export const Accordion: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      {items.map((item, index) => (
        <div key={index} className="border-b border-forest-800/10 pb-2">
          <button 
            className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
            onClick={() => toggle(index)}
          >
            <span className={`text-2xl font-display transition-colors duration-300 ${activeIndex === index ? 'text-terra-500 italic' : 'text-forest-800'}`}>
              {item.question}
            </span>
            <span className={`transform transition-transform duration-500 p-2 rounded-full border border-forest-800/20 group-hover:border-terra-500 ${activeIndex === index ? 'rotate-180 bg-terra-500 text-white border-terra-500' : 'text-forest-800'}`}>
              <ChevronDown size={16} />
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-forest-800/70 font-sans leading-relaxed text-base max-w-2xl">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};