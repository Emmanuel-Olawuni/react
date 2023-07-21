import { createContext, useState , useEffect } from 'react';
import { onAuthStateChangedListener , CreateUserDocumentfromAuth} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    CurrentUser: null, 
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const unsub = onAuthStateChangedListener((user)=> {
            if(user){
                CreateUserDocumentfromAuth(user)
            }
            setCurrentUser(user)
         })
        return unsub
    } , [])
    const value = { CurrentUser, setCurrentUser }
    return(
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}