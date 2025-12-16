import React from "react";

export const SectionHeader = ({ title, sub }) => (
    <div className="text-center mb-12">
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-primary)] mb-2">{title}</h2>
        {sub && <p className="text-xl">{sub}</p>}
    </div>
);