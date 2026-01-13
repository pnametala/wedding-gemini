import React, {useState} from "react";
import {BadgeQuestionMark, Heart, Info, Sparkles, Sun} from "lucide-react";
import {callGemini} from "@/pages/wedding-raissa.jsx";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const DestinationPage = ({ t, lang }) => {
    const [query, setQuery] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setAiResponse('');

        const sysPrompt = `You are a friendly local expert for a wedding in Trancoso and Porto Seguro, Bahia. Provide short, helpful, tropical-themed advice about travel, food, or safety. Language: ${lang === 'en-AU' ? 'English' : 'Portuguese'}.`;
        const response = await callGemini(query, sysPrompt);

        setAiResponse(response);
        setLoading(false);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
            <BackButton  lang={lang} />
            <SectionHeader title={t.nav.dest.title} sub={t.nav.dest.sub} />

            {/* AI Concierge Section */}
            {/*<div className="mb-12 bg-gradient-to-r from-[var(--color-primary)] to-[#1a2e26] p-8 rounded-[20px] shadow-lg text-white">*/}
            {/*    <div className="flex items-center gap-3 mb-4">*/}
            {/*        <Sparkles className="text-[var(--color-accent)] w-6 h-6" />*/}
            {/*        <h3 className="font-[var(--font-heading)] text-2xl font-bold">{t.ai_guide.title}</h3>*/}
            {/*    </div>*/}
            {/*    <p className="text-white/80 mb-6">{t.ai_guide.intro}</p>*/}

            {/*    <div className="flex flex-col md:flex-row gap-3">*/}
            {/*        <input*/}
            {/*            value={query}*/}
            {/*            onChange={(e) => setQuery(e.target.value)}*/}
            {/*            placeholder={t.ai_guide.placeholder}*/}
            {/*            className="flex-1 p-3 rounded-xl border-none text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none"*/}
            {/*        />*/}
            {/*        <button*/}
            {/*            onClick={handleAsk}*/}
            {/*            disabled={loading}*/}
            {/*            className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"*/}
            {/*        >*/}
            {/*            {loading ? t.ai_guide.loading : <>{t.ai_guide.btn} <Sparkles size={16} /></>}*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    {aiResponse && (*/}
            {/*        <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20 animate-[fade-in_0.5s_ease-out]">*/}
            {/*            <p className="leading-relaxed">{aiResponse}</p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
            <div className="mt-8 mb-8 bg-white p-8 rounded-[20px] shadow-sm border-l-4 border-[var(--color-accent)]">
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)] mb-4 font-bold flex items-center gap-2">
                    <BadgeQuestionMark className="w-5 h-5 text-[var(--color-accent)]" /> Por que Porto Seguro?
                </h3>
                <div className="">
                    <p className={"pb-2"}>
                        Para muitos, Porto Seguro é o berço do Brasil. Para nós, é o lugar onde nossa história ganhou raízes antes de atravessar o oceano.
                    </p>
                    <p className={"pb-2"}>
                        Quem conhece a Raissa sabe que, muito antes de virar consultora, o habitat natural dela eram os palcos da Bahia. Criada entre danças e a energia contagiante do Nordeste, o Axé sempre foi a trilha sonora das idas e vindas de carro entre Governador Valadares e Porto Seguro com a Família, e nos longos verões que eles passavam pela cidade.
                    </p>
                    <p className={"pb-2"}>
                        E quem conhece o Pedro, sabe que ele não foge de um desafio. Logo no primeiro mês de namoro, ele topou uma verdadeira "prova de fogo": viajar para Porto Seguro para conhecer os sogros, apenas alguns dias antes de mudar definitivamente para a Austrália. O carioca de jeito malandro e sorriso no rosto, já não perdeu tempo e na primeira noite já foi ganhando a família ao ficar até 4 da manhã bebendo cerveja com o futuro sogro na beirada da piscina.
                    </p>
                    <p className={"pb-2"}>
                        Para completar, o destino deu o seu aval: um show de Elba Ramalho e Mestrinho iria acontecer na cidade logo naquele final de semana. Raissa, apesar de gostar de dança, nunca se imaginou indo a um show de forró, muito menos em Porto Seguro (cidade do axé)! Pedro, por outro lado, foi o que mais se animou, e agitou logo o evento, e foi com toda a família para o show. Ali foi o primeiro exemplo do que seria a vida desse casal: uma mistura vibrante de muita parceria, espontaneidade e energia lá em cima!
                    </p>
                    <p className={"pb-2"}>
                        Porto Seguro vai ser palco do nosso sim, não só pela história que temos com a cidade, mas também porque ela tem essa alma única, que de certa maneira combina com o casal: uma mistura de "confusão" boa, energia e um acolhimento que abraça qualquer estilo e pessoa que passe por lá. É o lugar perfeito para reunir quem amamos, recarregar as energias com o sol da Bahia e celebrar a nossa união onde tivemos os primeiros exemplos mais concretos de como seria a vida daqui pra frente.
                    </p>
                    <p className={"pb-2"}>
                        Preparem o protetor solar, o rebolado e a disposição: a gente se encontra na Bahia!
                    </p>
                </div>
            </div>

            {/*<div className="grid md:grid-cols-2 gap-8">*/}
            {/*    <div className="bg-white p-8 rounded-[20px] shadow-sm">*/}
            {/*        <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-secondary)] mb-4 border-b pb-2 flex items-center gap-2">*/}
            {/*            <Sun className="w-5 h-5" /> {lang === 'en-AU' ? 'Things to Do' : 'O Que Fazer'}*/}
            {/*        </h3>*/}
            {/*        <ul className="space-y-4">*/}
            {/*            <li>*/}
            {/*                <strong className="block text-[var(--color-primary)]">The Quadrado (Trancoso)</strong>*/}
            {/*                <span className="text-sm text-gray-600">{lang === 'en-AU' ? "A historic village square with colorful houses, shops, and a stunning white church. Best at sunset!" : "O coração de Trancoso. Casinhas coloridas, o famoso campinho e a igrejinha. Imperdível no pôr do sol!"}</span>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <strong className="block text-[var(--color-primary)]">Praia do Espelho</strong>*/}
            {/*                <span className="text-sm text-gray-600">{lang === 'en-AU' ? "Famous for its natural pools and cliffs. Arrive at low tide." : "Famosa pelas piscinas naturais e falésias. Chegue na maré baixa."}</span>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}

            {/*    <div className="bg-white p-8 rounded-[20px] shadow-sm">*/}
            {/*        <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-secondary)] mb-4 border-b pb-2 flex items-center gap-2">*/}
            {/*            <Heart className="w-5 h-5" /> {lang === 'en-AU' ? 'Where to Eat' : 'Onde Comer'}*/}
            {/*        </h3>*/}
            {/*        <ul className="space-y-4">*/}
            {/*            <li>*/}
            {/*                <strong className="block text-[var(--color-primary)]">Capim Santo</strong>*/}
            {/*                <span className="text-sm text-gray-600">{lang === 'en-AU' ? "A classic in Trancoso. Delicious seafood in a garden." : "Um clássico. Frutos do mar deliciosos em um jardim."}</span>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <strong className="block text-[var(--color-primary)]">Maritaca</strong>*/}
            {/*                <span className="text-sm text-gray-600">{lang === 'en-AU' ? "Best pizza in town. Great atmosphere for groups." : "Melhor pizza da cidade. Ótima para grupos."}</span>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="mt-8 bg-white p-8 rounded-[20px] shadow-sm border-l-4 border-[var(--color-accent)]">*/}
            {/*    <h3 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)] mb-4 font-bold flex items-center gap-2">*/}
            {/*        <Info className="w-5 h-5 text-[var(--color-accent)]" /> {lang === 'en-AU' ? 'Tips for Guests' : 'Dicas'}*/}
            {/*    </h3>*/}
            {/*    <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">*/}
            {/*        <div><strong>Safety:</strong> {lang === 'en-AU' ? "Trancoso is safe, but avoid deserted beaches at night." : "Trancoso é seguro, mas evite praias desertas à noite."}</div>*/}
            {/*        <div><strong>Transport:</strong> {lang === 'en-AU' ? "Uber is limited. Rent a car or use taxis." : "Uber é limitado. Alugue carro ou use táxis."}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};