import {Image as ImageIcon} from "lucide-react";
import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StoryPage = ({ t, lang }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.story.title} sub={t.nav.story.sub} />
        <div className="max-w-2xl mx-auto border-l-2 border-[var(--color-secondary)] pl-8 text-left space-y-12 relative">
            {[
                { year: '2016', title: { en: "From work colleagues to lovers - or was it before?", pt: "De colegas de trabalho à namorados (ou será que foi antes?)" }, desc: { en: "A sunny afternoon at Bondi Beach changed everything.", pt: "Uma tarde ensolarada em Bondi mudou tudo." } },
                { year: '2017', title: { en: "The big move!", pt: "A grande mudança!" }, desc: { en: "Under the stars in Porto Seguro.", pt: "Sob as estrelas em Porto Seguro." } },
                { year: '2018', title: { en: "The first trips", pt: "As primeiras viagens!" }, desc: { en: "Under the stars in Porto Seguro.", pt: "Sob as estrelas em Porto Seguro." } },
                { year: '2019', title: { en: "xxx", pt: "xxx" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2020', title: { en: "Lockdown", pt: "A bolha da Australia" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2021', title: { en: "Our first home!", pt: "Nosso cantinho" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2022', title: { en: "Love for Disney!", pt: "Amor pela Disney!" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2023', title: { en: "Frozen Hearts", pt: "Coração de gelo!" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2024', title: { en: "The Proposal!", pt: "O Pedido :)" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2025', title: { en: "Planning & Trips", pt: "Viajando e Planejando" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true },
                { year: '2026', title: { en: "The Wedding!", pt: "O Casamento" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true }
            ].map((item, idx) => (
                <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[var(--color-bg)] border-2 border-[var(--color-primary)] rounded-full"></div>
                    <div className={`font-[var(--font-heading)] text-3xl font-bold mb-2 ${item.color ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'}`}>{item.year}</div>
                    <div className="bg-white p-6 rounded-[20px] shadow-sm">
                        <h4 className="text-xl font-bold mb-2">{item.title[lang]}</h4>
                        <p className="text-gray-600 mb-4">{item.desc[lang]}</p>

                        {/* Photo Placeholder */}
                        <div className="w-full h-64 bg-gray-50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
                            <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                            <span className="text-sm font-medium">Photo Space</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);