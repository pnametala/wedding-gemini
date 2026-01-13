import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StayPage = ({t, lang}) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.stay.title}/>

        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <p className="mb-6 text-gray-600">
                    {/* {lang === 'pt-BR' ? "xxx" : */}
                    <p>O casamento será no Hotel Solar do Imperador, que é perto da cidade de Porto Seguro, aeroporto e
                        rodoviária.
                        Porém, os eventos de aquecimento e principais atividades para fazer durante o dia ficam perto da
                        praia de Taperapuã</p>
                    <p className="mt-3">Se a sua prentensão é ficar mais de 2/3 dias, nossa recomendação é que voce se
                        hospede mais perto da praia.</p>
                    <p className="mt-3">Mas caso a sua estadia seja mais curta, o hotel provavelmente será mais
                        conveniente.</p>
                    <p className="mt-3">Porto Seguro não é muito grande, mas do fim da orla da Praia até o hotel, o
                        tempo gira em torno de 30min de carro.</p>
                    <p className="mt-3 font-bold">Olhamos várias opções de hotéis, e decidimos por 4 opções que
                        esperamos agradar a maioria dos gostos, e que estão em locais diferentes para cada evento.</p>

                    <p className="mt-3">Estamos olhando a possibilidade de organizar transporte para levar os convidados
                        da praia até o casamento. Vamos passar mais informações quando soubermos melhor onde todos vão
                        ficar.</p>


                    {/* } */}
                </p>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-[20px] overflow-hidden border-4 border-white shadow-md">
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1VExMeMp7QFUaIE4M9JNhP7XLAR2WV9o&ehbc=2E312F&noprof=1"
                    width="640" height="480"></iframe>
            </div>
        </div>
        <br/>
        <div className="grid md:grid-cols-1">
            <div>
                <div className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                    <h4 className="font-bold text-[var(--color-primary)]">1. Porto Geraes Praia Hotel</h4>
                    <p className="text-sm text-gray-500 mt-3">Hotel simples, mas muito gostoso e super bem localizado.
                        Próximo das barracas mais badaladas e de várias áreas com restaurantes e supermercados. O mar
                        das praias mais próximas é um pouco mais agitado do que outras em Porto Seguro.
                    </p>
                    <div className={"mt-3"}>
                        <p className={"text-sm text-gray-500 font-bold"}>Distâncias (carro)</p>
                        <ul className={"mt-1"}>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Casamento (Solar do Imperador):</span> 10/15
                                minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span
                                className={"text-bold"}>Beach Day (Axé Moi):</span> 1 minuto (Recomendamos ir à pé!)
                            </li>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Pre-wedding (Barraca da Jinga):</span> 10/15
                                minutos
                            </li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 font-bold mt-5">Reservas (com desconto): <a
                        className={'text-[var(--color-secondary)]'}
                        href="https://sbreserva.silbeck.com.br/portogeraes/pt-br/reserva/busca/?checkin=2026-09-18&checkout=2026-09-20&adultos-000001=1&promo=RAISSA">Link</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">O link só funciona dentro do Brasil, então se você estiver
                        fora
                        e não tiver vpn, contacte o hotel direto pela whatsapp [+55 73 99162255] mencionando o
                        casamento, e/ou fale com os noivos que eles vão poder ajudar</p>
                </div>
                <div className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                    <h4 className="font-bold text-[var(--color-primary)]">2. Condomínio Vila Mar</h4>
                    <p className="text-sm text-gray-500 mt-3">Condomínio de casas que acomoda duas famílias - até 8
                        pessoas (estilo Airbnb). Número de camas e estilo das acomodações irão variar de casa em casa,
                        mas na maioria dos casos são 2 suítes com cama de casal e uma cama de solteiro e/ou colchões
                        extras no chão.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">O condomínio fica a cerca de 3 quarteirões da orla da
                        praia,
                        então funciona melhor para quem estiver indo de carro, ou pretende alugar para os dias que
                        estiver lá. A localização é bem no meio das duas praias principais.</p>
                    <div className={"mt-3"}>
                        <p className={"text-sm text-gray-500 font-bold"}>Distâncias (carro)</p>
                        <ul className={"mt-1"}>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Casamento (Solar do Imperador):</span> 15/20
                                minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span
                                className={"text-bold"}>Beach Day (Axé Moi):</span> 5 minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Pre-wedding (Barraca da Jinga):</span> 10/15
                                minutos
                            </li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 font-bold mt-5">Reservas (e detalhes)</p>
                    <p className="text-sm text-gray-500 mt-2">Contate diretamente a mãe da Raissa que ela estará
                        coordenando as acomodações por lá.
                    </p>
                    <p className="text-sm text-gray-500 font-bold mt-1">
                        Angela: (+55) 98878-4400
                    </p>
                </div>
                <div className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                    <h4 className="font-bold text-[var(--color-primary)]">3. Hotel Solar do Imperador</h4>
                    <p className="text-sm text-gray-500 mt-3">Um dos hotéis mais tradicionais da cidade, com uma linda
                        vibe colonial, mas os quartos são um pouco antigos. O hotel é bem aconchegante e é bem próximo
                        do aeroporto e rodoviária, sendo uma ótima opção para quem pretende ficar poucos dias.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        O hotel tem uma van que vai para a área da praia todos os dias às 10am, e vamos ver a
                        possibilidade de também estar operando em alguns outros horários.

                    </p>
                    <div className={"mt-3"}>
                        <p className={"text-sm text-gray-500 font-bold"}>Distâncias (carro)</p>
                        <ul className={"mt-1"}>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Casamento (Solar do Imperador):</span> 0
                                minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span
                                className={"text-bold"}>Beach Day (Axé Moi):</span> 10/15 minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Pre-wedding (Barraca da Jinga):</span> 20/25
                                minutos
                            </li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 font-bold mt-5">Reservas (com desconto): <a
                        className={'text-[var(--color-secondary)]'}
                        href="#">Link</a>
                    </p>
                </div>
                <div className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                    <h4 className="font-bold text-[var(--color-primary)]">4. Village Mutá</h4>
                    <p className="text-sm text-gray-500 mt-3">O hotel/casa preferido dos noivos, porém, é o mais
                        distante do local do casamento. São apartamentos com cozinha completa e múltiplos quartos, porém
                        com toda estrutura de hotel com café da manhã. É bem em frente à praia com o mar mais calmo,
                        ideal para crianças. Não tem tantas opções de restaurantes a noite, mas barracas de praia
                        próxima ficam abertas e oferecem opçoes de jantar, ou a própria barraca do hotel
                    </p>
                    <div className={"mt-3"}>
                        <p className={"text-sm text-gray-500 font-bold"}>Distâncias (carro)</p>
                        <ul className={"mt-1"}>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Casamento (Solar do Imperador):</span> 20/25
                                minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span
                                className={"text-bold"}>Beach Day (Axé Moi):</span> 10/15 minutos
                            </li>
                            <li className={"text-sm text-gray-500"}><span className={"text-bold"}>Pre-wedding (Barraca da Jinga):</span> 5
                                minutos
                            </li>
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 font-bold mt-5">Reservas (com desconto): <a
                        className={'text-[var(--color-secondary)]'}
                        href="#">Link</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);