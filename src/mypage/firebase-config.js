import {
    initializeApp
} from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_DKVlY14MK7vSlfQ4LKJX22lQCY6tXlc",
    authDomain: "project-auth-145e5.firebaseapp.com",
    projectId: "project-auth-145e5",
    storageBucket: "project-auth-145e5.appspot.com",
    messagingSenderId: "314224121730",
    appId: "1:314224121730:web:d8bc68c96b2ed79c0e219b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
}