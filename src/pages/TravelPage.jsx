import {MapPin, Plane} from "lucide-react";
import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const TravelPage = ({ t, lang }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.travel.title} />
        <div className="bg-white p-8 rounded-[20px] shadow-sm text-left">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2"><Plane className="w-5 h-5" /> Flights</h3>
                <p className="text-gray-600">
                    {lang === 'en' ? "Fly into Porto Seguro Airport (BPS). 1h drive to Trancoso." : "Voe para Porto Seguro (BPS). 1h de carro até Trancoso."}
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Transfers</h3>
                <p className="text-gray-600">
                    {lang === 'en' ? "We recommend booking a private transfer or rental car." : "Para os que vão ficar muitos dias, aluguél de carro pode ajudar na locomoção. Mas estamos no momento olhando um transfer para levar dos hotéis ate os locais dos eventos. Main informações em breve."}
                </p>
            </div>
        </div>
    </div>
);