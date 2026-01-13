import React from "react";
import {Link} from "react-router-dom";

export const NavCard = ({ title, sub, goTo, colorVar }) => (
    <Link
        to={goTo}
        className={`bg-[var(--color-surface)] p-8 md:p-10 text-center shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-[20px] border-b-[8px] flex flex-col items-center justify-center min-h-[180px] w-full`}
        style={{ borderBottomColor: `var(--color-${colorVar})` }}
    >
        <h3 className="cinzel font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-lg md:text-xl mb-3 uppercase tracking-wider">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{sub}</p>
    </Link>
);