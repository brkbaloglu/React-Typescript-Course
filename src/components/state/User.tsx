import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}


export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "Vishwas",
            email: "h@h.com"
        })
    }
   
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.email}</div>
            <div>User email is {user?.name}</div>
        </div>
    )
}