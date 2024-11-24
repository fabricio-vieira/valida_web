import route from 'next/router'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'
import User from '@/model/User'
import { useState, createContext, useEffect } from 'react'

interface AuthContextProps {
    user?: User | null
    loading?: boolean
    register?: (email: string, password: string) => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function userReceivedFromGoogle(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()

    return {
        uid: userFirebase.uid ?? '',
        name: userFirebase.displayName ?? '',
        email: userFirebase.email ?? '',
        token,
        provider: userFirebase.providerData[0]?.providerId ?? '',
        imageUrl: userFirebase.photoURL ?? ''
    }
}

async function manageCookies(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-auth', `${logged}`, {
            expires: 2
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User | null>(null)

    async function setSession(userFirebase: any) {
        if (userFirebase?.email) {
            const user = await userReceivedFromGoogle(userFirebase)
            setUser(user)
            manageCookies(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookies(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {


        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await setSession(resp.user)
            route.push('/')
        }
        finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {

        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)

            await setSession(resp.user)
            route.push('/')
        }
        finally {
            setLoading(false)
        }
    }

    async function register(email: string, password: string) {

        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)


            await setSession(resp.user)
            route.push('/')
        }
        finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await setSession(null)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {

            const cancelar = firebase.auth().onIdTokenChanged(setSession)
            return () => cancelar()
        } else {
            setLoading(false)
        }

    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            register,
            loginGoogle,
            login,
            logout,
            loading
        }}>

            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContext