import React, { useState, useEffect } from 'react';
import { MapPin, X, Heart, Plane, Home, HelpCircle, Sun, Info } from 'lucide-react';

/* --- 2. SHARED UI COMPONENTS --- */

const BackButton = ({ onClick, lang }) => (
    <button
        onClick={onClick}
        className="mb-8 px-6 py-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-2"
    >
        <Home className="w-4 h-4" /> {lang === 'en' ? 'Back Home' : 'Voltar ao Início'}
    </button>
);

const NavCard = ({ title, sub, onClick, color }) => (
    <div
        onClick={onClick}
        className={`bg-[#FFFCF5] p-6 text-center shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer rounded-[20px] border-b-[6px] flex flex-col items-center justify-center min-h-[180px]`}
        style={{ borderBottomColor: color }}
    >
        <h3 className="font-serif font-bold text-[#2E4A3D] text-lg mb-2 uppercase tracking-wider">{title}</h3>
        <p className="text-gray-600 text-sm">{sub}</p>
    </div>
);

const EventCard = ({ time, title, desc, badge, badgeColor, align }) => {
    const badgeColors = { sage: '#7C9A86', orange: '#E86C48', blue: '#3E8BAC', default: '#3E8BAC' };

    return (
        <div className={`relative bg-white p-6 rounded-[20px] shadow-sm mb-8 w-full md:w-[45%] border-2 border-transparent hover:border-[#F4D35E] transition-all hover:-translate-y-1 z-10 
      ${align === 'left' ? 'md:mr-auto text-right md:text-right' : 'md:ml-auto text-left'}`}
        >
            <div className={`hidden md:block absolute w-5 h-5 bg-white border-4 border-[#E86C48] rounded-full top-8 shadow-[0_0_0_4px_#F9F6F0] z-20
        ${align === 'left' ? '-right-[44px]' : '-left-[44px]'}`}
            />
            {badge && (
                <span
                    className="inline-block text-white px-3 py-1 rounded-xl text-xs font-bold uppercase mb-2 -rotate-1"
                    style={{ backgroundColor: badgeColors[badgeColor] || badgeColors.default }}
                >
                    {badge}
                </span>
            )}
            <span className="block font-serif font-bold text-2xl text-[#2E4A3D] mb-1">{time}</span>
            <h4 className="text-xl font-bold text-[#E86C48] mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
};

const SectionHeader = ({ title, sub }) => (
    <div className="text-center mb-12">
        <h2 className="font-serif text-5xl text-[#2E4A3D] mb-2">{title}</h2>
        {sub && <p className="text-xl">{sub}</p>}
    </div>
);

/* --- 3. PAGE COMPONENTS --- */

const StoryPage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-fade-in">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.story.title} sub={t.nav.story.sub} />
        <div className="max-w-2xl mx-auto border-l-2 border-[#E86C48] pl-8 text-left space-y-12 relative">
            {[
                { year: '2018', title: { en: "We Met in Sydney", pt: "Nos Conhecemos em Sydney" }, desc: { en: "A sunny afternoon at Bondi Beach changed everything.", pt: "Uma tarde ensolarada em Bondi mudou tudo." } },
                { year: '2020', title: { en: "First Trip to Bahia", pt: "Primeira Viagem à Bahia" }, desc: { en: "We fell in love with the magic of Trancoso.", pt: "Nos apaixonamos pela magia de Trancoso." } },
                { year: '2024', title: { en: "The Proposal", pt: "O Pedido" }, desc: { en: "Under the stars in Porto Seguro.", pt: "Sob as estrelas em Porto Seguro." } },
                { year: '2026', title: { en: "The Wedding", pt: "O Casamento" }, desc: { en: "Our biggest adventure yet!", pt: "Nossa maior aventura!" }, color: true }
            ].map((item, idx) => (
                <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[#F9F6F0] border-2 border-[#2E4A3D] rounded-full"></div>
                    <div className={`font-serif text-3xl font-bold mb-2 ${item.color ? 'text-[#2E4A3D]' : 'text-[#E86C48]'}`}>{item.year}</div>
                    <div className="bg-white p-6 rounded-[20px] shadow-sm">
                        <h4 className="text-xl font-bold mb-2">{item.title[lang]}</h4>
                        <p className="text-gray-600">{item.desc[lang]}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const DestinationPage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-fade-in">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.dest.title} sub={t.nav.dest.sub} />

        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[20px] shadow-sm">
                <h3 className="font-serif text-2xl text-[#E86C48] mb-4 border-b pb-2 flex items-center gap-2">
                    <Sun className="w-5 h-5" /> {lang === 'en' ? 'Things to Do' : 'O Que Fazer'}
                </h3>
                <ul className="space-y-4">
                    <li>
                        <strong className="block text-[#2E4A3D]">The Quadrado (Trancoso)</strong>
                        <span className="text-sm text-gray-600">{lang === 'en' ? "A historic village square with colorful houses, shops, and a stunning white church. Best at sunset!" : "O coração de Trancoso. Casinhas coloridas, o famoso campinho e a igrejinha. Imperdível no pôr do sol!"}</span>
                    </li>
                    <li>
                        <strong className="block text-[#2E4A3D]">Praia do Espelho</strong>
                        <span className="text-sm text-gray-600">{lang === 'en' ? "Famous for its natural pools and cliffs. Arrive at low tide." : "Famosa pelas piscinas naturais e falésias. Chegue na maré baixa."}</span>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-[20px] shadow-sm">
                <h3 className="font-serif text-2xl text-[#E86C48] mb-4 border-b pb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" /> {lang === 'en' ? 'Where to Eat' : 'Onde Comer'}
                </h3>
                <ul className="space-y-4">
                    <li>
                        <strong className="block text-[#2E4A3D]">Capim Santo</strong>
                        <span className="text-sm text-gray-600">{lang === 'en' ? "A classic in Trancoso. Delicious seafood in a garden." : "Um clássico. Frutos do mar deliciosos em um jardim."}</span>
                    </li>
                    <li>
                        <strong className="block text-[#2E4A3D]">Maritaca</strong>
                        <span className="text-sm text-gray-600">{lang === 'en' ? "Best pizza in town. Great atmosphere for groups." : "Melhor pizza da cidade. Ótima para grupos."}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-8 bg-white p-8 rounded-[20px] shadow-sm border-l-4 border-[#F4D35E]">
            <h3 className="font-serif text-xl text-[#2E4A3D] mb-4 font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-[#F4D35E]" /> {lang === 'en' ? 'Tips for Guests' : 'Dicas'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div><strong>Safety:</strong> {lang === 'en' ? "Trancoso is safe, but avoid deserted beaches at night." : "Trancoso é seguro, mas evite praias desertas à noite."}</div>
                <div><strong>Transport:</strong> {lang === 'en' ? "Uber is limited. Rent a car or use taxis." : "Uber é limitado. Alugue carro ou use táxis."}</div>
            </div>
        </div>
    </div>
);

const StayPage = ({ t, lang, onBack }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-fade-in">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.stay.title} />
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <p className="mb-6 text-gray-600">{lang === 'en' ? "We recommend staying in Trancoso or Arraial d'Ajuda. Shuttles will be provided." : "Recomendamos ficar em Trancoso ou Arraial d'Ajuda. Haverá vans."}</p>
                {['UXUA Casa Hotel', 'Pousada Estrela D\'Água', 'Hotel Fasano'].map((hotel, i) => (
                    <div key={i} className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[#7C9A86] shadow-sm">
                        <h4 className="font-bold text-[#2E4A3D]">{hotel}</h4>
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
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-fade-in text-center">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.dress.title} sub={t.nav.dress.sub} />
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            {lang === 'en'
                ? "Think light fabrics, linen suits, and colorful dresses. The ceremony is on grass, so avoid stilettos."
                : "Tecidos leves, linho e vestidos coloridos. A cerimônia será na grama, evite salto fino."}
        </p>
        <div className="flex justify-center gap-4 mb-12">
            {['#7C9A86', '#E86C48', '#F4D35E', '#3E8BAC'].map(c => (
                <div key={c} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: c }}></div>
            ))}
        </div>
        <div className="bg-white p-8 rounded-[20px] max-w-md mx-auto shadow-sm">
            <h4 className="font-bold mb-4">Inspiration Board</h4>
            <button className="bg-[#E86C48] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#d65b38]">
                {lang === 'en' ? 'View on Pinterest' : 'Ver no Pinterest'}
            </button>
        </div>
    </div>
);

const FAQPage = ({ t, lang, onBack }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-fade-in">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.faq.title} />
        {[
            { q: { en: "Are children invited?", pt: "Crianças são convidadas?" }, a: { en: "Adults-only event.", pt: "Evento apenas para adultos." } },
            { q: { en: "Is there a gift registry?", pt: "Lista de Presentes?" }, a: { en: "Your presence is our gift!", pt: "Sua presença é nosso presente!" } },
            { q: { en: "How to get there?", pt: "Como chegar?" }, a: { en: "Shuttles from Trancoso Quadrado.", pt: "Vans saindo do Quadrado." } }
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[20px] mb-4 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-[#2E4A3D] mb-2">
                    <HelpCircle className="w-5 h-5 text-[#E86C48]" />
                    {item.q[lang]}
                </div>
                <p className="text-gray-600 ml-7">{item.a[lang]}</p>
            </div>
        ))}
    </div>
);

const TravelPage = ({ t, lang, onBack }) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-fade-in text-center">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.travel.title} />
        <div className="bg-white p-8 rounded-[20px] shadow-sm text-left">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-[#E86C48] mb-2 flex items-center gap-2"><Plane className="w-5 h-5" /> Flights</h3>
                <p className="text-gray-600">
                    {lang === 'en' ? "Fly into Porto Seguro Airport (BPS). 1h drive to Trancoso." : "Voe para Porto Seguro (BPS). 1h de carro até Trancoso."}
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#E86C48] mb-2 flex items-center gap-2"><MapPin className="w-5 h-5" /> Transfers</h3>
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
            <section className="parallax-bg h-screen flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6F0]/30 to-[#F9F6F0]/60"></div>
                <div className="relative z-10 px-4 -mt-12 float-anim">
                    <h1 className="font-hand text-7xl md:text-8xl text-[#2E4A3D] mb-2 drop-shadow-sm">Raissa & Pedro</h1>
                    <div className="flex items-center justify-center gap-2 font-serif text-lg md:text-xl tracking-[0.2em] text-[#2E4A3D] font-bold uppercase mb-8 drop-shadow-sm">
                        <MapPin className="w-5 h-5 text-[#E86C48]" />
                        <span>{t.subtitle}</span>
                    </div>
                    <div className="border-y-2 border-[#2E4A3D] py-3 mb-10 inline-block">
                        <span className="font-serif text-2xl md:text-4xl font-bold text-[#2E4A3D] tracking-widest">{t.date}</span>
                    </div>
                    <br />
                    <button onClick={onOpenModal} className="bg-[#E86C48] text-white px-8 py-3 rounded-full font-serif font-bold tracking-widest border border-[#E86C48] hover:bg-[#d65b38] hover:-translate-y-1 hover:shadow-lg transition-all">
                        {t.rsvp_btn}
                    </button>
                </div>
            </section>

            {/* NAV GRID */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-32 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <NavCard title={t.nav.story.title} sub={t.nav.story.sub} onClick={() => setView('story')} color="#2E4A3D" />
                    <NavCard title={t.nav.stay.title} sub={t.nav.stay.sub} onClick={() => setView('stay')} color="#E86C48" />
                    <NavCard title={t.nav.dress.title} sub={t.nav.dress.sub} onClick={() => setView('dress')} color="#3E8BAC" />
                    <NavCard title={t.nav.faq.title} sub={t.nav.faq.sub} onClick={() => setView('faq')} color="#7C9A86" />
                    <NavCard title={t.nav.travel.title} sub={t.nav.travel.sub} onClick={() => setView('travel')} color="#F4D35E" />
                    <NavCard title={t.nav.dest.title} sub={t.nav.dest.sub} onClick={() => setView('dest')} color="#2E4A3D" />
                </div>
            </div>

            {/* ITINERARY */}
            <section className="py-24 px-4 bg-[#F9F6F0] text-center" style={{ backgroundImage: 'radial-gradient(#7C9A86 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                <h2 className="font-serif text-5xl text-[#2E4A3D] mb-2">{t.itinerary.title}</h2>
                <p className="font-hand text-4xl text-[#3E8BAC] mb-12 -rotate-2 inline-block">{t.itinerary.sub}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['pre', 'wed', 'post'].map((key, idx) => (
                        <button
                            key={key}
                            onClick={() => setItineraryTab(key)}
                            className={`px-8 py-4 rounded-full font-serif font-bold uppercase tracking-wider border-2 border-[#2E4A3D] transition-all shadow-[4px_4px_0_#2E4A3D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#2E4A3D]
                ${itineraryTab === key ? 'bg-[#E86C48] text-white border-[#2E4A3D]' : 'bg-white text-[#2E4A3D]'}`}
                        >
                            {t.itinerary.tabs[idx]}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto relative timeline-line pb-12">
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
    ${isScrolled ? 'translate-y-0 bg-[#2E4A3D]/95 backdrop-blur-sm shadow-md rounded-b-[20px]' : '-translate-y-full bg-transparent'}`}
    >
        <div
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            className="font-hand text-3xl text-[#F9F6F0] cursor-pointer"
        >
            Raissa & Pedro
        </div>
        <div className="flex items-center gap-3">
            <div className="bg-white/10 rounded-full p-1 flex">
                <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded-full text-xs font-serif font-bold transition-all ${lang === 'en' ? 'bg-[#E86C48] text-white' : 'text-white/60 hover:text-white'}`}
                >
                    EN
                </button>
                <button
                    onClick={() => setLang('pt')}
                    className={`px-3 py-1 rounded-full text-xs font-serif font-bold transition-all ${lang === 'pt' ? 'bg-[#E86C48] text-white' : 'text-white/60 hover:text-white'}`}
                >
                    PT
                </button>
            </div>
            <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2 rounded-full border border-[#E86C48] text-[#E86C48] hover:bg-[#E86C48] hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-[#E86C48]/10"
            >
                {t.rsvp_btn}
            </button>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-[#2E4A3D] text-[#F9F6F0] py-20 text-center border-t-[10px] border-[#F4D35E]">
        <h2 className="font-hand text-5xl mb-6">Raissa & Pedro</h2>
        <div className="flex flex-col gap-2 font-serif text-sm opacity-80 mb-8">
            <p>Porto Seguro, Bahia, 2026</p>
            <a href="mailto:hello@raissaandpedro.com" className="text-[#F4D35E] hover:underline">hello@raissaandpedro.com</a>
        </div>
        <div className="font-bold text-[#7C9A86] tracking-widest text-lg">#RaissaPedroBahia</div>
    </footer>
);

const RSVPModal = ({ isOpen, onClose, t, lang }) => {
    const [step, setStep] = useState('auth');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleLogin = () => {
        if (password.toLowerCase() === 'trancoso') setStep('form');
        else alert('Incorrect Password');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(lang === 'en' ? 'RSVP Sent!' : 'Confirmação Enviada!');
        onClose();
        setStep('auth');
        setPassword('');
    };

    return (
        <div className="fixed inset-0 bg-[#2E4A3D]/90 backdrop-blur-sm z-[100] flex justify-center items-center p-4 animate-fade-in">
            <div className="bg-[#FFFCF5] w-full max-w-lg rounded-[25px] border-4 border-[#2E4A3D] shadow-[15px_15px_0_#E86C48] p-8 relative max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-[#2E4A3D] hover:text-[#E86C48] hover:rotate-90 transition-all">
                    <X size={32} />
                </button>

                {step === 'auth' ? (
                    <div className="text-center py-8">
                        <h3 className="font-serif text-3xl text-[#2E4A3D] mb-6">{t.modal.title_auth}</h3>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password / Senha" className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white mb-4 focus:outline-none focus:border-[#E86C48]" />
                        <button onClick={handleLogin} className="w-full bg-[#E86C48] text-white py-3 rounded-full font-bold hover:bg-[#d65b38] transition-colors">{t.modal.unlock}</button>
                        <p className="mt-4 text-sm text-gray-400">{t.modal.hint}</p>
                    </div>
                ) : (
                    <div className="text-center py-4">
                        <h3 className="font-serif text-3xl text-[#2E4A3D] mb-6">{t.modal.title_form}</h3>
                        <form onSubmit={handleSubmit} className="text-left space-y-4">
                            <div><label className="block font-bold text-[#2E4A3D] mb-1">{t.modal.name}</label><input required type="text" className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white" /></div>
                            <div>
                                <label className="block font-bold text-[#2E4A3D] mb-1">{t.modal.attending}</label>
                                <select className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white">
                                    <option value="yes">{t.modal.yes}</option>
                                    <option value="no">{t.modal.no}</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-[#E86C48] text-white py-3 rounded-full font-bold mt-4 hover:bg-[#d65b38]">{t.modal.submit}</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

/* --- 5. MAIN APP CONTROLLER --- */

export default function WeddingApp() {
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
        <div className="font-sans text-[#2E4A3D] bg-[#F9F6F0] min-h-screen overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-hand { font-family: 'Great Vibes', cursive; }
        .font-serif { font-family: 'Cinzel', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        .parallax-bg { background-image: url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2623&auto=format&fit=crop'); background-attachment: fixed; background-position: center; background-size: cover; }
        .float-anim { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .timeline-line::after { content: ''; position: absolute; width: 4px; background-color: #2E4A3D; top: 0; bottom: 0; left: 50%; margin-left: -2px; border-radius: 4px; }
        @media (max-width: 768px) { .timeline-line::after { left: 20px; } }
      `}</style>

            <Header isScrolled={isScrolled} lang={lang} setLang={setLang} t={t} setModalOpen={setModalOpen} setView={setView} />

            <main>
                {view === 'home' && <HomePage t={t} setView={setView} onOpenModal={() => setModalOpen(true)} />}
                {view === 'story' && <StoryPage t={t} lang={lang}  />}
                {view === 'dest' && <DestinationPage t={t} lang={lang}  />}
                {view === 'stay' && <StayPage t={t} lang={lang}  />}
                {view === 'dress' && <DressCodePage t={t} lang={lang}  />}
                {view === 'faq' && <FAQPage t={t} lang={lang}  />}
                {view === 'travel' && <TravelPage t={t} lang={lang}  />}
            </main>

            <Footer />
            <RSVPModal isOpen={modalOpen} onClose={() => setModalOpen(false)} t={t} lang={lang} />
        </div>
    );
}