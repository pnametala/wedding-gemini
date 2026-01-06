import {Image as ImageIcon} from "lucide-react";
import React from "react";
import {BackButton} from "@/components/BackButton.jsx";
import {SectionHeader} from "@/components/SectionHeader.jsx";

export const StoryPage = ({ t, lang }) => (
    <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
        <BackButton  lang={lang} />
        <SectionHeader title={t.nav.story.title} sub={t.nav.story.sub} />
        <div className="max-w-2xl mx-auto border-l-2 border-[var(--color-secondary)] pl-8 text-left space-y-12 relative">
            {[
                { year: { en: t.story[0].year, pt: t.story[0].year}, title: { en: t.story[0].title, pt: t.story[0].title}, desc: { en: t.story[0].title, pt: t.story[0].title} },
                { year: { en: t.story[1].year, pt: t.story[1].year}, title: { en: t.story[1].title, pt: t.story[1].title}, desc: { en: t.story[1].title, pt: t.story[1].title} },
                { year: { en: t.story[2].year, pt: t.story[2].year}, title: { en: t.story[2].title, pt: t.story[2].title}, desc: { en: t.story[2].title, pt: t.story[2].title} },
                { year: { en: t.story[3].year, pt: t.story[3].year}, title: { en: t.story[3].title, pt: t.story[3].title}, desc: { en: t.story[3].title, pt: t.story[3].title} },
                { year: { en: t.story[4].year, pt: t.story[4].year}, title: { en: t.story[4].title, pt: t.story[4].title}, desc: { en: t.story[4].title, pt: t.story[4].title} },
                { year: { en: t.story[5].year, pt: t.story[5].year}, title: { en: t.story[5].title, pt: t.story[5].title}, desc: { en: t.story[5].title, pt: t.story[5].title} },
                { year: { en: t.story[6].year, pt: t.story[6].year}, title: { en: t.story[6].title, pt: t.story[6].title}, desc: { en: t.story[6].title, pt: t.story[6].title} },
                { year: { en: t.story[7].year, pt: t.story[7].year}, title: { en: t.story[7].title, pt: t.story[7].title}, desc: { en: t.story[7].title, pt: t.story[7].title} },
                { year: { en: t.story[8].year, pt: t.story[8].year}, title: { en: t.story[8].title, pt: t.story[8].title}, desc: { en: t.story[8].title, pt: t.story[8].title} }
            ].map((item, idx) => (
                <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[var(--color-bg)] border-2 border-[var(--color-primary)] rounded-full"></div>
                    <div className={`font-[var(--font-heading)] text-3xl font-bold mb-2 ${item.color ? 'text-[var(--color-primary)]' : 'text-[var(--color-secondary)]'}`}>{item.year[lang]}</div>
                    <div className="bg-white p-6 rounded-[20px] shadow-sm">
                        <h4 className="text-xl font-bold mb-2">{item.title[lang]}</h4>
                        <p className="text-gray-600 mb-4">{item.desc[lang]}</p>

                        {/* Photo Placeholder */}
                        <div className="w-full h-64 bg-gray-50 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 text-gray-400">
                            <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                            <span className="text-sm font-medium">Photo Space</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);