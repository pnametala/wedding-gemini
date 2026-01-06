import React, {useState} from "react";
import {X} from "lucide-react";
import {app, callGemini} from "@/pages/wedding-raissa.jsx";
import {addDoc, collection, getFirestore} from "@firebase/firestore";

class RSVPForm {
    constructor() {
        this.attending = ''
        this.plusOne = 'no'
        this.plusOneName = ''
        this.guestName = ''
        this.hairNeeded = ''
        this.joiningWednesdayEvent = false
        this.joiningThursdayEvent = false
        this.joiningFridayEvent = false
        this.dietaryRequirements = ''
        this.dietaryRequirementsPlusOne = ''
        this.message = ''
    }
}

export const RSVPModal = ({isOpen, onClose, t, lang}) => {
    const db = getFirestore(app)

    const [step, setStep] = useState('form');
    const [password, setPassword] = useState('');

    // Form State
    const [form, setForm] = useState(new RSVPForm());
    const [errorMsg, setError] = useState('');
    const [successMsg, setSuccess] = useState('');

    // AI State
    const [isWishLoading, setIsWishLoading] = useState(false);

    if (!isOpen) return null;

    const saveRsvp = async () => {
        setError("")
        setSuccess("")
        try {
            const docRef = await addDoc(collection(db, "rsvp"), {
                guest: form.guestName,
                attending: form.attending,
                plusOne: form.plusOne,
                dietaryRequirements: form.dietaryRequirements,
                plusOneName: form.plusOneName,
                dietaryRequirementsPlusOne: form.dietaryRequirementsPlusOne,
                joiningWednesdayEvent: form.joiningWednesdayEvent,
                joiningThursdayEvent: form.joiningThursdayEvent,
                joiningFridayEvent: form.joiningFridayEvent,
                hairNeeded: form.hairNeeded,
                message: form.message,
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
        setForm(new RSVPForm());
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

                {/*{step === 'auth' && (*/}
                {/*    <div className="text-center py-8">*/}
                {/*        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_auth}</h3>*/}
                {/*        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}*/}
                {/*               placeholder="Password / Senha"*/}
                {/*               className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white mb-4 focus:outline-none focus:border-[var(--color-secondary)]"/>*/}
                {/*        <button onClick={handleLogin}*/}
                {/*                className="w-full bg-[var(--color-secondary)] text-white py-3 rounded-full font-bold hover:opacity-90 transition-colors">{t.modal.unlock}</button>*/}
                {/*        <p className="mt-4 text-sm text-gray-400">{t.modal.hint}</p>*/}
                {/*        {errorMsg !== "" && <p className="mt-4 text-sm text-red-600">{errorMsg}</p>}*/}
                {/*    </div>*/}
                {/*)}*/}
                {step === 'form' && (
                    <div className="text-center py-4">
                        <h3 className="font-[var(--font-heading)] text-3xl text-[var(--color-primary)] mb-6">{t.modal.title_form}</h3>
                        <form onSubmit={handleSubmit} className="text-left space-y-4">
                            <div>
                                <label
                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.name}</label>
                                <input required type="text" value={form.guestName}
                                       onChange={(e) => setForm({...form, guestName: e.target.value})}
                                       className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"/>
                            </div>

                            <div>
                                <label
                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.attending}</label>
                                <select
                                    value={form.attending}
                                    onChange={(e) => setForm({...form, attending: e.target.value})}
                                    className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                >
                                    <option value="" disabled>Select / Selecione</option>
                                    <option value="yes">{t.modal.yesAttend}</option>
                                    <option value="no">{t.modal.noAttend}</option>
                                </select>
                            </div>

                            {form.attending === 'yes' && (
                                <>
                                    <div>
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.dietary}</label>
                                        <input required type="text" value={form.dietaryRequirements}
                                               onChange={(e) => setForm({...form, dietaryRequirements: e.target.value})}
                                               className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"/>
                                    </div>
                                    <div>
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one}</label>
                                        <select
                                            value={form.plusOne}
                                            onChange={(e) => setForm({...form, plusOne: e.target.value})}
                                            className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                        >
                                            <option value="no">{t.modal.noPlusOne}</option>
                                            <option value="yes">{t.modal.yesPlusOne}</option>
                                        </select>
                                    </div>

                                    {form.plusOne === 'yes' && (
                                        <>
                                            <div>
                                                <label
                                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.plus_one_name}</label>
                                                <input required type="text"
                                                       className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"
                                                       onChange={(e) => setForm({
                                                           ...form,
                                                           plusOneNames: e.target.value
                                                       })}
                                                       value={form.plusOneName}
                                                       placeholder={t.modal.name}/>
                                            </div>
                                            <div>
                                                <label
                                                    className="block font-bold text-[var(--color-primary)] mb-1">{t.modal.dietaryPlusOne}</label>
                                                <input required type="text" value={form.dietaryRequirementsPlusOne}
                                                       onChange={(e) => setForm({...form, dietaryRequirementsPlusOne: e.target.value})}
                                                       className="w-full p-3 rounded-xl border-2 border-gray-200 bg-white"/>
                                            </div>
                                        </>
                                    )}
                                    <div className="flex justify-center items-center">
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1 w-full">{t.modal.hairNeeded}</label>
                                        <input type="checkbox"
                                               className="w-full border-2 border-gray-200 bg-white"
                                               onChange={(e) => setForm({...form, hairNeeded: e.target.checked})}
                                               checked={form.hairNeeded}
                                        />
                                    </div>

                                    {/*Attending extra events?*/}
                                    <div className="flex justify-center items-center">
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1 w-full">{t.modal.joiningWednesdayEvent}</label>
                                        <input type="checkbox"
                                               className="w-full border-2 border-gray-200 bg-white"
                                               onChange={(e) => setForm({
                                                   ...form,
                                                   joiningWednesdayEvent: e.target.checked
                                               })}
                                               checked={form.joiningWednesdayEvent}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1 w-full">{t.modal.joiningThursdayEvent}</label>
                                        <input type="checkbox"
                                               className="w-full border-2 border-gray-200 bg-white"
                                               onChange={(e) => setForm({
                                                   ...form,
                                                   joiningThursdayEvent: e.target.checked
                                               })}
                                               checked={form.joiningThursdayEvent}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <label
                                            className="block font-bold text-[var(--color-primary)] mb-1 w-full">{t.modal.joiningFridayEvent}</label>
                                        <input type="checkbox"
                                               className="w-full border-2 border-gray-200 bg-white"
                                               onChange={(e) => setForm({
                                                   ...form,
                                                   joiningFridayEvent: e.target.checked
                                               })}
                                               checked={form.joiningFridayEvent}
                                        />
                                    </div>


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
                                    value={form.message}
                                    onChange={(e) => setForm({...form, message: e.target.value})}
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