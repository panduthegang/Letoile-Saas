import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { ParallaxImage } from '../components/ParallaxImage';

const SUITES = [
    {
        id: 'presidential',
        title: 'The Presidential Suite',
        description: 'The crown jewel of L\'Etoile Royale. Spanning 450m², this residence offers a private terrace with panoramic views of the Eiffel Tower, a dedicated butler service, and an interior that whispers the secrets of French aristocracy.',
        price: '€12,000 / Night',
        size: '450m²',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
        amenities: ['Private Terrace', 'Butler Service', 'Grand Piano', 'Bulletproof Windows']
    },
    {
        id: 'royal',
        title: 'Royal Atelier',
        description: 'Designed for the creative soul. The Royal Atelier features floor-to-ceiling windows, natural north-facing light, and a curated library of art history books. A sanctuary for inspiration.',
        price: '€4,500 / Night',
        size: '120m²',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop', // Reusing high quality image
        amenities: ['North Facing Light', 'Art Library', 'Easel & Supplies', 'rain Shower']
    },
    {
        id: 'garden',
        title: 'Jardin Suite',
        description: 'An oasis within the city. This ground-floor suite opens directly into our private gardens, offering a seamless blend of indoor opulence and outdoor serenity.',
        price: '€3,200 / Night',
        size: '95m²',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop',
        amenities: ['Garden Access', 'Private Patio', 'Botanical Amenities', 'Soaking Tub']
    }
];

const SuiteSection = ({ suite, index }: { suite: typeof SUITES[0], index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <section className="py-20 md:py-32 border-b border-forest-800/5 last:border-0">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                    <div className="w-full lg:w-1/2">
                        <Reveal delay={0.2} className="relative aspect-[4/3] overflow-hidden">
                            <ParallaxImage src={suite.image} alt={suite.title} className="h-full w-full object-cover" />
                        </Reveal>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <Reveal>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-[1px] w-12 bg-terra-500"></div>
                                <span className="text-terra-500 text-xs font-bold tracking-widest uppercase">{suite.size}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display text-forest-800 leading-tight">{suite.title}</h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <p className="text-lg text-forest-800/70 font-sans leading-relaxed">
                                {suite.description}
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-2 gap-4 py-6 border-y border-forest-800/10">
                                {suite.amenities.map((amenity, i) => (
                                    <div key={i} className="flex items-center gap-2 text-forest-800/80 font-serif italic text-lg">
                                        <Check className="w-4 h-4 text-terra-500" />
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.3} className="flex items-center justify-between pt-4">
                            <div>
                                <span className="block text-sm text-forest-800/50 uppercase tracking-widest mb-1">Starting from</span>
                                <span className="text-2xl font-display text-forest-800">{suite.price}</span>
                            </div>
                            <Button variant="terra">Reserve Suite</Button>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

const SuitesPage: React.FC = () => {
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    return (
        <div className="bg-cream-50 min-h-screen">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-forest-900">
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                        alt="Suites Hero"
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                </motion.div>

                <div className="relative z-10 text-center text-white px-6">
                    <Reveal>
                        <span className="block text-sm uppercase tracking-[0.3em] mb-6 font-bold text-terra-500">Accommodations</span>
                        <h1 className="text-6xl md:text-8xl font-display font-medium mb-8">
                            The <span className="italic">Collection</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <Reveal>
                        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-forest-800">
                            "Each suite is a commissioned masterpiece, draped in history and appointed with the future in mind."
                        </p>
                        <div className="w-24 h-[1px] bg-terra-500 mx-auto mt-12"></div>
                    </Reveal>
                </div>
            </section>

            {/* Suites List */}
            <div>
                {SUITES.map((suite, index) => (
                    <SuiteSection key={suite.id} suite={suite} index={index} />
                ))}
            </div>

            {/* Enhancement: Call to Action */}
            <section className="py-32 bg-forest-900 text-cream-50 text-center px-6">
                <Reveal>
                    <h2 className="text-4xl font-display mb-8">Unsure which suite suits you?</h2>
                    <p className="text-white/60 mb-12 max-w-xl mx-auto">
                        Allow our dedicaded concierge to curate your perfect stay based on your preferences and desires.
                    </p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-forest-800">Contact Concierge</Button>
                </Reveal>
            </section>
        </div>
    );
};

export default SuitesPage;
