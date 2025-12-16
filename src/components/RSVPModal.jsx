import React, {useState} from "react";
import {X} from "lucide-react";
import {app, callGemini} from "@/pages/wedding-raissa.jsx";
import {addDoc, collection, getFirestore} from "@firebase/firestore";

export const RSVPModal = ({isOpen, onClose, t, lang}) => {
    const db = getFirestore(app)

    const [step, setStep] = useState('auth');
    const [password, setPassword] = useState('');
    const [attending, setAttending] = useState('');
    const [plusOne, setPlusOne] = useState('no');
    const [plusOneName, setPlusOneName] = useState('');
    const [errorMsg, setError] = useState('');
    const [successMsg, setSuccess] = useState('');

    // Form State
    const [guestName, setGuestName] = useState('');
    const [message, setMessage] = useState('');

    // AI State
    const [isWishLoading, setIsWishLoading] = useState(false);

    if (!isOpen) return null;

    const saveRsvp = async () => {
        setError("")
        setSuccess("")
        try {
            const docRef = await addDoc(collection(db, "rsvp"), {
                guest: guestName,
                attending: attending,
                plusOne: plusOne,
                plusOneName: plusOneName,
                message: message,
            });
            console.log("Document written with ID: ", docRef.id);
            setSuccess(lang === "en" ? "RSVP Saved Successfully" : "Presença Confirmada!")
        } catch (e) {
            setError(lang === "en" ? "Error trying to save your RSVP. Please, try again." : "Erro ao confirmar presença. Por favor, tente novamente.")
            console.error("Error adding document: ", e);
        }
    }

    const handleLogin = () => {
        if (password.toLowerCase() === 'trancoso') {
            setStep('form');
            setError("")
        } else setError(lang === 'en' ? "Wrong password! Please try again." : "Senha incorreta! Tente novamente.");
    };

    const handleGenerateWish = async () => {
        setIsWishLoading(true);
        const sysPrompt = `Draft a warm, short (under 40 words) wedding wish for Raissa & Pedro who are getting married in Bahia. Tone: Sincere and happy. Language: ${lang === 'en' ? 'English' : 'Portuguese'}.`;
        const text = await callGemini("Draft a wedding message.", sysPrompt);
        setMessage(text.replace(/"/g, '')); // Remove quotes if AI adds them
        setIsWishLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveRsvp();
        // Reset
        setStep('complete');
    };

    const closeForm = () => {
        setPassword('');
        setAttending('');
        setPlusOne('no');
        setGuestName('');
        setMessage('');
        if (step === 'complete') setStep('form')
        onClose();
    }

    return (
        <div
            className="fixed inset-0 bg-[var(--color-primary)]/90 backdrop-blur-sm z-[100] flex justify-center items-center p-4 animate-[fade-in_1s_ease-out] overflow-y-auto">
            <div
                className="bg-[var(--color-surface)] w-full max-w-lg rounded-[25px] border-4 border-[var(--color-primary)] shadow-[15px_15px_0_var(--color-secondary)] p-6 md:p-8 relative my-8">
                <button onClick={closeForm}
                        className="absolute top-4 right-4 text-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:rotate-90 transition-all">
                    <X size={32}/>
                </button>

                {step === 'complete' && (
                    <div className="text-center py-8">
                        {successMsg !== "" && <p className="mt-4 text-sm ">{successMsg}</p>}
                    </div>
                )}

                {step === 'auth' && (
                    <div className="text-center py-8">
                        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_auth}</h3>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                               placeholder="Password / Senha"
                               className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white mb-4 focus:outline-none focus:border-[var(--color-secondary)]"/>
                        <button onClick={handleLogin}
                                className="w-full bg-[var(--color-secondary)] text-white py-3 rounded-full font-bold hover:opacity-90 transition-colors">{t.modal.unlock}</button>
                        <p className="mt-4 text-sm text-gray-400">{t.modal.hint}</p>
                        {errorMsg !== "" && <p className="mt-4 text-sm text-red-600">{errorMsg}</p>}
                    </div>
                )}
                {step === 'form' && (
                    <div className="text-center py-4">
                        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_form}</h3>
                        <form onSubmit={handleSubmit} className="text-left space-y-4">
                            <div>
                                <label
                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.name}</label>
                                <input required type="text" value={guestName}
                                       onChange={(e) => setGuestName(e.target.value)}
                                       className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"/>
                            </div>

                            <div>
                                <label
                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.attending}</label>
                                <select
                                    value={attending}
                                    onChange={(e) => setAttending(e.target.value)}
                                    className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                >
                                    <option value="" disabled>Select / Selecione</option>
                                    <option value="yes">{t.modal.yesAttend}</option>
                                    <option value="no">{t.modal.noAttend}</option>
                                </select>
                            </div>

                            {attending === 'yes' && (
                                <>
                                    <div>
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one}</label>
                                        <select
                                            value={plusOne}
                                            onChange={(e) => setPlusOne(e.target.value)}
                                            className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                        >
                                            <option value="no">{t.modal.noPlusOne}</option>
                                            <option value="yes">{t.modal.yesPlusOne}</option>
                                        </select>
                                    </div>

                                    {plusOne === 'yes' && (
                                        <div>
                                            <label
                                                className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one_name}</label>
                                            <input required type="text"
                                                   className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                                   onChange={(e) => setPlusOneName(e.target.value)} value={plusOneName}
                                                   placeholder="Name / Nome"/>
                                        </div>
                                    )}

                                    {/*<div>*/}
                                    {/*    <label*/}
                                    {/*        className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.dietary}</label>*/}
                                    {/*    <textarea className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"*/}
                                    {/*              rows="2" placeholder="e.g. Vegetarian, Gluten Free..."></textarea>*/}
                                    {/*</div>*/}
                                </>
                            )}

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label
                                        className="block font-bold text-[var(--color-primary)]">{t.modal.message}</label>
                                    {/*<button*/}
                                    {/*    type="button"*/}
                                    {/*    onClick={handleGenerateWish}*/}
                                    {/*    disabled={isWishLoading}*/}
                                    {/*    className="text-xs text-[var(--color-secondary)] font-bold flex items-center gap-1 hover:bg-[var(--color-secondary)]/10 px-2 py-1 rounded-md transition-colors"*/}
                                    {/*>*/}
                                    {/*    <Sparkles*/}
                                    {/*        size={12}/> {isWishLoading ? t.modal.ai_wish_loading : t.modal.ai_wish_btn}*/}
                                    {/*</button>*/}
                                </div>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white focus:border-[var(--color-secondary)] focus:outline-none transition-all"
                                    rows="3"
                                ></textarea>
                            </div>

                            <button type="submit"
                                    className="w-full bg-[var(--color-secondary)] text-white py-3 rounded-full font-bold mt-4 hover:opacity-90">{t.modal.submit}</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};