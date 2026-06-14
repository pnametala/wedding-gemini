import {BackButton} from "@/components/BackButton.jsx";
import React, {useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {app} from "@/pages/wedding-raissa.jsx";
import {RSVPForm} from "@/pages/RSVPPage.jsx";

export const RSVPListPage = ({t, lang}) => {
    const db = getFirestore(app)
    const [rsvps, setRsvps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRSVPs = async () => {
            try {
                const rsvpCollection = collection(db, "rsvp");
                const rsvpSnapshot = await getDocs(rsvpCollection);

                const rsvpList = rsvpSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const rsvpForm = new RSVPForm();

                    // Populate with data from Firestore
                    Object.keys(rsvpForm).forEach(key => {
                        if (data[key] !== undefined) {
                            rsvpForm[key] = data[key];
                        }
                    });
                    return {
                        id: doc.id,
                        ...rsvpForm
                    };
                });

                setRsvps(rsvpList);
            } catch (err) {
                console.error("Error fetching RSVPs:", err);
                setError("Failed to load RSVPs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRSVPs();
    }, []);

    const exportToCSV = () => {
        const headers = [
            "Guest Name", "Attending", "Plus One", "Plus One Name", "Hair Needed",
            "Wednesday", "Thursday", "Friday",
            "Dietary Requirements", "Dietary Requirements (Plus One)", "Message"
        ];
        const rows = rsvps.map(r => [
            r.guest,
            r.attending,
            r.plusOne,
            r.plusOneName || "",
            r.hairNeeded ? "Yes" : "No",
            r.joiningWednesdayEvent ? "Yes" : "No",
            r.joiningThursdayEvent ? "Yes" : "No",
            r.joiningFridayEvent ? "Yes" : "No",
            r.dietaryRequirements || "",
            r.dietaryRequirementsPlusOne || "",
            r.message || ""
        ].map(v => `"${String(v).replace(/"/g, '""')}"`));

        const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
        const blob = new Blob([csv], {type: "text/csv;charset=utf-8;"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "rsvp-list.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    if (loading) {
        return <div className="flex justify-center items-center p-8">Loading RSVP data...</div>;
    }

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }


    return (
        <div className="max-w-5xl mx-auto px-6 py-24 min-h-screen animate-[fade-in_1s_ease-out]">
            <BackButton lang={lang}/>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--color-primary)]">RSVP Responses</h2>
                <button
                    onClick={exportToCSV}
                    disabled={rsvps.length === 0}
                    className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                    Export CSV
                </button>
            </div>

            {rsvps.length === 0 ? (
                <p className="text-gray-500">No RSVP responses yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                        <thead className="bg-[var(--color-muted)] text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Guest Name</th>
                            <th className="py-3 px-4 text-left">Attending</th>
                            <th className="py-3 px-4 text-left">Plus One</th>
                            <th className="py-3 px-4 text-left">Hair Needed</th>
                            <th className="py-3 px-4 text-left">Events</th>
                            <th className="py-3 px-4 text-left">Dietary Requirements</th>
                            <th className="py-3 px-4 text-left">Message</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {rsvps.map((rsvp) => (
                            <tr key={rsvp.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <span className="font-medium">{rsvp.guest}</span>
                                </td>
                                <td className="py-3 px-4">
                                    {rsvp.attending === 'yes' ? (
                                        <span className="text-green-600 font-medium">Yes</span>
                                    ) : rsvp.attending === 'no' ? (
                                        <span className="text-red-600 font-medium">No</span>
                                    ) : (
                                        <span className="text-gray-400">Pending</span>
                                    )}
                                </td>
                                <td className="py-3 px-4">
                                    {rsvp.plusOne === 'yes' ? (
                                        <div>
                                            <span className="text-green-600 font-medium">Yes</span>
                                            {rsvp.plusOneName && (
                                                <div className="text-sm text-gray-500 mt-1">
                                                    {rsvp.plusOneName}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">No</span>
                                    )}
                                </td>
                                <td className="py-3 px-4">
                                    {rsvp.hairNeeded ? (
                                        <div>
                                            <span className="text-green-600 font-medium">Yes</span>

                                        </div>
                                    ) : (
                                        <span className="text-gray-500">No</span>
                                    )}
                                </td>
                                <td className="py-3 px-4">
                                    <ul className="text-sm">
                                        {rsvp.joiningWednesdayEvent && <li>Wednesday</li>}
                                        {rsvp.joiningThursdayEvent && <li>Thursday</li>}
                                        {rsvp.joiningFridayEvent && <li>Friday</li>}
                                        {!rsvp.joiningWednesdayEvent && !rsvp.joiningThursdayEvent && !rsvp.joiningFridayEvent &&
                                            <li className="text-gray-400">None</li>}
                                    </ul>
                                </td>
                                <td className="py-3 px-4">
                                    <div>
                                        {rsvp.dietaryRequirements ? (
                                            <p>{rsvp.dietaryRequirements}</p>
                                        ) : (
                                            <span className="text-gray-400">None</span>
                                        )}

                                        {rsvp.plusOne === 'yes' && rsvp.dietaryRequirementsPlusOne && (
                                            <div className="mt-2 border-t border-gray-100 pt-2 text-sm">
                                                <span className="text-gray-500 font-medium">Plus One:</span> {rsvp.dietaryRequirementsPlusOne}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="py-3 px-4">
                                    {rsvp.message ? (
                                        <div className="max-w-xs overflow-hidden text-ellipsis">
                                            <p className="italic text-gray-600">"{rsvp.message}"</p>
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">None</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}