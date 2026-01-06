import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StayPage = ({ t, lang }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.stay.title} />
        
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                    <p className="mb-6 text-gray-600">
                    {/* {lang === 'pt' ? "xxx" : */}
                    <p>O casamento será no Hotel Solar do Imperador, que é perto da cidade de Porto Seguro, aeroporto e rodoviária.
                        Porém, os eventos de aquecimento e principais atividades para fazer durante o dia ficam perto da praia de Taperapuã</p>
                    <p className="mt-3">Se a sua prentensão é ficar mais de 2/3 dias, nossa recomendação é que voce se hospede mais perto da praia.</p>
                    <p className="mt-3">Mas caso a sua estadia seja mais curta, o hotel provavelmente será mais conveniente.</p>

                    <p className="mt-3 font-bold"> Olhamos vários locais, e decidimos por 3 opções que esperamos agradar a maioria dos gostos:</p>

                    <p className="mt-3"> Vamos organizar transporte para levar os convidados da area da praia até o casamento, saindo dos dois locais listados abaixo.</p>

                
                    {/* } */}
                    </p>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-[20px] overflow-hidden border-4 border-white shadow-md">
                <iframe src="https://www.google.com/maps/d/embed?mid=1VExMeMp7QFUaIE4M9JNhP7XLAR2WV9o&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>            </div>
        </div>
        <br />
        <div className="grid md:grid-cols-1">
            <div>
                    <div className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                        <h4 className="font-bold text-[var(--color-primary)]">1. Porto Geraes Praia Hotel</h4>
                        <p className="text-sm text-gray-500">Hotel simples, mas muito gostosa e super bem localizada. Visitamos pessoalmente e consseguimos um ótimo desconto para os convidados do casamento.</p>
                        <p className="text-sm text-gray-500 font-bold">Link para reserva: <a href="">link</a></p>
                        <p className="text-sm text-gray-500">desconto xxx</p>

                    </div>
                    <div  className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                        <h4 className="font-bold text-[var(--color-primary)]">2. Condomínio Vila Mar</h4>
                        <p className="text-sm text-gray-500">Condominio de casas que acomoda até 8 pessoas (estilo Airbnb). Número de camas e estilo das acomodaçoes irão variar de casa em casa.</p>
    
                        <p className="text-sm text-gray-500">Preço estimado: xx</p>
                        <p className="text-sm text-gray-500">Para reservas e saber mais dos preços, contate diretamente a mãe da Raissa que ela esta coordenando as acomodaçÕes por lá</p>
                        <p className="text-sm text-gray-500">Angela: (+55) 98878-4400 </p>
    

                    </div>
                    <div  className="bg-white p-6 rounded-[15px] mb-4 border-l-4 border-[var(--color-muted)] shadow-sm">
                        <h4 className="font-bold text-[var(--color-primary)]">3. Hotel Solar do Imperador</h4>
                        <p className="text-sm text-gray-500">Trancoso • Bahia</p>
                    </div>
            </div>
        </div>
    </div>
);