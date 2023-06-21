import { signInWithGooglePopup } from '../../../src/utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async ()=> {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div> <h1> Sign In Page</h1> 
        
        
        <button onClick={logGoogleUser}>Sign IN with Google</button></div>
    )

}
export default SignIn