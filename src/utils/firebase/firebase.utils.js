import {initializeApp} from 'firebase/app'
import {getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAj6shbtHe42iQtn6XQZzE-HypAZ7cuK4g",
    authDomain: "crown-clothing-emma.firebaseapp.com",
    projectId: "crown-clothing-emma",
    storageBucket: "crown-clothing-emma.appspot.com",
    messagingSenderId: "799122598636",
    appId: "1:799122598636:web:6d3a31a8f4dfb17dc0d3c9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth , provider);
