import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, MapPin, Calendar, Coffee, Plane, Home, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StoryPage = () => {
    const { t } = useTranslation();
    const timelineEvents = [
        {
            year: '2018',
            title: t('story.firstMeeting'),
            description: t('story.firstMeetingDesc'),
            icon: <Coffee className="w-6 h-6" />
        },
        {
            year: '2019',
            title: t('story.firstTrip'),
            description: t('story.firstTripDesc'),
            icon: <Plane className="w-6 h-6" />
        },
        {
            year: '2021',
            title: t('story.movingIn'),
            description: t('story.movingInDesc'),
            icon: <Home className="w-6 h-6" />
        },
        {
            year: '2024',
            title: t('story.proposal'),
            description: t('story.proposalDesc'),
            icon: <Star className="w-6 h-6" />
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">{t('story.title')}</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
                        {t('story.subtitle')}
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

                    {timelineEvents.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-24"
                >
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                    <p className="text-2xl font-serif text-primary italic">{t('story.footer')}</p>
                </motion.div>
            </div>
        </div>
    );
};

const TimelineItem = ({ event, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="w-full md:w-5/12" />

            <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg mb-4 md:mb-0">
                {event.icon}
            </div>

            <div className={`w-full md:w-5/12 text-center md:text-left ${isEven ? 'md:text-right' : ''}`}>
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/30 text-primary font-bold text-sm mb-4">
                        {event.year}
                    </span>
                    <h3 className="text-2xl font-bold text-stone-800 mb-3">{event.title}</h3>
                    <p className="text-stone-600 leading-relaxed">
                        {event.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default StoryPage;
