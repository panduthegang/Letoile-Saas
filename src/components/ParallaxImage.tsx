import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
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
};
