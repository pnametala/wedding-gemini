import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* --- 5. MAIN APP CONTROLLER --- */
const firebaseConfig = {
    apiKey: "AIzaSyC9QRoQ2E0M4qStlDx0rKjW2iJ-MOJQNjA",
    authDomain: "wedding-nameissa.firebaseapp.com",
    projectId: "wedding-nameissa",
    storageBucket: "wedding-nameissa.firebasestorage.app",
    messagingSenderId: "416682485685",
    appId: "1:416682485685:web:74af94ea50b2169f4c9bfc",
    measurementId: "G-93P3D4S60T"
};
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
