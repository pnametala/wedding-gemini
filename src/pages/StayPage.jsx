import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StayPage = ({ t, lang }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.stay.title} />
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <p className="mb-6 text-gray-600">{lang === 'en' ? "We recommend staying in Trancoso or Arraial d'Ajuda. Shuttles will be provided." : "Recomendamos ficar em Trancoso ou Arraial d'Ajuda. Haverá vans."}</p>
                {['UXUA Casa Hotel', 'Pousada Estrela D\'Água', 'Hotel Fasano'].map((hotel, i) => (
                    <div key={i} className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                        <h4 className="font-bold text-[var(--color-primary)]">{hotel}</h4>
                        <p className="text-sm text-gray-500">Trancoso • Bahia</p>
                    </div>
                ))}
            </div>
            <div className="h-[400px] bg-gray-200 rounded-[20px] overflow-hidden border-4 border-white shadow-md">
                <iframe title="Map" className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61394.88737192464!2d-39.09841892558591!3d-16.59160454359873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x736931215b00429%3A0x67822941548e65e6!2sTrancoso%2C%20Porto%20Seguro%20-%20State%20of%20Bahia%2C%20Brazil!5e0!3m2!1sen!2sus!4v1709420000000!5m2!1sen!2sus" loading="lazy"></iframe>
            </div>
        </div>
    </div>
);