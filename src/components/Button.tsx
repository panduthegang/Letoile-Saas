import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'terra';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  withArrow = false,
  ...props 
}) => {
  // Base styles: sharp corners for modern lux feel, bold font
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ease-out font-sans group border";
  
  const variants = {
    primary: "bg-forest-800 text-white border-forest-800 hover:text-forest-800",
    terra: "bg-terra-500 text-white border-terra-500 hover:text-terra-500",
    outline: "bg-transparent text-forest-800 border-forest-800 hover:text-white",
    ghost: "bg-transparent text-forest-800 border-transparent hover:text-terra-500 px-0"
  };

  const hoverBg = {
    primary: "bg-white",
    terra: "bg-white",
    outline: "bg-forest-800",
    ghost: "bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Hover Fill Effect */}
      {variant !== 'ghost' && (
        <span className={`absolute inset-0 w-full h-full transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${hoverBg[variant]}`}></span>
      )}
      
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && (
          <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </button>
  );
};