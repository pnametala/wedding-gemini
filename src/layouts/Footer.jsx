import React from "react";

export const Footer = () => (
    <footer
        className="bg-[var(--color-primary)] text-[var(--color-bg)] py-20 text-center border-t-[10px] border-[var(--color-accent)]">
        <h2 className="autography font-[var(--font-script)] text-5xl mb-6">Raissa & Pedro</h2>
        <div className="flex flex-col gap-2 font-[var(--font-heading)] text-sm opacity-80 mb-8">
            <p>Porto Seguro, Bahia, 2026</p>
        </div>
        <div className="font-bold text-[var(--color-muted)] tracking-widest text-lg">#RaissaPedroBahia</div>
    </footer>
);