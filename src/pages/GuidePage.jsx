import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Sun, Umbrella, Utensils } from 'lucide-react';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GuidePage = () => {
    const { t } = useTranslation();
    const position = [-16.4406, -39.0624]; // Porto Seguro coordinates

    const markers = [
        { pos: [-16.4406, -39.0624], title: t('guide.airport'), desc: t('guide.airportDesc') },
        { pos: [-16.3456, -39.0089], title: t('guide.venue'), desc: t('guide.venueDesc') }, // Approx La Torre location
        { pos: [-16.4486, -39.0647], title: t('guide.historic'), desc: t('guide.historicDesc') },
        { pos: [-16.5906, -39.0924], title: t('guide.trancoso'), desc: t('guide.trancosoDesc') },
    ];

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">{t('guide.title')}</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
                        {t('guide.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Map Section */}
                    <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {markers.map((marker, index) => (
                                <Marker key={index} position={marker.pos}>
                                    <Popup>
                                        <div className="text-center">
                                            <h3 className="font-bold text-primary">{marker.title}</h3>
                                            <p className="text-sm text-stone-600">{marker.desc}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    {/* Recommendations Section */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <Sun className="w-6 h-6" />
                                <h3 className="text-xl font-bold">{t('guide.essentials')}</h3>
                            </div>
                            <ul className="space-y-3 text-stone-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    {t('guide.sunscreen')}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    {t('guide.repellent')}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    {t('guide.clothing')}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <Umbrella className="w-6 h-6" />
                                <h3 className="text-xl font-bold">{t('guide.beaches')}</h3>
                            </div>
                            <ul className="space-y-3 text-stone-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    {t('guide.espelho')}
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    {t('guide.nativos')}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <Utensils className="w-6 h-6" />
                                <h3 className="text-xl font-bold">{t('guide.mustTry')}</h3>
                            </div>
                            <p className="text-stone-600 italic">
                                "{t('guide.foodTip')}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidePage;
