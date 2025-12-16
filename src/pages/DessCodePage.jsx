import React from "react";
import {SectionHeader} from "@/components/SectionHeader.jsx";
import {BackButton} from "@/components/BackButton.jsx";


export const DressCodePage = ({t, lang}) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.dress.title} sub={t.nav.dress.sub}/>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            {lang === 'en'
                ? "Think light fabrics, linen suits, and colorful dresses. The ceremony is on grass, so avoid stilettos."
                : "Tecidos leves, linho e vestidos coloridos. A cerimônia será na grama, evite salto fino."}
        </p>
        <div className="flex justify-center gap-4 mb-12">
            {['var(--color-muted)', 'var(--color-secondary)', 'var(--color-accent)', 'var(--color-highlight)'].map((c, i) => (
                <div key={i} className={`w-16 h-16 rounded-full border-4 border-white shadow-lg`}
                     style={{backgroundColor: c}}></div>
            ))}
        </div>
        <div className="bg-white p-8 rounded-[20px] max-w-md mx-auto shadow-sm">
            <h4 className="font-bold mb-4">Inspiration Board</h4>
            <button
                className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90">
                {lang === 'en' ? 'View on Pinterest' : 'Ver no Pinterest'}
            </button>
        </div>
    </div>
);