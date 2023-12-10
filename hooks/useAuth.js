import { View, Text } from 'react-native'
import React from 'react'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '../config/firebase'

const useAuth = () => {
    const [user, setUser] = React.useState(null)
    React.useEffect( () => {
        const unsub = onAuthStateChanged ( auth, user=> {
            console.log('got user: ', user )
            if(user) {
                setUser(user)
                } else {
                    setUser(null)
                    }
                    })
                    return unsub;
                }, [])

  return { user }
}

export default useAuth;