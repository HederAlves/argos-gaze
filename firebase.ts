import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAepCCb2A8ZNsDwCRhtQAIFs9zT4dB8zxo",
    authDomain: "argos-gaze.firebaseapp.com",
    databaseURL: "https://argos-gaze-default-rtdb.firebaseio.com",
    projectId: "argos-gaze",
    storageBucket: "argos-gaze.appspot.com",
    messagingSenderId: "845230003959",
    appId: "1:845230003959:web:e162f95d36bb12bac1a5f2",
    measurementId: "G-4YE328LQNP"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
