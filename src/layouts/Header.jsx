import {Link, useLocation, useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "@/lib/firebase.js";
import {useAuth} from "@/context/AuthContext.jsx";

export const Header = ({ isScrolled, lang, setLang, t}) => {
    const location = useLocation();
    const isLandingPage = location.pathname === '/';
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    if (!currentUser) {
        return (<></>)
    }
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 py-3
    ${isScrolled || !isLandingPage ? 'translate-y-0 shadow-md rounded-b-[20px] backdrop-blur-sm' : '-translate-y-full bg-transparent'}`}
            style={{ backgroundColor: isScrolled || !isLandingPage ? 'rgba(46, 74, 61, 0.95)' : 'transparent' }}
        >
            <Link
                to={"/"}
                className="autography font-[var(--font-script)] text-2xl md:text-3xl text-[var(--color-bg)] cursor-pointer"
            >
                Raissa & Pedro
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-white/10 rounded-full p-1 flex z-0">
                    <button
                        onClick={() => setLang('en-AU')}
                        className={`cursor-pointer px-3 py-1 rounded-full text-xs font-[var(--font-heading)] font-bold transition-all ${lang === 'en-AU' ? 'bg-[var(--color-secondary)] text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLang('pt-BR')}
                        className={`cursor-pointer px-3 py-1 rounded-full text-xs font-[var(--font-heading)] font-bold transition-all ${lang === 'pt-BR' ? 'bg-[var(--color-secondary)] text-white' : 'text-white/60 hover:text-white'}`}
                    >
                        PT
                    </button>
                </div>
                <Link
                    to={"/rsvp"}
                    className="cursor-pointer px-4 md:px-5 py-2 rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-[var(--color-secondary)]/10"
                >
                    RSVP
                </Link>
                
            </div>
        </header>
    );
}