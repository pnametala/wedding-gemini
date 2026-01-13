import {MapPin, Plane} from "lucide-react";
import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const TravelPage = ({t, lang}) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.travel.title}/>
        <div className="bg-white p-8 rounded-[20px] shadow-sm text-left">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2"><Plane
                    className="w-5 h-5"/> Flights</h3>
                <ul className="text-gray-600">
                    <li className={'mt-1'}><span className={'font-bold'}>Saindo de Governador Valadares</span>
                        <ul className="ml-5">
                            <li>Voo pela azul, com escala, as 9:45am e 15:25pm</li>
                            <li>Ônibus leito saindo da Gontijo, saindo 00:00 de GV</li>
                        </ul>
                    </li>
                    <li className={'mt-1'}><span className={'font-bold'}>Saindo do Rio de Janeiro</span>
                        <ul className="ml-5">
                            <li>Voos operados pela Gol, 8:40am e 12:00pm</li>
                            <li>Duração média de 1h30min</li>
                        </ul>
                    </li>
                    <li className={'mt-1'}><span className={'font-bold'}>Saindo de São Paulo</span>
                        <ul className="ml-5">
                            <li>Voos direto operados Gol e Azul, em diferentes horários do dia</li>
                            <li>Duração média de 2h</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2"><MapPin
                    className="w-5 h-5"/> Transfers</h3>
                <p className="text-gray-600">
                    {lang === 'en-AU' ? "We recommend booking a private transfer or rental car." : "Para os que vão ficar muitos dias, aluguél de carro pode ajudar na locomoção. Mas estamos no momento olhando um transfer para levar dos hotéis ate os locais dos eventos. Main informações em breve."}
                </p>
            </div>
        </div>
    </div>
);