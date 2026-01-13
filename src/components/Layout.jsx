```javascript
import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '@/context/AuthContext';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    const { logout } = useAuth();
    const navigate = useNavigate();

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.story'), path: '/story' },
        { name: t('nav.guide'), path: '/guide' },
        { name: t('nav.rsvp'), path: '/rsvp' },
    ];

    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
            {/* Navigation */}
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    isScrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                    <Link
                        to="/"
                        className={cn(
                            "text-2xl font-serif font-bold tracking-wider flex items-center gap-2 transition-colors",
                            isScrolled || !isHome ? "text-primary" : "text-primary-foreground"
                        )}
                    >
                        <Heart className="w-6 h-6 fill-current" />
                        <span>A & B</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={cn(
                                        "text-sm font-medium uppercase tracking-widest hover:text-opacity-70 transition-colors",
                                        location.pathname === link.path
                                            ? (isScrolled || !isHome ? "text-primary font-bold" : "text-primary-foreground font-bold")
                                            : (isScrolled || !isHome ? "text-primary/80" : "text-primary-foreground/90")
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={handleLogout}
                                className={cn(
                                    "text-sm font-medium uppercase tracking-widest hover:text-opacity-70 transition-colors flex items-center gap-2",
                                    isScrolled || !isHome ? "text-primary/80" : "text-primary-foreground/90"
                                )}
                                title="Logout"
                            >
                                <LogOut className="w-4 h-4" />
                            </button>
                        </nav>
                        <div className={cn(isScrolled || !isHome ? "text-primary" : "text-white")}>
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className={cn(isScrolled || !isHome ? "text-primary" : "text-white")}>
                            <LanguageSwitcher />
                        </div>
                        <button
                            className="p-2 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className={cn("w-6 h-6", isScrolled || !isHome ? "text-primary" : "text-primary-foreground")} />
                            ) : (
                                <Menu className={cn("w-6 h-6", isScrolled || !isHome ? "text-primary" : "text-primary-foreground")} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col p-4 space-y-4 animate-in slide-in-from-top-5 border-t border-stone-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-lg font-medium py-2 px-4 rounded-md hover:bg-secondary/20 transition-colors",
                                    location.pathname === link.path ? "text-primary bg-secondary/30" : "text-stone-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                         <button
                            onClick={handleLogout}
                            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-secondary/20 transition-colors text-stone-600 flex items-center gap-2 text-left w-full"
                        >
                            <LogOut className="w-5 h-5" />
                            {t('logout', 'Logout')}
                        </button>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-stone-100 py-8 border-t border-stone-200">
                <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
                    <p className="font-serif mb-2 text-primary">Ana & Bruno • 12.12.2025</p>
                    <p>Porto Seguro, Bahia, Brazil</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
```
