import { useState  } from 'react';
import { signInWithGooglePopup, CreateUserDocumentfromAuth , SignUserwithEmail } from '../../utils/firebase/firebase.utils'
import InputFields from '../input/input.component';
import '../sign-in-form/sign-in.styles.scss'
import Button from '../button/button.component';
import { signInWithEmailAndPassword } from 'firebase/auth';
const defaultformFields = {

    email: '',
    password: '',
    
}

const SignInForm = () => {
    const [formFields, setformFields] = useState(defaultformFields);
    const {  email, password } = formFields
    const resetFields = () => {
        setformFields(defaultformFields)
    }
    const SignInwithGoogle = async () => {
       await signInWithGooglePopup();
       
    }

    const handlesubmit = async (event) => {
        event.preventDefault();
      
        try {
                const {user}  = await SignUserwithEmail( email , password)
               
                resetFields();
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value })
    }
    return (
        <div >
            <div className='sign-u-container'>
                <h2>Already have an account ?</h2>
                <span>Sign In with Your Email and Password</span>
                <form onSubmit={handlesubmit}>

                    <InputFields label="Email" type="email" name="email" value={email} required onChange={handleChange} />

                    <InputFields label="Password" type="password" name="password" value={password} required onChange={handleChange} />


                <div className='buttons-container'>
                <Button type="submit" > Sign In</Button>
                    <Button  buttonType="google" onClick={SignInwithGoogle}>Google Sign In</Button>
                </div>

                </form>

            </div>

        </div>
    )
}
export default SignInForm