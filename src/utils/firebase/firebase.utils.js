import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const CreateUserDocumentfromAuth = async(UserAuth)=>{
  const userDocRef = doc(db , 'users' , UserAuth.uid)
  console.log(userDocRef);

  const userSnapshot = getDoc(userDocRef);
  console.log(userSnapshot);
  console.log((await userSnapshot).exists());
  //If user does not exists
  if(!userSnapshot.exists()){
    const  {displayName , email } = UserAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef , {
        displayName, email , createdAt,
      })
    } catch (error) {
      console.log('Error leleyi', error.message);
    }
    return userDocRef;
  }
};



