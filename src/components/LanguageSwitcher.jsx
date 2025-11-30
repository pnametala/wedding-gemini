import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en-AU' ? 'pt-BR' : 'en-AU';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-sm font-medium"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4" />
            <span>{i18n.language === 'en-AU' ? 'EN' : 'PT'}</span>
        </button>
    );
};

export default LanguageSwitcher;
