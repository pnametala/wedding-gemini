import React, { useState, useEffect } from 'react';
import { MapPin, X, Heart, Plane, Home, HelpCircle, Sun, Info, Image as ImageIcon, Sparkles, MessageSquare } from 'lucide-react';

/* --- GEMINI API UTILITIES --- */

const apiKey = ""; // API key injected at runtime

async function callGemini(prompt, systemInstruction = "") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] }
    };

    const delays = [1000, 2000, 4000, 8000, 16000];
    for (let i = 0; i <= 5; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        } catch (error) {
            if (i === 5) return "The tropical spirits are quiet right now. Please try again later.";
            await new Promise(res => setTimeout(res, delays[i]));
        }
    }
}

/* --- 1. DATA & CONFIGURATION --- */

const CONTENT = {
    en: {
        rsvp_btn: "Confirm Presence",
        subtitle: "Porto Seguro - Bahia - Brazil",
        date: "19th September 2026",
        nav: {
            story: { title: "Our Story", sub: "From Australia to Bahia" },
            stay: { title: "Where to Stay", sub: "Hotels & Map" },
            dress: { title: "Dress Code", sub: "Tropical Formal" },
            faq: { title: "FAQ", sub: "Questions & Answers" },
            travel: { title: "Travel", sub: "Flights & Tips" },
            dest: { title: "The Destination", sub: "Discover Bahia" }
        },
        itinerary: {
            title: "The Lineup",
            sub: "A Wedding Festival",
            tabs: ["Day 1: Pre-Wedding", "Day 2: The Big Day", "Day 3: Recovery"],
            events: {
                pre: [
                    { time: "10:00", title: "Beach Day", desc: "Let's enjoy a chill day in a private area at the beach so we prepare for the big day!", badge: "Chill", color: "highlight" },
                    { time: "19:00", title: "Welcome Dinner", desc: "Come enjoy a tasty Bahia dinner with us.", badge: "Dinner", color: "secondary" },
                    { time: "22:00", title: "Axé Moi", desc: "Get ready to experience what's most unique about Porto Seguro, get your dance moves and energy up.", badge: "Party", color: "muted" }
                ],
                wed: [
                    { time: "15:30", title: "Ceremony", desc: "Chapel on the Hill. Don't be late!", badge: "Main Stage", color: "secondary" },
                    { time: "17:00", title: "Party Starts", desc: "Let the celebration begin!" },
                    { time: "18:30", title: "Band 1 Starts", desc: "Live music to get us moving." },
                    { time: "21:00", title: "Band 2 Starts", desc: "Keep the energy high!" }
                ],
                post: [
                    { time: "10:00", title: "Recovery", desc: "Meet us at the beach for a wind down after.", badge: "Relax", color: "highlight" }
                ]
            }
        },
        modal: {
            title_auth: "RSVP Access",
            hint: "Hint: trancoso",
            unlock: "Unlock",
            title_form: "Welcome",
            name: "Full Name",
            attending: "Will you attend?",
            plus_one: "Bringing a +1?",
            plus_one_name: "Name of +1",
            dietary: "Dietary Requirements",
            message: "Message (Optional)",
            ai_wish_btn: "✨ Draft a Wish",
            ai_wish_loading: "Dreaming up words...",
            yes: "Yes, I'm in!",
            no: "Sadly, no",
            submit: "Send RSVP"
        },
        ai_guide: {
            title: "✨ Ask the AI Concierge",
            placeholder: "e.g., Best place for acai? Is it safe at night?",
            btn: "Ask Gemini",
            loading: "Consulting the locals...",
            intro: "Need a tip for Trancoso or Porto Seguro? Ask our AI expert!"
        }
    },
    pt: {
        rsvp_btn: "Confirmar Presença",
        subtitle: "Porto Seguro - Bahia - Brasil",
        date: "19 de Setembro de 2026",
        nav: {
            story: { title: "Nossa História", sub: "Da Austrália para Bahia" },
            stay: { title: "Hospedagem", sub: "Hotéis e Mapa" },
            dress: { title: "Traje", sub: "Esporte Fino Tropical" },
            faq: { title: "Dúvidas", sub: "Perguntas Frequentes" },
            travel: { title: "Viagem", sub: "Voos e Dicas" },
            dest: { title: "O Destino", sub: "Descubra a Bahia" }
        },
        itinerary: {
            title: "O Lineup",
            sub: "Nosso Festival de Amor",
            tabs: ["Dia 1: Boas Vindas", "Dia 2: O Casamento", "Dia 3: Ressaca"],
            events: {
                pre: [
                    { time: "10:00", title: "Dia de Praia", desc: "Vamos curtir um dia relax em uma área privada na praia para nos prepararmos para o grande dia!", badge: "Relax", color: "highlight" },
                    { time: "19:00", title: "Jantar de Boas-vindas", desc: "Venha desfrutar de um saboroso jantar baiano conosco.", badge: "Jantar", color: "secondary" },
                    { time: "22:00", title: "Axé Moi", desc: "Prepare-se para vivenciar o que Porto Seguro tem de mais único, prepare os passinhos e a energia.", badge: "Festa", color: "muted" }
                ],
                wed: [
                    { time: "15:30", title: "Cerimônia", desc: "Capela da Colina. Não se atrase!", badge: "Palco Principal", color: "secondary" },
                    { time: "17:00", title: "Início da Festa", desc: "Que comece a celebração!" },
                    { time: "18:30", title: "Banda 1", desc: "Música ao vivo para começar." },
                    { time: "21:00", title: "Banda 2", desc: "A energia continua!" }
                ],
                post: [
                    { time: "10:00", title: "Ressaca", desc: "Encontre-nos na praia para relaxar depois.", badge: "Relax", color: "highlight" }
                ]
            }
        },
        modal: {
            title_auth: "Acesso ao RSVP",
            hint: "Dica: trancoso",
            unlock: "Entrar",
            title_form: "Bem-vindo",
            name: "Nome Completo",
            attending: "Você irá?",
            plus_one: "Levará acompanhante (+1)?",
            plus_one_name: "Nome do Acompanhante",
            dietary: "Restrições Alimentares",
            message: "Mensagem (Opcional)",
            ai_wish_btn: "✨ Criar Mensagem",
            ai_wish_loading: "Escrevendo...",
            yes: "Sim, com certeza!",
            no: "Infelizmente não",
            submit: "Enviar Confirmação"
        },
        ai_guide: {
            title: "✨ Pergunte ao Concierge IA",
            placeholder: "ex: Onde comer moqueca? É seguro à noite?",
            btn: "Perguntar Gemini",
            loading: "Consultando os locais...",
            intro: "Precisa de uma dica sobre Trancoso ou Porto Seguro? Pergunte à nossa IA!"
        }
    }
};

/* --- 2. SHARED UI COMPONENTS --- */

const BackButton = ({ onClick, lang }) => (
    <button
        onClick={onClick}
        className="mb-8 px-6 py-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-2"
    >
        <Home className="w-4 h-4" /> {lang === 'en' ? 'Back Home' : 'Voltar ao Início'}
    </button>
);

const NavCard = ({ title, sub, onClick, colorVar }) => (
    <div
        onClick={onClick}
        className={`bg-[var(--color-surface)] p-8 md:p-10 text-center shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-[20px] border-b-[8px] flex flex-col items-center justify-center min-h-[220px] w-full`}
        style={{ borderBottomColor: `var(--color-${colorVar})` }}
    >
        <h3 className="cinzel font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-lg md:text-xl mb-3 uppercase tracking-wider">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{sub}</p>
    </div>
);

const EventCard = ({ time, title, desc, badge, badgeColor, align }) => {
    // Map internal logic names to our new CSS variables
    const badgeColors = {
        sage: 'var(--color-muted)',
        orange: 'var(--color-secondary)',
        blue: 'var(--color-highlight)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        highlight: 'var(--color-highlight)',
        default: 'var(--color-highlight)'
    };
    const bgColor = badgeColors[badgeColor] || badgeColors.default;

    return (
        <div className={`relative bg-white p-6 rounded-[20px] shadow-sm mb-8 w-full md:w-[45%] border-2 border-transparent hover:border-[var(--color-accent)] transition-all hover:-translate-y-1 z-10 
      ${align === 'left' ? 'md:mr-auto text-left md:text-right' : 'md:ml-auto text-left'}`}
        >
            <div className={`hidden md:block absolute w-5 h-5 bg-white border-4 border-[var(--color-secondary)] rounded-full top-8 shadow-[0_0_0_4px_var(--color-bg)] z-20
        ${align === 'left' ? '-right-[44px]' : '-left-[44px]'}`}
            />
            {badge && (
                <span
                    className="inline-block text-white px-3 py-1 rounded-xl text-xs font-bold uppercase mb-2 -rotate-1"
                    style={{ backgroundColor: bgColor }}
                >
                    {badge}
                </span>
            )}
            <span className="block font-[var(--font-heading)] font-bold text-2xl text-[var(--color-primary)] mb-1">{time}</span>
            <h4 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
};

const SectionHeader = ({ title, sub }) => (
    <div className="text-center mb-12">
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-primary)] mb-2">{title}</h2>
        {sub && <p className="text-xl">{sub}</p>}
    </div>
);

/* --- 3. PAGE COMPONENTS --- */

const StoryPage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton onClick={onBack} lang={lang} />
        <SectionHeader title={t.nav.story.title} sub={t.nav.story.sub} />
        <div className="max-w-2xl mx-auto border-l-2 border-[var(--color-secondary)] pl-8 text-left space-y-12 relative">
            {[
                { year: '2018', title: { en: "We Met in Sydney", pt: "Nos Conhecemos em Sydney" }, desc: { en: "A sunny afternoon at Bondi Beach changed everything.", pt: "Uma tarde ensolarada em Bondi mudou tudo." } },
                { year: '2020', title: { en: "First Trip to Bahia", pt: "Primeira Viagem à Bahia" }, desc: { en: "We fell in love with the magic of Trancoso.", pt: "Nos apaixonamos pela magia de Trancoso." } },
                { year: '2024', title: { en: "The Proposal", pt: "O Pedido" }, desc: { en: "Under the stars in Porto Seguro.", pt: "Sob as estrelas em Porto Seguro." } },
                { year: '2026', title: { en: "The Wedding", pt: "O Casamento" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true }
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

const DestinationPage = ({ t, lang, onBack }) => {
    const [query, setQuery] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setAiResponse('');

        const sysPrompt = `You are a friendly local expert for a wedding in Trancoso and Porto Seguro, Bahia. Provide short, helpful, tropical-themed advice about travel, food, or safety. Language: ${lang === 'en' ? 'English' : 'Portuguese'}.`;
        const response = await callGemini(query, sysPrompt);

        setAiResponse(response);
        setLoading(false);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
            <BackButton onClick={onBack} lang={lang} />
            <SectionHeader title={t.nav.dest.title} sub={t.nav.dest.sub} />

            {/* AI Concierge Section */}
            <div className="mb-12 bg-gradient-to-r from-[var(--color-primary)] to-[#1a2e26] p-8 rounded-[20px] shadow-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-[var(--color-accent)] w-6 h-6" />
                    <h3 className="font-[var(--font-heading)] text-2xl font-bold">{t.ai_guide.title}</h3>
                </div>
                <p className="text-white/80 mb-6">{t.ai_guide.intro}</p>

                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t.ai_guide.placeholder}
                        className="flex-1 p-3 rounded-xl border-none text-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none"
                    />
                    <button
                        onClick={handleAsk}
                        disabled={loading}
                        className="bg-[var(--color-accent)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? t.ai_guide.loading : <>{t.ai_guide.btn} <Sparkles size={16} /></>}
                    </button>
                </div>

                {aiResponse && (
                    <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20 animate-[fade-in_0.5s_ease-out]">
                        <p className="leading-relaxed">{aiResponse}</p>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[20px] shadow-sm">
                    <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-secondary)] mb-4 border-b pb-2 flex items-center gap-2">
                        <Sun className="w-5 h-5" /> {lang === 'en' ? 'Things to Do' : 'O Que Fazer'}
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <strong className="block text-[var(--color-primary)]">The Quadrado (Trancoso)</strong>
                            <span className="text-sm text-gray-600">{lang === 'en' ? "A historic village square with colorful houses, shops, and a stunning white church. Best at sunset!" : "O coração de Trancoso. Casinhas coloridas, o famoso campinho e a igrejinha. Imperdível no pôr do sol!"}</span>
                        </li>
                        <li>
                            <strong className="block text-[var(--color-primary)]">Praia do Espelho</strong>
                            <span className="text-sm text-gray-600">{lang === 'en' ? "Famous for its natural pools and cliffs. Arrive at low tide." : "Famosa pelas piscinas naturais e falésias. Chegue na maré baixa."}</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-[20px] shadow-sm">
                    <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-secondary)] mb-4 border-b pb-2 flex items-center gap-2">
                        <Heart className="w-5 h-5" /> {lang === 'en' ? 'Where to Eat' : 'Onde Comer'}
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <strong className="block text-[var(--color-primary)]">Capim Santo</strong>
                            <span className="text-sm text-gray-600">{lang === 'en' ? "A classic in Trancoso. Delicious seafood in a garden." : "Um clássico. Frutos do mar deliciosos em um jardim."}</span>
                        </li>
                        <li>
                            <strong className="block text-[var(--color-primary)]">Maritaca</strong>
                            <span className="text-sm text-gray-600">{lang === 'en' ? "Best pizza in town. Great atmosphere for groups." : "Melhor pizza da cidade. Ótima para grupos."}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 bg-white p-8 rounded-[20px] shadow-sm border-l-4 border-[var(--color-accent)]">
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)] mb-4 font-bold flex items-center gap-2">
                    <Info className="w-5 h-5 text-[var(--color-accent)]" /> {lang === 'en' ? 'Tips for Guests' : 'Dicas'}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div><strong>Safety:</strong> {lang === 'en' ? "Trancoso is safe, but avoid deserted beaches at night." : "Trancoso é seguro, mas evite praias desertas à noite."}</div>
                    <div><strong>Transport:</strong> {lang === 'en' ? "Uber is limited. Rent a car or use taxis." : "Uber é limitado. Alugue carro ou use táxis."}</div>
                </div>
            </div>
        </div>
    );
};

const StayPage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton onClick={onBack} lang={lang} />
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

const DressCodePage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton onClick={onBack} lang={lang} />
        <SectionHeader title={t.nav.dress.title} sub={t.nav.dress.sub} />
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            {lang === 'en'
                ? "Think light fabrics, linen suits, and colorful dresses. The ceremony is on grass, so avoid stilettos."
                : "Tecidos leves, linho e vestidos coloridos. A cerimônia será na grama, evite salto fino."}
        </p>
        <div className="flex justify-center gap-4 mb-12">
            {['var(--color-muted)', 'var(--color-secondary)', 'var(--color-accent)', 'var(--color-highlight)'].map((c, i) => (
                <div key={i} className={`w-16 h-16 rounded-full border-4 border-white shadow-lg`} style={{ backgroundColor: c }}></div>
            ))}
        </div>
        <div className="bg-white p-8 rounded-[20px] max-w-md mx-auto shadow-sm">
            <h4 className="font-bold mb-4">Inspiration Board</h4>
            <button className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90">
                {lang === 'en' ? 'View on Pinterest' : 'Ver no Pinterest'}
            </button>
        </div>
    </div>
);

const FAQPage = ({ t, lang, onBack }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton onClick={onBack} lang={lang} />
        <SectionHeader title={t.nav.faq.title} />
        {[
            { q: { en: "Are children invited?", pt: "Crianças são convidadas?" }, a: { en: "Adults-only event.", pt: "Evento apenas para adultos." } },
            { q: { en: "Is there a gift registry?", pt: "Lista de Presentes?" }, a: { en: "Your presence is our gift!", pt: "Sua presença é nosso presente!" } },
            { q: { en: "How to get there?", pt: "Como chegar?" }, a: { en: "Shuttles from Trancoso Quadrado.", pt: "Vans saindo do Quadrado." } }
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

const TravelPage = ({ t, lang, onBack }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton onClick={onBack} lang={lang} />
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
                    {lang === 'en' ? "We recommend booking a private transfer or rental car." : "Recomendamos transfer privado ou aluguel de carro."}
                </p>
            </div>
        </div>
    </div>
);

const HomePage = ({ t, setView, onOpenModal }) => {
    const [itineraryTab, setItineraryTab] = useState('wed');

    return (
        <>
            {/* HERO SECTION */}
            <section className="h-screen flex flex-col justify-center items-center text-center relative bg-[url('/background.png')] bg-fixed bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/30 to-[var(--color-bg)]/60"></div>
                <div className="relative z-10 px-4 -mt-12 w-full animate-[float_6s_ease-in-out_infinite]">
                    <h1 className="font-[var(--font-script)] text-6xl md:text-8xl text-[var(--color-primary)] mb-2 drop-shadow-sm autography">Raissa & Pedro</h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 font-[var(--font-heading)] text-lg md:text-xl tracking-[0.2em] text-[var(--color-primary)] font-bold uppercase mb-8 drop-shadow-sm">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                            <span className='cinzel'>{t.subtitle}</span>
                        </div>
                    </div>
                    <div className="border-y-2 border-[var(--color-primary)] py-3 mb-10 inline-block">
                        <span className="cinzel font-[var(--font-heading)] text-xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest">{t.date}</span>
                    </div>
                    <br />
                    <button onClick={onOpenModal} className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-[var(--font-heading)] font-bold tracking-widest border border-[var(--color-secondary)] hover:bg-[#d65b38] hover:-translate-y-1 hover:shadow-lg transition-all">
                        {t.rsvp_btn}
                    </button>
                </div>
            </section>

            {/* NAV GRID */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-32 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    <NavCard title={t.nav.story.title} sub={t.nav.story.sub} onClick={() => setView('story')} colorVar="primary" />
                    <NavCard title={t.nav.stay.title} sub={t.nav.stay.sub} onClick={() => setView('stay')} colorVar="secondary" />
                    <NavCard title={t.nav.dress.title} sub={t.nav.dress.sub} onClick={() => setView('dress')} colorVar="highlight" />
                    <NavCard title={t.nav.faq.title} sub={t.nav.faq.sub} onClick={() => setView('faq')} colorVar="muted" />
                    <NavCard title={t.nav.travel.title} sub={t.nav.travel.sub} onClick={() => setView('travel')} colorVar="accent" />
                    <NavCard title={t.nav.dest.title} sub={t.nav.dest.sub} onClick={() => setView('dest')} colorVar="primary" />
                </div>
            </div>

            {/* ITINERARY */}
            <section className="py-24 px-4 bg-[var(--color-bg)] text-center bg-[image:radial-gradient(var(--color-muted)_1px,transparent_1px)] bg-[length:40px_40px]">
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-primary)] mb-2">{t.itinerary.title}</h2>
                <p className="font-[var(--font-script)] text-3xl md:text-4xl text-[var(--color-highlight)] mb-12 -rotate-2 inline-block">{t.itinerary.sub}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['pre', 'wed', 'post'].map((key, idx) => (
                        <button
                            key={key}
                            onClick={() => setItineraryTab(key)}
                            className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-[var(--font-heading)] font-bold uppercase tracking-wider border-2 border-[var(--color-primary)] transition-all shadow-[4px_4px_0_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-primary)] text-sm md:text-base
                ${itineraryTab === key ? 'bg-[var(--color-secondary)] text-white border-[var(--color-primary)]' : 'bg-white text-[var(--color-primary)]'}`}
                        >
                            {t.itinerary.tabs[idx]}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto relative pb-12 after:content-[''] after:absolute after:w-[4px] after:bg-[var(--color-primary)] after:top-0 after:bottom-0 after:left-[20px] md:after:left-1/2 after:-ml-[2px] after:rounded-[4px]">
                    {t.itinerary.events[itineraryTab].map((event, idx) => (
                        <EventCard key={idx} {...event} badgeColor={event.color} align={idx % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </div>
            </section>
        </>
    );
};

/* --- 4. LAYOUT COMPONENTS --- */

const Header = ({ isScrolled, lang, setLang, t, setModalOpen, setView }) => (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 py-3
    ${isScrolled ? 'translate-y-0 shadow-md rounded-b-[20px] backdrop-blur-sm' : '-translate-y-full bg-transparent'}`}
        style={{ backgroundColor: isScrolled ? 'rgba(46, 74, 61, 0.95)' : 'transparent' }}
    >
        <div
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            className="font-[var(--font-script)] text-2xl md:text-3xl text-[var(--color-bg)] cursor-pointer"
        >
            Raissa & Pedro
        </div>
        <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-white/10 rounded-full p-1 flex">
                <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded-full text-xs font-[var(--font-heading)] font-bold transition-all ${lang === 'en' ? 'bg-[var(--color-secondary)] text-white' : 'text-white/60 hover:text-white'}`}
                >
                    EN
                </button>
                <button
                    onClick={() => setLang('pt')}
                    className={`px-3 py-1 rounded-full text-xs font-[var(--font-heading)] font-bold transition-all ${lang === 'pt' ? 'bg-[var(--color-secondary)] text-white' : 'text-white/60 hover:text-white'}`}
                >
                    PT
                </button>
            </div>
            <button
                onClick={() => setModalOpen(true)}
                className="px-4 md:px-5 py-2 rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-[var(--color-secondary)]/10"
            >
                {t.rsvp_btn}
            </button>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-[var(--color-primary)] text-[var(--color-bg)] py-20 text-center border-t-[10px] border-[var(--color-accent)]">
        <h2 className="font-[var(--font-script)] text-5xl mb-6">Raissa & Pedro</h2>
        <div className="flex flex-col gap-2 font-[var(--font-heading)] text-sm opacity-80 mb-8">
            <p>Porto Seguro, Bahia, 2026</p>
            <a href="mailto:hello@raissaandpedro.com" className="text-[var(--color-accent)] hover:underline">hello@raissaandpedro.com</a>
        </div>
        <div className="font-bold text-[var(--color-muted)] tracking-widest text-lg">#RaissaPedroBahia</div>
    </footer>
);

const RSVPModal = ({ isOpen, onClose, t, lang }) => {
    const [step, setStep] = useState('auth');
    const [password, setPassword] = useState('');
    const [attending, setAttending] = useState('');
    const [plusOne, setPlusOne] = useState('no');

    // Form State
    const [guestName, setGuestName] = useState('');
    const [message, setMessage] = useState('');

    // AI State
    const [isWishLoading, setIsWishLoading] = useState(false);

    if (!isOpen) return null;

    const handleLogin = () => {
        if (password.toLowerCase() === 'trancoso') setStep('form');
        else alert('Incorrect Password');
    };

    const handleGenerateWish = async () => {
        setIsWishLoading(true);
        const sysPrompt = `Draft a warm, short (under 40 words) wedding wish for Raissa & Pedro who are getting married in Bahia. Tone: Sincere and happy. Language: ${lang === 'en' ? 'English' : 'Portuguese'}.`;
        const text = await callGemini("Draft a wedding message.", sysPrompt);
        setMessage(text.replace(/"/g, '')); // Remove quotes if AI adds them
        setIsWishLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(lang === 'en' ? 'RSVP Sent!' : 'Confirmação Enviada!');
        onClose();
        // Reset
        setStep('auth');
        setPassword('');
        setAttending('');
        setPlusOne('no');
        setGuestName('');
        setMessage('');
    };

    return (
        <div className="fixed inset-0 bg-[var(--color-primary)]/90 backdrop-blur-sm z-[100] flex justify-center items-center p-4 animate-[fade-in_1s_ease-out] overflow-y-auto">
            <div className="bg-[var(--color-surface)] w-full max-w-lg rounded-[25px] border-4 border-[var(--color-primary)] shadow-[15px_15px_0_var(--color-secondary)] p-6 md:p-8 relative my-8">
                <button onClick={onClose} className="absolute top-4 right-4 text-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:rotate-90 transition-all">
                    <X size={32} />
                </button>

                {step === 'auth' ? (
                    <div className="text-center py-8">
                        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_auth}</h3>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password / Senha" className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white mb-4 focus:outline-none focus:border-[var(--color-secondary)]" />
                        <button onClick={handleLogin} className="w-full bg-[var(--color-secondary)] text-white py-3 rounded-full font-bold hover:opacity-90 transition-colors">{t.modal.unlock}</button>
                        <p className="mt-4 text-sm text-gray-400">{t.modal.hint}</p>
                    </div>
                ) : (
                    <div className="text-center py-4">
                        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_form}</h3>
                        <form onSubmit={handleSubmit} className="text-left space-y-4">
                            <div>
                                <label className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.name}</label>
                                <input required type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white" />
                            </div>

                            <div>
                                <label className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.attending}</label>
                                <select
                                    value={attending}
                                    onChange={(e) => setAttending(e.target.value)}
                                    className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                >
                                    <option value="" disabled>Select / Selecione</option>
                                    <option value="yes">{t.modal.yes}</option>
                                    <option value="no">{t.modal.no}</option>
                                </select>
                            </div>

                            {attending === 'yes' && (
                                <>
                                    <div>
                                        <label className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one}</label>
                                        <select
                                            value={plusOne}
                                            onChange={(e) => setPlusOne(e.target.value)}
                                            className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                        >
                                            <option value="no">{t.modal.no}</option>
                                            <option value="yes">{t.modal.yes}</option>
                                        </select>
                                    </div>

                                    {plusOne === 'yes' && (
                                        <div>
                                            <label className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one_name}</label>
                                            <input required type="text" className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white" />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.dietary}</label>
                                        <textarea className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white" rows="2" placeholder="e.g. Vegetarian, Gluten Free..."></textarea>
                                    </div>
                                </>
                            )}

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block font-bold text-[var(--color-primary)]">{t.modal.message}</label>
                                    <button
                                        type="button"
                                        onClick={handleGenerateWish}
                                        disabled={isWishLoading}
                                        className="text-xs text-[var(--color-secondary)] font-bold flex items-center gap-1 hover:bg-[var(--color-secondary)]/10 px-2 py-1 rounded-md transition-colors"
                                    >
                                        <Sparkles size={12} /> {isWishLoading ? t.modal.ai_wish_loading : t.modal.ai_wish_btn}
                                    </button>
                                </div>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[var(--color-secondary)] focus:outline-none transition-all"
                                    rows="3"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[var(--color-secondary)] text-white py-3 rounded-full font-bold mt-4 hover:opacity-90">{t.modal.submit}</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

/* --- 5. MAIN APP CONTROLLER --- */

export default function RaissaApp() {
    const [lang, setLang] = useState('en');
    const [view, setView] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const t = CONTENT[lang];

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        if (userLang.toLowerCase().includes('pt')) setLang('pt');
        const handleScroll = () => setIsScrolled(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBack = () => { setView('home'); window.scrollTo(0, 0); };

    return (
        <div className="font-[var(--font-body)] text-[var(--color-primary)] bg-[var(--color-bg)] min-h-screen overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap');
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }

        /* --- THEME DEFINITION --- */
        :root {
          /* Colors */
          --color-primary: #2E4A3D;   /* Dark Green: Headings, Text, Footers */
          --color-secondary: #E86C48; /* Orange: Buttons, Highlights, Action Items */
          --color-accent: #F4D35E;    /* Yellow: Borders, Icons, Decorative Elements */
          --color-highlight: #3E8BAC; /* Blue: Badges, Secondary Actions */
          --color-muted: #7C9A86;     /* Sage: Subtle Borders, Badges */
          --color-bg: #F9F6F0;        /* Light Beige: Main Background */
          --color-surface: #FFFCF5;   /* Cream/White: Cards, Modals */

          /* Fonts */
          --font-heading: 'Cinzel', serif;
          --font-script: 'Great Vibes', cursive;
          --font-body: 'Montserrat', sans-serif;
        }
      `}</style>

            <Header isScrolled={isScrolled} lang={lang} setLang={setLang} t={t} setModalOpen={setModalOpen} setView={setView} />

            <main>
                {view === 'home' && <HomePage t={t} setView={setView} onOpenModal={() => setModalOpen(true)} />}
                {view === 'story' && <StoryPage t={t} lang={lang} onBack={handleBack} />}
                {view === 'dest' && <DestinationPage t={t} lang={lang} onBack={handleBack} />}
                {view === 'stay' && <StayPage t={t} lang={lang} onBack={handleBack} />}
                {view === 'dress' && <DressCodePage t={t} lang={lang} onBack={handleBack} />}
                {view === 'faq' && <FAQPage t={t} lang={lang} onBack={handleBack} />}
                {view === 'travel' && <TravelPage t={t} lang={lang} onBack={handleBack} />}
            </main>

            <Footer />
            <RSVPModal isOpen={modalOpen} onClose={() => setModalOpen(false)} t={t} lang={lang} />
        </div>
    );
}