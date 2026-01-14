import { MapPin, Plane } from "lucide-react";
import React from "react";
import { BackButton } from "@/components/BackButton.jsx";
import { SectionHeader } from "@/components/SectionHeader.jsx";

export const TravelPage = ({ t, lang }) => {
    const content = {
        "pt-BR": {
            flightsTitle: "Voos e Ônibus",
            gv: "Saindo de Governador Valadares",
            gvDetails: [
                "Voos pela Azul, com escala, às 9:45h e 15:25h",
                "Ônibus leito pela Gontijo, saindo 00:00h de GV"
            ],
            rio: "Saindo do Rio de Janeiro",
            rioDetails: [
                "Voos operados pela Gol, 8:40h e 12:00h",
                "Duração média de 1h30min"
            ],
            sp: "Saindo de São Paulo",
            spDetails: [
                "Voos diretos operados pela Gol e Azul em diversos horários",
                "Duração média de 2h"
            ],
            transportTitle: "Transporte Interno",
            transportDesc: "Para os que vão ficar muitos dias, aluguel de carro pode ajudar na locomoção. Mas Uber também é bem fácil de pegar por lá, e também estamos no momento olhando um transfer para levar dos hotéis até os locais dos eventos. Mais informações em breve."
        },
        "en-AU": {
            flightsTitle: "Getting There",
            gv: "From Governador Valadares",
            gvDetails: [
                "Flights via Azul (with connections) at 9:45 am and 3:25 pm",
                "Overnight sleeper bus (Gontijo) departing at midnight"
            ],
            rio: "From Rio de Janeiro",
            rioDetails: [
                "Direct flights via Gol at 8:40 am and 12:00 pm",
                "Average flight time: 1h 30m"
            ],
            sp: "From São Paulo",
            spDetails: [
                "Daily direct flights via Gol and Azul at various times",
                "Average flight time: 2h"
            ],
            transportTitle: "Getting Around",
            transportDesc: "If you're staying for a while, a rental car is a great shout for exploring. Otherwise, Ubers are easy to catch around town. We're also looking into a shuttle service to get everyone from the main hotels to the events—stay tuned for more details!"
        }
    };

    const s = content[lang] || content["en-AU"];

    return (
        <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
            <BackButton lang={lang} />
            <SectionHeader title={t.nav.travel.title} />
            <div className="bg-white p-8 rounded-[20px] shadow-sm text-left">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                        <Plane className="w-5 h-5" /> {s.flightsTitle}
                    </h3>
                    <ul className="text-gray-600">
                        <li className="mt-1">
                            <span className="font-bold">{s.gv}</span>
                            <ul className="ml-5 list-disc">
                                {s.gvDetails.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </li>
                        <li className="mt-3">
                            <span className="font-bold">{s.rio}</span>
                            <ul className="ml-5 list-disc">
                                {s.rioDetails.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </li>
                        <li className="mt-3">
                            <span className="font-bold">{s.sp}</span>
                            <ul className="ml-5 list-disc">
                                {s.spDetails.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-100" />
                <div>
                    <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5" /> {s.transportTitle}
                    </h3>
                    <p className="text-gray-600">
                        {s.transportDesc}
                    </p>
                </div>
            </div>
        </div>
    );
};