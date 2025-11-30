import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const { t } = useTranslation();

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex gap-4 md:gap-8 justify-center text-white">
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-bold font-serif">
                        {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                    </span>
                    <span className="text-xs md:text-sm uppercase tracking-widest opacity-80">
                        {t(`landing.${interval}`)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
