import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StayPage = ({t, lang}) => {
    const info = {
        "pt-BR": {
            intro1: <>O casamento será no <b>Hotel Solar do Imperador</b>, que é perto do centro da cidade de Porto
                Seguro, passarela da cultura, aeroporto e rodoviária. Porém, os eventos de aquecimento e principais
                atividades para fazer durante o dia ficam perto da praia de Taperapuã.</>,
            intro2: <>Se a sua prentensão é ficar <b>mais de 3 dias</b>, nossa recomendação é que voce se hospede
                mais <b>perto da praia.</b></>,
            intro3: <>Mas caso a sua <b>estadia</b> seja <b>mais curta, o hotel provavelmente será mais
                conveniente.</b></>,
            intro4: "A orla de Porto Seguro é um pouco grande, mas do fim das principaus barracas na orla da Praia até o hotel, a distancia gira em torno de 30min de carro.",
            highlight: "Olhamos várias opções de hospedagem, e decidimos por 3 opções que esperamos agradar a maioria dos gostos e tempos de estadia.",
            transport: <i>Vamos passar mais informações quando soubermos melhor onde todos os convidados irão ficar</i>,
            transportTitle: "Estamos olhando opçoes de transporte para levar os convidados da praia até o casamento e talvez os outros eventos, a partir destes 3 locais.",
            distances: "Distâncias (carro):",
            wedding: "Casamento (Solar do Imperador)",
            walking: "(Recomendamos ir à pé!)",
            discount: "Reservas (com desconto):",
            booking: "Reservas direto com Booking.com:",
            bookingNote: "Vale checar o preço pois as vezes tem ofertas melhores dependendo da sua categoria com eles.",
            hotels: [
                {
                    name: "1. Hotel Solar do Imperador (Local do Casamento)",
                    desc: "Um dos hotéis mais tradicionais da cidade, com uma linda vibe colonial, mas os quartos são um pouco antigos. O hotel é bem aconchegante e é bem próximo do aeroporto e rodoviária, sendo uma ótima opção para quem pretende ficar poucos dias.",
                    subDesc: "O hotel tem uma van que vai para a área da praia todos os dias às 10am, e vamos ver a possibilidade de também estar operando em alguns outros horários.",
                    weddingTime: "0 minutos",
                    beachTime: "10/15 minutos",
                    directLink: "",
                    bookingLink: "https://www.booking.com/Share-cCmOVg1",
                },
                {
                    name: "2. Porto Geraes Praia Hotel",
                    desc: "Hotel simples, mas muito gostoso e super bem localizado. Próximo das barracas mais badaladas e de várias áreas com restaurantes e supermercados.",
                    weddingTime: "10/15 minutos",
                    beachTime: "1 minuto (Recomendamos ir à pé!)",
                    preTime: "10/15 minutos",
                    directLink: "https://sbreserva.silbeck.com.br/portogeraes/pt-br/reserva/busca/?checkin=2026-09-18&checkout=2026-09-20&adultos-000001=1&promo=RAISSA",
                    bookingLink: "https://www.booking.com/Share-Ii6PMe0",
                    extra: "O Hotel dá 10% de desconto pagando à vista. O link só funciona dentro do Brasil, então se você estiver fora e não tiver VPN, contacte o hotel direto pela whatsapp [+55 73 99162255] mencionando o casamento, e/ou fale com os noivos que eles vão poder ajudar",
                },
                {
                    name: "3. Condomínio Vila Mar",
                    desc: "Condomínio de casas que acomoda duas famílias - até 8 pessoas (estilo Airbnb). Número de camas e estilo das acomodações irão variar de casa em casa, mas na maioria dos casos são 2 suítes com cama de casal e uma cama de solteiro e/ou colchões extras no chão.",
                    subDesc: "O condomínio fica a cerca de 3 quarteirões da orla da praia, então funciona melhor para quem estiver indo de carro, ou pretende alugar para os dias que estiver lá. A localização é bem no meio das duas praias principais.",
                    weddingTime: "15/20 minutos",
                    beachTime: "5 minutos",
                    extra: "Contate diretamente a mãe da Raissa que ela estará coordenando as acomodações por lá. Angela: (+55) 33 98878-4400",
                    noBooking: true,
                    directLink: "",
                    bookingLink: "",
                },
            ]
        },
        "en-AU": {
            intro1: <>The wedding will be at <b>Hotel Solar do Imperador</b>, which is near the city centre, the
                "Passarela da Cultura," the airport, and the bus station. However, the warm-up events and main daytime
                activities are located near Taperapuã Beach.</>,
            intro2: <>If you're planning on staying for <b>more than 3 days</b>, we recommend staying <b>closer to the
                beach.</b></>,
            intro3: <>But if your <b>stay</b> is <b>shorter, the hotel will likely be more convenient.</b></>,
            intro4: "The Porto Seguro coastline is quite long; driving from the main beach clubs to the hotel takes about 30 minutes.",
            highlight: "We've looked at several accommodation options and picked 3 spots that we hope will suit everyone's tastes and travel plans.",
            transport: <i>We'll share more details once we have a better idea of where everyone is staying</i>,
            transportTitle: "We're looking into transport options to take guests from the beach area to the wedding (and potentially other events) from these 3 locations.",
            distances: "Distances (by car):",
            wedding: "Wedding Venue (Solar do Imperador)",
            walking: "(Easy walking distance!)",
            discount: "Discounted Bookings:",
            booking: "Book via Booking.com:",
            bookingNote: "It's worth checking the price here too, as you might get a better deal depending on your member level.",
            hotels: [
                {
                    name: "1. Hotel Solar do Imperador (Wedding Venue)",
                    desc: "One of the most traditional hotels in town with a beautiful colonial vibe, though the rooms are a bit vintage. Very cozy and super close to the airport—a great option for a short stay.",
                    subDesc: "The hotel has a shuttle van that goes to the beach every day at 10 am, and we're checking if they can run at other times too.",
                    weddingTime: "0 minutes (You're already there!)",
                    beachTime: "10/15 minutes",
                    directLink: "",
                    bookingLink: "https://www.booking.com/Share-cCmOVg1",
                },
                {
                    name: "2. Porto Geraes Praia Hotel",
                    desc: "A simple but lovely hotel in a cracking location. Very close to the most popular beach clubs, restaurants, and supermarkets.",
                    weddingTime: "10/15 minutes",
                    beachTime: "1 minute (Easy walk!)",
                    preTime: "10/15 minutes",
                    directLink: "https://sbreserva.silbeck.com.br/portogeraes/pt-br/reserva/busca/?checkin=2026-09-18&checkout=2026-09-20&adultos-000001=1&promo=RAISSA",
                    bookingLink: "https://www.booking.com/Share-Ii6PMe0",
                    extra: "You get an extra 10% discount if paying in advance. The discount link only works within Brazil. If you're overseas without a VPN, please contact the hotel directly via WhatsApp [+55 73 99162255] mentioning the wedding, or give us a shout and we'll help you out."
                },
                {
                    name: "3. Condomínio Vila Mar",
                    desc: "A complex of houses that fits two families—up to 8 people (Airbnb style). Bed layouts vary by house, but most have 2 suites with double beds plus singles or extra mattresses on the floor.",
                    subDesc: "The complex is about 3 blocks back from the beach, so it works best if you have a rental car. The location is right in the middle of the two main beaches.",
                    weddingTime: "15/20 minutes",
                    beachTime: "5 minutes",
                    directLink: "",
                    bookingLink: "",
                    extra: "Contact Raissa's mum directly as she's coordinating the bookings for this spot. Angela: (+55) 33 98878-4400",
                    noBooking: true
                },
            ]
        }
    };

    const s = info[lang] || info["en-AU"];

    return (
        <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
            <BackButton lang={lang}/>
            <SectionHeader title={t.nav.stay.title}/>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="text-gray-600">
                    <p>{s.intro1}</p>
                    <p className="mt-3">{s.intro2}</p>
                    <p className="mt-3">{s.intro3}</p>
                    <p className="mt-3">{s.intro4}</p>
                    <p className="mt-3">{s.highlight}</p>
                    <p className="mt-3">
                        {s.transportTitle} {s.transport}.
                    </p>
                </div>
                <div className="h-[400px] bg-gray-200 rounded-[20px] overflow-hidden border-4 border-white shadow-md">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1VExMeMp7QFUaIE4M9JNhP7XLAR2WV9o&ehbc=2E312F&noprof=1"
                        width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
            </div>

            <div className="grid md:grid-cols-1 mt-8">
                {s.hotels.map((hotel, index) => (
                    <div key={index}
                         className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                        <h4 className="font-bold text-[var(--color-primary)]">{hotel.name}</h4>
                        <p className="text-sm text-gray-500 mt-3">{hotel.desc}</p>
                        {hotel.subDesc && <p className="text-sm text-gray-500 mt-1">{hotel.subDesc}</p>}

                        <div className="mt-3">
                            <p className="text-sm text-gray-500 font-bold">{s.distances}</p>
                            <ul className="mt-1">
                                <li className="text-sm text-gray-500"><b>{s.wedding}:</b> {hotel.weddingTime}</li>
                                <li className="text-sm text-gray-500"><b>Beach Day (Axé Moi):</b> {hotel.beachTime}</li>
                                {hotel.preTime && <li className="text-sm text-gray-500"><b>Pre-wedding (Barraca da
                                    Jinga):</b> {hotel.preTime}</li>}
                            </ul>
                        </div>

                        {!hotel.noBooking && hotel.directLink !== "" && <p className="text-sm text-gray-500 font-bold mt-5">{s.discount}
                            <a className='ml-1 text-[var(--color-secondary)]'
                               href={hotel.directLink}>Link</a>
                        </p>}

                        {hotel.extra && <p className="text-sm text-gray-500 mt-2">{hotel.extra}</p>}

                        {!hotel.noBooking && hotel.bookingLink !== ""  && (
                            <>
                                <p className="text-sm text-gray-500 font-bold mt-5">{s.booking}
                                    <a className='ml-1 text-[var(--color-secondary)]'
                                       href={hotel.bookingLink}>Link</a>
                                </p>
                                <p className="text-sm text-gray-500 mt-2">{s.bookingNote}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};