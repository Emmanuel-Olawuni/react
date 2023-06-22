import { useState } from 'react';
import {createUserwithEmail , CreateUserDocumentfromAuth} from '../../utils/firebase/firebase.utils'
import InputFields from '../input/input.component';

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setformFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields
    const resetFields = ()=> {
        setformFields(defaultformFields)
    }
  
const handlesubmit = async (event)=>{
    event.preventDefault();
    if (password !== confirmPassword) {
        alert('Password do not match')
        return ;
    }
    try {
        const {user} =  await createUserwithEmail(email , password);
        await CreateUserDocumentfromAuth(user , {displayName})
        resetFields();
    } catch (error) {
        console.log('error leleyi');
    }
}

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformFields({ ...formFields, [name]: value })
    }
    return (
        <div>
            <h1>Sign Up with Your Email and Password</h1>
            <form onSubmit={handlesubmit }>
                <InputFields label="Display Name" type="text" name="displayName" value={displayName} required onChange={handleChange} />

                <InputFields label="Email" type="email" name="email" value={email} required onChange={handleChange} />

                <InputFields label="Password" type="password" name="password" value={password} required onChange={handleChange} />

                <InputFields label="Confirm Password" type="password" name="confirmPassword" value={confirmPassword} required onChange={handleChange} />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}
export default SignUpForm