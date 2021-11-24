import { useEffect, useState } from 'react'
import { authStateChanged } from 'services/firebase'
import { useNavigate } from 'react-router-dom'

export default function useUser(){
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate()

    useEffect(() => {
        authStateChanged(user => setUser(user))
    }, [])
    
    useEffect(() => {
        user === null && navigate('/login')
    }, [user, navigate])

    return user
}