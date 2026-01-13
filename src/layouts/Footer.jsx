import React from "react";

export const Footer = () => {
     const handleSignOut = async () => {
        await signOut(auth)
        navigate('/login');
    }
    
    return (
    
    <footer
        className="bg-[var(--color-primary)] text-[var(--color-bg)] py-20 text-center border-t-[10px] border-[var(--color-accent)]">
        <h2 className="autography font-[var(--font-script)] text-5xl mb-6">Raissa & Pedro</h2>
        <div className="flex flex-col gap-2 font-[var(--font-heading)] text-sm opacity-80 mb-8">
            <p>Porto Seguro, Bahia, 2026</p>
        </div>
        <div className="font-bold text-[var(--color-muted)] tracking-widest text-lg">#RaissaPedro</div>

        <br />
         <button
        onClick={handleSignOut}
        className="cursor-pointer px-4 md:px-5 py-2 border border-[var(--color-muted)] text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-[var(--color-secondary)]/10"
    > Sign Out
    </button>
       
    </footer>
)};