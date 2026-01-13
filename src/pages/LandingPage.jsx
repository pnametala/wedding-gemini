import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Home, Plane, Gift, Image, HelpCircle } from 'lucide-react';
import Countdown from '../components/Countdown';
import Itinerary from '../components/Itinerary';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const { t } = useTranslation();

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const navItems = [
        { title: t('nav.story'), icon: <Heart className="w-6 h-6" />, path: "/story", color: "bg-primary/90" },
        { title: t('landing.whereToStay'), icon: <Home className="w-6 h-6" />, path: "/guide", color: "bg-secondary/90" },
        { title: t('landing.gettingThere'), icon: <Plane className="w-6 h-6" />, path: "/guide", color: "bg-primary/80" },
        { title: t('nav.registry'), icon: <Gift className="w-6 h-6" />, path: "#", color: "bg-secondary/80" },
        { title: t('nav.gallery'), icon: <Image className="w-6 h-6" />, path: "#", color: "bg-primary/70" },
        { title: t('nav.faq'), icon: <HelpCircle className="w-6 h-6" />, path: "#", color: "bg-secondary/70" },
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Section with Parallax */}
            <div ref={ref} className="relative h-screen overflow-hidden">
                {/* Background Layer - Placeholder for Watercolor Image */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: backgroundY }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/20 to-stone-50" />
                    {/* Placeholder Image */}
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                        alt="Beach Watercolor Placeholder"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    className="relative z-10 h-full flex flex-col items-center justify-center text-center text-primary-foreground drop-shadow-md px-4 pt-20"
                    style={{ y: textY }}
                >
                    <h1 className="text-6xl md:text-9xl font-serif font-bold mb-4 tracking-tight text-primary">
                    </h1>
                    <p className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase mb-8 text-stone-600">
                        {t('landing.location')}
                    </p>

                    {/* Countdown */}
                    <div className="mb-12 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                        <Countdown targetDate="2025-12-12T15:00:00" />
                    </div>

                    {/* RSVP Button */}
                    <Link
                        to="/rsvp"
                        className="bg-primary text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        {t('landing.rsvpNow')}
                    </Link>
                </motion.div>

                {/* Navigation Grid - Overlapping Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2 px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className={`${item.color} backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center justify-center text-center gap-3 text-white group h-32 md:h-40`}
                            >
                                <div className="p-2 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="font-bold text-sm md:text-base leading-tight">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer for overlapping grid */}
            <div className="h-32 md:h-40 bg-stone-50" />

            {/* Itinerary Section */}
            <section className="py-20 bg-stone-50 relative z-10">
                <Itinerary />
            </section>
        </div>
    );
};

export default LandingPage;
