import { signInWithGooglePopup , CreateUserDocumentfromAuth} from '../../../src/utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async ()=> {
        const {user } = await signInWithGooglePopup();
       const userDocRef = await  CreateUserDocumentfromAuth(user)
    }
    return (
        <div> <h1> Sign In Page</h1> 
        
        
        <button onClick={logGoogleUser}>Sign IN with Google</button></div>
    )

}
export default SignIn