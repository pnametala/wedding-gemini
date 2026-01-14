import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";
import {HelpCircle} from "lucide-react";

export const FAQPage = ({t, lang}) => (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.faq.title}/>
        {[
            {
                q: {
                    "en-AU": "Where are the bride and groom staying?", 
                    "pt-BR": "Onde os noivos vão se hospedar?"
                },
                a: {
                    "en-AU": "We're not 100% sure yet! On the actual wedding night, we'll be staying at the venue (Solar do Imperador). For the days leading up to it, we'd love to stay wherever most of our guests end up booking. We'll wait a bit to see where everyone chooses and then we'll settle on a spot nearby!",
                    "pt-BR": "Ainda não sabemos 100%. No dia do casamento vamos ficar no hotel do casamento mesmo, mas nos dias anteriores, gostaríamos de ficar no mesmo local que a maioria dos convidados, logo vamos esperar um pouco para saber onde vão preferir e vamos decidir a partir daí"
                }
            },
            {
                q: {
                    "en-AU": "Is there a gift registry?", 
                    "pt-BR": "Onde está a lista de presentes?"
                },
                a: {
                    "en-AU": "This is the most honest and least cliché way we can put it: your presence is our gift. We know that hosting a wedding away from most people's homes—with many of you travelling from the other side of the world—is a massive effort. That commitment is worth more to us than any physical gift. If you'd really like to give something, there will be a spot at the wedding to leave us a message or a heartfelt letter. Seeing you all on the dance floor is truly the best gift we could ask for!",
                    "pt-BR": `Esse é o mais claro e menos clichê possível: “o nosso presente é você”. Sabemos que fazer um casamento em um local que não é próximo da casa da maioria dos convidados, muitos viajando do outro lado do mundo, já é um esforço gigantesco, e maior do que qualquer presente financeiro. Se fizerem muita questão, vamos ter oportunidade no casamento para vocês deixarem mensagens, uma carta escrita com carinho, e você entregando tudo na pista de dança vão ser nosso MELHOR pedido de presente realizado!`
                }
            },
            {
                q: {
                    "en-AU": "Are kids allowed?", 
                    "pt-BR": "Crianças são permitidas?"
                },
                a: {
                    "en-AU": "Absolutely! Kids are more than welcome at all our events. We reckon they’ll especially love the ceremony and the start of the party; keep in mind that as the night goes on, things might get a bit rowdy and the vibe might not be as suited for all ages. It’s also worth mentioning that we won’t have a dedicated kids' area or specific activities for them. Could you please just let us know in the [Message] section of your RSVP if they’ll be joining us and for which parts of the event? That way, we can do our best to make sure everyone is accounted for.",
                    "pt-BR": "Com certeza! Crianças são bem-vindas em todos os nossos eventos. Achamos que elas vão aproveitar bastante a cerimônia e o início da festa principalmente, depois a baguça pode aumentar e talve nao fique um ambiente muito favorável para todas as idades. Vale reforçar que não teremos um espaço kids ou atividades específicas para elas. Pedimos apenas pra vocês avisarem na parte de [Mensagem] do RSVP se e quais horários elas devem participar do evento para que possamos fazer o nosso melhor para acomodar todos."
                }
            },
            {
                q: {
                    "en-AU": "Can I bring my family to the warm-up events?", 
                    "pt-BR": "Posso levar minha família nos eventos de aquecimento?"
                },
                a: {
                    "en-AU": "100%! We’d be more than happy to welcome anyone travelling with you, and kids are definitely invited. Just please give the bride or groom a quick shout about the numbers so we can make sure there's enough food and room for everyone.",
                    "pt-BR": "Com certeza! Ficaremos muito felizes em receber qualquer pessoa que esteja viajando com você, e as crianças são super convidadas. Só pedimos que avisem os noivos sobre a quantidade de pessoas para que possamos nos organizar com os espaços e comida."
                }
            },
            {
                q: {
                    "en-AU": "Will food and drinks be provided at the warm-up events?", 
                    "pt-BR": "Comida e bebida serão por conta dos noivos nos eventos de aquecimento?"
                },
                a: {
                    "en-AU": "For our warm-up events, we’ll be sorting out the food and maybe a few surprise rounds! For drinks, it'll be a 'pay-as-you-go' system where everyone can grab their own at the bar or sort out individual tabs.",
                    "pt-BR": "Nos nossos eventos de aquecimento, a comida (e quem sabe algumas rodadas especiais!) será por nossa conta. Já as bebidas serão pagas individualmente por cada convidado direto no local."
                }
            },
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[20px] mb-4 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-[var(--color-primary)] mb-2">
                    <HelpCircle className="w-5 h-5 text-[var(--color-secondary)]"/>
                    {item.q[lang] || item.q["en-AU"]}
                </div>
                <p className="text-gray-600 ml-7">{item.a[lang] || item.a["en-AU"]}</p>
            </div>
        ))}
    </div>
);