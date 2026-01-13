import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";
import {HelpCircle} from "lucide-react";

export const FAQPage = ({t, lang}) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.faq.title}/>
        {[
            {
                q: {"en-AU": "Onde os noivos vão se hospedar?", "pt-BR": "Onde os noivos vão se hospedar?"},
                a: {
                    "en-AU": "Ainda não sabemos 100%. No dia do casamento vamos ficar no hotel do casamento mesmo, mas nos dias anteriores, gostaríamos de ficar no mesmo local que a maioria dos convidados, logo vamos esperar um pouco para saber onde vão preferir e vamos decidir a partir daí",
                    "pt-BR": "Ainda não sabemos 100%. No dia do casamento vamos ficar no hotel do casamento mesmo, mas nos dias anteriores, gostaríamos de ficar no mesmo local que a maioria dos convidados, logo vamos esperar um pouco para saber onde vão preferir e vamos decidir a partir daí"
                }
            },
            {
                q: {"en-AU": "Is there a gift registry?", "pt-BR": "Onde está a lista de presentes?"},
                a: {
                    "en-AU": "Your presence is our gift!",
                    "pt-BR": `Esse é o mais claro e  menos clichê possível: “o nosso presente é você”. Sabemos que fazer um casamento em um local que não é próximo da casa da maioria dos convidados, muitos viajando do outro lado do mundo, já é um esforço gigantesco, e maior do que qualquer presente financeiro. Se fizerem muita questão, vamos ter oportunidade no casamento para vocês deixarem mensagens, uma carta escrita com carinho, e você entregando tudo na pista de dança vão ser nosso MELHOR pedido de presente realizado!`
                }
            },
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[20px] mb-4 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-[var(--color-primary)] mb-2">
                    <HelpCircle className="w-5 h-5 text-[var(--color-secondary)]"/>
                    {item.q[lang]}
                </div>
                <p className="text-gray-600 ml-7">{item.a[lang]}</p>
            </div>
        ))}
    </div>
);