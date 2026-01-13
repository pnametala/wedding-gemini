import {Home} from "lucide-react";
import React from "react";
import {Link} from "react-router-dom";

export const BackButton = ({lang}) => {
    return (
        <Link
            to="/"
            className="w-max mb-8 px-6 py-2 border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
            <Home className="w-4 h-4"/> {lang === 'en-AU' ? 'Back Home' : 'Voltar ao Início'}
        </Link>
    )
};