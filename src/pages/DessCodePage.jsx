import React from "react";
import {SectionHeader} from "@/components/SectionHeader.jsx";
import {BackButton} from "@/components/BackButton.jsx";


export const DressCodePage = ({t, lang}) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out] text-center">
        <BackButton lang={lang}/>
        <SectionHeader title={t.nav.dress.title} sub={t.nav.dress.sub}/>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            
        </p>

        {/* <div className="flex justify-center gap-4 mb-12">
            {['var(--color-muted)', 'var(--color-secondary)', 'var(--color-accent)', 'var(--color-highlight)'].map((c, i) => (
                <div key={i} className={`w-16 h-16 rounded-full border-4 border-white shadow-lg`}
                     style={{backgroundColor: c}}></div>
            ))}
        </div> */}
        <div className="bg-white p-8 rounded-[20px] max-w-md mx-auto shadow-sm">
            <div className="font-bold mb-1 text-lg">{lang === 'en'
                ? "For Women"
                : "Mulheres"}</div>
            <div className="mb-4">{lang === 'en'
                ? "Think light fabrics,and colorful dresses"
                : "Vetsidos longos ou mid. Com tecidos leves e coloridos se possível."}</div>
            <a href="https://pin.it/71WBUlZlW" target="_blank"
                className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90">
                {lang === 'en' ? 'Inspo on Pinterest' : 'Inspirações no Pinterest'}
            </a>
            <div class="mt-4 text-sm">{lang === 'en'
                ? "The link above is JUST for inspiration—feel free to wear whatever best suits your style within the recommended dress code!"
                : "O link acima é APENAS para inspiração, fique a vontade para usar o que for mais a sua cara dentro do traje recomendado!"}</div>
            {/* TODO: ADD BUTTON */}
        </div>
        <br />
        <br />
        <br />
        
       <div className="bg-white p-8 rounded-[20px] max-w-md mx-auto shadow-sm">
            <div className="font-bold mb-1 text-lg">{lang === 'en'
                ? "For Men"
                : "Para Homens"}</div>
            <div className="mb-4">{lang === 'en'
                ? "Suit jacket, but no tie required."
                : "Blazer/Terno, gravata não obrigatória. Tons claros ou coloridos se possível."}</div>
            <a href="https://pin.it/7ktYN4Rkf" target="_blank"
                
                className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full font-bold text-sm hover:opacity-90">
                {lang === 'en' ? 'Inspo on Pinterest' : 'Inspirações no Pinterest'}
            </a> 

            <div class="mt-4 text-sm">{lang === 'en'
                ? "The link above is JUST for inspiration—feel free to wear whatever best suits your style within the recommended dress code!"
                : "O link acima é APENAS para inspiração, fique a vontade para usar o que for mais a sua cara dentro do traje recomendado!"}</div>
            {/* TODO: ADD BUTTON */}
        </div>
    </div>
);