import { signInWithGooglePopup, CreateUserDocumentfromAuth } from '../../../src/utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up/sign-up.component';


const SignIn = () => {


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await CreateUserDocumentfromAuth(user)
    }
    return (
        <div> <h1> Sign In Page</h1>


            <button onClick={logGoogleUser}>Sign IN with Google</button>
            <SignUpForm />

        </div>
    )

}
export default SignIn