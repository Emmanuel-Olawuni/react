import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider , createUserWithEmailAndPassword  , signInWithEmailAndPassword} from 'firebase/auth'
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
export const CreateUserDocumentfromAuth = async(userAuth , additionalInfo = {})=>{
  const userDocRef = doc(db , 'users' , userAuth.uid)


  const userSnapShot = await getDoc(userDocRef);

//If user does not exists
  if(!userSnapShot.exists()){
    const  { displayName , email } =userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef , {
        displayName, email , createdAt , ...additionalInfo
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef
};

export const createUserwithEmail = async (email, password)=> {
  if(!email || !password) return;
 return await  createUserWithEmailAndPassword(auth , email, password)
}
export const SignUserwithEmail = async (email, password)=> {
  if(!email || !password) return;
 return await  signInWithEmailAndPassword(auth , email, password)
}


