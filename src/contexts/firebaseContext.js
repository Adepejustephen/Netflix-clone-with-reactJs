import {createContext, useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../lib/firebase.prod'

const useAuthContext = createContext()


export  function UserAuthContextProvider({children}) {

    const [user, setUser] = useState('')

    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    return(
        <useAuthContext.Provider value={{user,signUp, signIn}}>
            {children}
        </useAuthContext.Provider>
    )
}

export function useUserAuth () {
    return useContext(useAuthContext)

}