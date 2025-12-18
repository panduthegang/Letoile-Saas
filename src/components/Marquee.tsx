import React from 'react';

export const Marquee: React.FC = () => {
  const words = [
    "Michelin Star Dining", "Private Butler Service", "Rooftop Terrace", "Exclusive Spa", "Chauffeur Service", "Art Collection"
  ];

  return (
    <div className="bg-terra-500 text-white py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <div key={index} className="mx-8 flex items-center">
             <span className="text-sm font-bold uppercase tracking-widest font-sans">
              {word}
            </span>
            <span className="ml-8 w-1.5 h-1.5 bg-forest-800 rounded-full"></span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};