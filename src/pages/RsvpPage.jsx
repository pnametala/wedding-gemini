import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const RsvpPage = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        attending: 'yes',
        guests: 1,
        dietary: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setIsSubmitting(true);

        // // Simulate API call
        // await new Promise(resolve => setTimeout(resolve, 1500));

        // setIsSubmitting(false);
        // setIsSuccess(true);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            attending: 'yes',
            guests: 1,
            dietary: ''
        });
        setIsSuccess(false);
    };

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-20 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100"
                >
                    <div className="bg-primary p-8 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold mb-2">{t('rsvp.title')}</h1>
                        <p className="text-primary-foreground/80">{t('rsvp.subtitle')}</p>
                    </div>

                    <div className="p-8 md:p-12">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">{t('rsvp.thankYou')}</h2>
                                    <p className="text-stone-600 mb-8 text-lg">
                                        {t('rsvp.successMessage')}
                                    </p>
                                    <button
                                        onClick={resetForm}
                                        className="text-primary font-bold hover:underline underline-offset-4"
                                    >
                                        {t('rsvp.sendAnother')}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                                            {t('rsvp.fullName')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-stone-50"
                                            placeholder="Jane & John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-stone-700 mb-3 uppercase tracking-wide">
                                            {t('rsvp.attending')}
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className={`cursor-pointer border rounded-xl p-4 flex items-center justify-center gap-2 transition-all ${formData.attending === 'yes' ? 'border-primary bg-primary/5 text-primary ring-1 ring-primary' : 'border-stone-200 hover:border-primary/50'}`}>
                                                <input
                                                    type="radio"
                                                    name="attending"
                                                    value="yes"
                                                    checked={formData.attending === 'yes'}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="font-bold">{t('rsvp.yes')}</span>
                                            </label>
                                            <label className={`cursor-pointer border rounded-xl p-4 flex items-center justify-center gap-2 transition-all ${formData.attending === 'no' ? 'border-stone-400 bg-stone-100 text-stone-600 ring-1 ring-stone-400' : 'border-stone-200 hover:border-stone-400'}`}>
                                                <input
                                                    type="radio"
                                                    name="attending"
                                                    value="no"
                                                    checked={formData.attending === 'no'}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 text-stone-500 focus:ring-stone-500"
                                                />
                                                <span className="font-bold">{t('rsvp.no')}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {formData.attending === 'yes' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-6 overflow-hidden"
                                            >
                                                <div>
                                                    <label htmlFor="guests" className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                                                        {t('rsvp.guests')}
                                                    </label>
                                                    <select
                                                        id="guests"
                                                        name="guests"
                                                        value={formData.guests}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-stone-50 appearance-none"
                                                    >
                                                        {[1, 2, 3, 4, 5].map(num => (
                                                            <option key={num} value={num}>{num}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div>
                                                    <label htmlFor="dietary" className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wide">
                                                        {t('rsvp.dietary')}
                                                    </label>
                                                    <textarea
                                                        id="dietary"
                                                        name="dietary"
                                                        value={formData.dietary}
                                                        onChange={handleChange}
                                                        rows="3"
                                                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-stone-50 resize-none"
                                                        placeholder={t('rsvp.dietaryPlaceholder')}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                {t('rsvp.processing')}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                {t('rsvp.send')}
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RsvpPage;
