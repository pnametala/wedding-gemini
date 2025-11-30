import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, GlassWater, Music, Camera, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Itinerary = () => {
    const [activeTab, setActiveTab] = useState('wedding');
    const { t } = useTranslation();

    const days = [
        {
            id: 'pre',
            title: t('itinerary.pre'),
            date: 'Dec 11',
            activities: [
                { time: '4:00 PM', title: t('itinerary.welcomeDrinks'), icon: <GlassWater className="w-5 h-5" />, desc: t('itinerary.welcomeDrinksDesc') },
                { time: '7:00 PM', title: t('itinerary.rehearsalDinner'), icon: <Moon className="w-5 h-5" />, desc: t('itinerary.rehearsalDinnerDesc') }
            ]
        },
        {
            id: 'wedding',
            title: t('itinerary.wedding'),
            date: 'Dec 12',
            activities: [
                { time: '3:00 PM', title: t('itinerary.ceremony'), icon: <Heart className="w-5 h-5" />, desc: t('itinerary.ceremonyDesc') },
                { time: '4:30 PM', title: t('itinerary.cocktailHour'), icon: <GlassWater className="w-5 h-5" />, desc: t('itinerary.cocktailHourDesc') },
                { time: '6:00 PM', title: t('itinerary.reception'), icon: <Music className="w-5 h-5" />, desc: t('itinerary.receptionDesc') }
            ]
        },
        {
            id: 'post',
            title: t('itinerary.post'),
            date: 'Dec 13',
            activities: [
                { time: '11:00 AM', title: t('itinerary.farewellBrunch'), icon: <Sun className="w-5 h-5" />, desc: t('itinerary.farewellBrunchDesc') },
                { time: '2:00 PM', title: t('itinerary.beachDay'), icon: <Camera className="w-5 h-5" />, desc: t('itinerary.beachDayDesc') }
            ]
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-12">{t('itinerary.title')}</h2>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="flex space-x-2 bg-secondary/30 p-1 rounded-full">
                    {days.map((day) => (
                        <button
                            key={day.id}
                            onClick={() => setActiveTab(day.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === day.id
                                ? 'bg-primary text-white shadow-md'
                                : 'text-primary/70 hover:text-primary hover:bg-white/50'
                                }`}
                        >
                            <span className="block font-bold">{day.title}</span>
                            <span className="text-xs opacity-80">{day.date}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                    {days.map((day) => (
                        activeTab === day.id && (
                            <motion.div
                                key={day.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <div className="grid gap-6">
                                    {day.activities.map((activity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                                        >
                                            <div className="p-3 bg-secondary/20 rounded-full text-primary">
                                                {activity.icon}
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold text-primary/80 uppercase tracking-wide">{activity.time}</span>
                                                <h3 className="text-xl font-bold text-stone-800 mb-1">{activity.title}</h3>
                                                <p className="text-stone-600">{activity.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Itinerary;
