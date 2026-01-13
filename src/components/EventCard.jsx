import React from "react";

export const EventCard = ({ time, title, desc, badge, badgeColor, align }) => {
    // Map internal logic names to our new CSS variables
    const badgeColors = {
        sage: 'var(--color-muted)',
        orange: 'var(--color-secondary)',
        blue: 'var(--color-highlight)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        highlight: 'var(--color-highlight)',
        default: 'var(--color-highlight)'
    };
    const bgColor = badgeColors[badgeColor] || badgeColors.default;

    return (
        <div className={`relative bg-white p-6 rounded-[20px] shadow-sm mb-8 w-full md:w-[45%] border-2 border-transparent hover:border-[var(--color-accent)] transition-all hover:-translate-y-1 z-10 
      ${align === 'left' ? 'md:mr-auto text-left md:text-right' : 'md:ml-auto text-left'}`}
        >
            <div className={`hidden md:block absolute w-5 h-5 bg-white border-4 border-[var(--color-secondary)] rounded-full top-8 shadow-[0_0_0_4px_var(--color-bg)] z-20
        ${align === 'left' ? '-right-[57px]' : '-left-[57px]'}`}
            />
            {badge && (
                <span
                    className="inline-block text-white px-3 py-1 rounded-xl text-xs font-bold uppercase mb-2 -rotate-1"
                    style={{ backgroundColor: bgColor }}
                >
                    {badge}
                </span>
            )}
            <span className="block font-[var(--font-heading)] font-bold text-2xl text-[var(--color-primary)] mb-1">{time}</span>
            <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
};