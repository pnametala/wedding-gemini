import {useState} from "react";
import {NavCard} from "@/components/NavCard.jsx";
import {EventCard} from "@/components/EventCard.jsx";
import {MapPin} from "lucide-react";
import {Link} from "react-router-dom";

export const HomePage = ({t}) => {
    const [itineraryTab, setItineraryTab] = useState('wed');

    return (
        <>
            <section
                className="h-screen flex flex-col justify-center items-center text-center relative bg-[url('/background.png')] bg-fixed bg-center bg-cover">
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/30 to-[var(--color-bg)]/60"></div>
                <div className="relative z-10 px-4 -mt-12 w-full animate-[float_6s_ease-in-out_infinite]">
                    <h1 className="font-[var(--font-script)] text-6xl md:text-8xl text-[var(--color-primary)] mb-2 drop-shadow-sm autography">Raissa & Pedro</h1>
                    <div
                        className="flex flex-col md:flex-row items-center justify-center gap-2 font-[var(--font-heading)] text-lg md:text-xl tracking-[0.2em] text-[var(--color-primary)] font-bold uppercase mb-8 drop-shadow-sm">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-[var(--color-secondary)]"/>
                            <span className='cinzel'>{t.subtitle}</span>
                        </div>
                    </div>
                    <div className="border-y-2 border-[var(--color-primary)] py-3 mb-10 inline-block">
                        <span
                            className="cinzel font-[var(--font-heading)] text-xl md:text-4xl font-bold text-[var(--color-primary)] tracking-widest">{t.date}</span>
                    </div>
                    <br/>
                    <div>
                    <a href="#intinerary"
                            className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-[var(--font-heading)] font-bold tracking-widest border border-[var(--color-secondary)] hover:bg-[#d65b38] hover:-translate-y-1 hover:shadow-lg transition-all">
                        {t.lineup_info}
                    </a>
                    </div>
                    <div class="mt-10">
                    <Link to="/rsvp"
                            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-[var(--font-heading)] font-bold tracking-widest border border-[var(--color-primary)] hover:bg-[#d65b38] hover:-translate-y-1 hover:shadow-lg transition-all">
                        {t.rsvp_btn}
                    </Link>
                  </div>
                    
                </div>
            </section>

            {/* NAV GRID */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 -mt-32 mb-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    <NavCard title={t.nav.story.title} sub={t.nav.story.sub} goTo={'story'}
                             colorVar="primary"/>
                    <NavCard title={t.nav.dest.title} sub={t.nav.dest.sub} goTo={'why-ps'}
                             colorVar="secondary"/>
                    <NavCard title={t.nav.stay.title} sub={t.nav.stay.sub} goTo={'stay'}
                             colorVar="highlight"/>
                    <NavCard title={t.nav.dress.title} sub={t.nav.dress.sub} goTo={'dress'}
                             colorVar="muted"/>
                    <NavCard title={t.nav.faq.title} sub={t.nav.faq.sub} goTo={'faq'}
                             colorVar="accent"/>
                    <NavCard title={t.nav.travel.title} sub={t.nav.travel.sub} goTo={'travel'}
                             colorVar="primary"/>
                </div>
            </div>

            {/* ITINERARY */}
            <section id="intinerary"
                className="py-10 px-4 bg-[var(--color-bg)] text-center bg-[image:radial-gradient(var(--color-muted)_1px,transparent_1px)] bg-[length:40px_40px]">
                <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl text-[var(--color-primary)] mb-2">{t.itinerary.title}</h2>
                <p className="font-[var(--font-script)] pt-2 text-[var(--color-primary)] mb-8 inline-block">{t.itinerary.sub}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['pre', 'wed', 'post'].map((key, idx) => (
                        <button
                            key={key}
                            onClick={() => setItineraryTab(key)}
                            className={`cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-full font-[var(--font-heading)] font-bold uppercase tracking-wider border-2 border-[var(--color-primary)] transition-all shadow-[4px_4px_0_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--color-primary)] text-sm md:text-base
                ${itineraryTab === key ? 'bg-[var(--color-secondary)] text-white border-[var(--color-primary)]' : 'bg-white text-[var(--color-primary)]'}`}
                        >
                            {t.itinerary.tabs[idx]}
                        </button>
                    ))}
                </div>

                <div
                    className="max-w-4xl mx-auto relative pb-12 after:content-[''] after:absolute after:w-[4px] after:bg-[var(--color-primary)] after:top-0 after:bottom-0 after:left-[20px] md:after:left-1/2 after:-ml-[2px] after:rounded-[4px]">
                    {t.itinerary.events[itineraryTab].map((event, idx) => (
                        <EventCard key={idx} {...event} badgeColor={event.color}
                                   align={idx % 2 === 0 ? 'left' : 'right'}/>
                    ))}
                </div>
            </section>
        </>
    );
};