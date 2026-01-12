import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";
import {HelpCircle} from "lucide-react";

export const FAQPage = ({ t, lang }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.faq.title} />
        {[
            { q: { en: "Are children invited?", pt: "Crianças são convidadas?" }, a: { en: "Yes, children are definetly welcome to the event.", pt: "Sim com certeza! Mas claro, é um evento que vai até tarde, e nao necessariamente vamos ter atividades para diferentes idades. Só pedimos, para se você for levar crianças, avisar aos noivos para podemos contabilizar." } },
            { q: { en: "Is there a gift registry?", pt: "Cadê a Lista de Presentes?" }, a: { en: "Your presence is our gift!", pt: "Sua presença é nosso presente! Já estamos fazendo vocês " } },
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[20px] mb-4 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-[var(--color-primary)] mb-2">
                    <HelpCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                    {item.q[lang]}
                </div>
                <p className="text-gray-600 ml-7">{item.a[lang]}</p>
            </div>
        ))}
    </div>
);