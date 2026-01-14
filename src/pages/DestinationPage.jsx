import React from "react";
import { BadgeQuestionMark } from "lucide-react";
import { BackButton } from "@/components/BackButton.jsx";
import { SectionHeader } from "@/components/SectionHeader.jsx";

export const DestinationPage = ({ t, lang }) => {
    const content = {
        "pt-BR": {
            title: "Por que Porto Seguro?",
            p1: "Para muitos, Porto Seguro é o berço do Brasil. Para nós, é o lugar onde nossa história ganhou raízes antes de atravessar o oceano.",
            p2: <>Quem conhece a Raissa sabe que, muito antes de virar consultora, o <b>habitat natural dela eram os palcos da Bahia</b>. Criada entre danças e a energia contagiante do Nordeste, o Axé sempre foi a trilha sonora das idas e vindas de carro entre Governador Valadares e Porto Seguro com a Família, e nos longos verões que eles passavam pela cidade.</>,
            p3: <>E quem conhece o Pedro, <b>sabe que ele não foge de um desafio</b>. Logo no primeiro mês de namoro, ele topou uma verdadeira "prova de fogo": viajar para Porto Seguro para conhecer os sogros, apenas alguns dias antes de mudar definitivamente para a Austrália. O carioca de jeito malandro e sorriso no rosto, já não perdeu tempo e na primeira noite já foi ganhando a família ao ficar até 4 da manhã bebendo com o futuro sogro na beirada da piscina.</>,
            p4: "Para completar, o destino deu o seu aval: um show de Elba Ramalho e Mestrinho iria acontecer na cidade logo naquele final de semana. Raissa, apesar de gostar de dança, nunca se imaginou indo a um show de forró, muito menos em Porto Seguro (cidade do axé)! Pedro, por outro lado, foi o que mais se animou, e agitou logo o evento, e foi com toda a família para o show. Ali foi o primeiro exemplo do que seria a vida desse casal: uma mistura vibrante de muita parceria, espontaneidade e energia lá em cima!",
            p5: <>Porto Seguro vai ser palco do nosso sim, não só pela história que temos com a cidade, mas também porque ela tem essa alma única, que de certa maneira combina com o casal: <b>uma mistura de "confusão boa", energia e um acolhimento que abraça qualquer estilo e pessoa que passe por lá</b>. É o lugar perfeito para reunir quem amamos, recarregar as energias com o sol da Bahia e celebrar a nossa união onde tivemos os primeiros exemplos mais concretos de como seria a vida daqui pra frente.</>,
            p6: "Preparem o protetor solar, o rebolado e a disposição: a gente se encontra na Bahia!"
        },
        "en-AU": {
            title: "Why Porto Seguro?",
            p1: "For many, Porto Seguro is the birthplace of Brazil. For us, it’s where our story truly took root before crossing the ocean to Australia.",
            p2: <>Anyone who knows Raissa knows that long before she became a consultant, her <b>natural habitat was the stages of Bahia</b>. Raised amongst the dancing and infectious energy of the Northeast, Axé music was always the soundtrack to family road trips and the long summers they spent in the city.</>,
            p3: <>And anyone who knows Pedro <b>knows he never backs down from a challenge</b>. In their very first month of dating, he agreed to a real "trial by fire": travelling to Porto Seguro to meet the in-laws, just days before moving permanently to Australia. True to his Carioca charm, he didn't waste any time and won the family over on the first night, staying up until 4 am having a few drinks by the pool with his future father-in-law.</>,
            p4: "To top it off, fate gave its blessing: a massive Forró concert was happening that same weekend. Raissa, despite her love for dance, never imagined going to a Forró show, especially not in the land of Axé! Pedro, on the other hand, was the most keen, rallying the whole family to go. That was the first glimpse of what life as a couple would be like: a vibrant mix of partnership, spontaneity, and high energy!",
            p5: <>Porto Seguro will be the stage for our "I do," not just because of our history here, but because it has a unique soul that matches us perfectly: <b>a mix of "organised chaos", vibrant energy, and a warmth that embraces everyone</b>. It’s the perfect place to bring our favourite people together, soak up the Bahia sun, and celebrate our union where it all began to feel real.</>,
            p6: "Pack your sunscreen, prep your dance moves, and bring your best vibes: see ya in Bahia!"
        }
    };

    const activeText = content[lang] || content["en-AU"];

    return (
        <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
            <BackButton lang={lang} />
            <SectionHeader title={t.nav.dest.title} sub={t.nav.dest.sub} />

            <div className="mt-8 mb-8 bg-white p-8 rounded-[20px] shadow-sm border-l-4 border-[var(--color-accent)]">
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)] mb-4 font-bold flex items-center gap-2">
                    <BadgeQuestionMark className="w-5 h-5 text-[var(--color-accent)]" /> {activeText.title}
                </h3>
                <div>
                    <p className="pb-2">{activeText.p1}</p>
                    <p className="pb-2">{activeText.p2}</p>
                    <p className="pb-2">{activeText.p3}</p>
                    <p className="pb-2">{activeText.p4}</p>
                    <p className="pb-3">{activeText.p5}</p>
                    <p className="pb-2">{activeText.p6}</p>
                </div>
            </div>
        </div>
    );
};