import React, {useState, useEffect} from 'react';
import {CONTENT} from "@/locales/locale.js";
import {Header} from "@/layouts/Header.jsx";
import {Footer} from "@/layouts/Footer.jsx";
import {HomePage} from "@/pages/HomePage.jsx";
import {StoryPage} from "@/pages/StoryPage.jsx";
import {DestinationPage} from "@/pages/DestinationPage.jsx";
import {StayPage} from "@/pages/StayPage.jsx";
import {DressCodePage} from "@/pages/DessCodePage.jsx";
import {FAQPage} from "@/pages/FAQPage.jsx";
import {TravelPage} from "@/pages/TravelPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "@/context/AuthContext.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";

import fitasAnimation from "@/lottie/fitas.json";
import {useLottie} from "lottie-react";
import {initializeApp} from "@firebase/app";
import {RSVPPage} from "@/pages/RSVPPage.jsx";
import LoginPage from "@/pages/LoginPage.jsx";

/* --- GEMINI API UTILITIES --- */

const apiKey = ""; // API key injected at runtime

export async function callGemini(prompt, systemInstruction = "") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{parts: [{text: prompt}]}],
        systemInstruction: {parts: [{text: systemInstruction}]}
    };

    const delays = [1000, 2000, 4000, 8000, 16000];
    for (let i = 0; i <= 5; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        } catch (error) {
            if (i === 5) return "The tropical spirits are quiet right now. Please try again later.";
            await new Promise(res => setTimeout(res, delays[i]));
        }
    }
}


/* --- 5. MAIN APP CONTROLLER --- */
const firebaseConfig = {
    apiKey: "AIzaSyC9QRoQ2E0M4qStlDx0rKjW2iJ-MOJQNjA",
    authDomain: "wedding-nameissa.firebaseapp.com",
    projectId: "wedding-nameissa",
    storageBucket: "wedding-nameissa.firebasestorage.app",
    messagingSenderId: "416682485685",
    appId: "1:416682485685:web:74af94ea50b2169f4c9bfc",
    measurementId: "G-93P3D4S60T"
};
export const app = initializeApp(firebaseConfig);

export default function RaissaApp() {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('nameissa-lang') || navigator.language || 'en-AU'
    });
    const [isScrolled, setIsScrolled] = useState(false);

    const t = CONTENT[lang];

    useEffect(() => {
        localStorage.setItem('nameissa-lang', lang);
    }, [lang]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 200);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const options = {
        animationData: fitasAnimation,
        loop: true
    };

    const {View} = useLottie(options);

    return (
        <div
            className="font-[var(--font-body)] text-[var(--color-primary)] bg-[var(--color-bg)] min-h-screen overflow-x-hidden">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Great+Vibes&family=Montserrat:wght@300;400;500;600&display=swap');
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }

        /* --- THEME DEFINITION --- */
        :root {
          /* Colors */
          --color-primary: #2E4A3D;   /* Dark Green: Headings, Text, Footers */
          --color-secondary: #E86C48; /* Orange: Buttons, Highlights, Action Items */
          --color-accent: #F4D35E;    /* Yellow: Borders, Icons, Decorative Elements */
          --color-highlight: #3E8BAC; /* Blue: Badges, Secondary Actions */
          --color-muted: #7C9A86;     /* Sage: Subtle Borders, Badges */
          --color-bg: #F9F6F0;        /* Light Beige: Main Background */
          --color-surface: #FFFCF5;   /* Cream/White: Cards, Modals */

          /* Fonts */
          --font-heading: 'Cinzel', serif;
          --font-script: 'Great Vibes', cursive;
          --font-body: 'Montserrat', sans-serif;
        }
      `}</style>
            <AuthProvider>
                <BrowserRouter>
                    <Header isScrolled={isScrolled} lang={lang} setLang={setLang} t={t} />

                    <div className={'absolute top-0 right-0 pr-5 w-96'}>{View}</div>
                    <main>
                        <Routes>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/" element={
                                <ProtectedRoute>
                                    <HomePage t={t} />
                                </ProtectedRoute>}/>
                            <Route path="story"
                                   element={<ProtectedRoute><StoryPage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="why-ps"
                                   element={<ProtectedRoute><DestinationPage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="stay"
                                   element={<ProtectedRoute><StayPage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="dress"
                                   element={<ProtectedRoute><DressCodePage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="faq" element={<ProtectedRoute><FAQPage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="travel"
                                   element={<ProtectedRoute><TravelPage t={t} lang={lang}/></ProtectedRoute>}/>
                            <Route path="rsvp"
                                   element={<ProtectedRoute><RSVPPage t={t} lang={lang}/></ProtectedRoute>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </AuthProvider>

            <Footer/>
        </div>
    )
        ;
}