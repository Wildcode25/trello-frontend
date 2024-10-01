import { createContext, ReactNode, useState, useEffect } from "react";
import { User } from "../types.ts";
import { UserService } from "../services/UserService.ts";
interface UserContextTypes{
    user: User|null,
    setUser: (user: User|null)=>void
}
export const UserContext = createContext<UserContextTypes|undefined>(undefined)

export function UserProvider({children}:{children:ReactNode}){
    const [user, setUser] = useState<User|null>(null)
    useEffect(() => {
        UserService.getUser().then(userResponse => {
            const { data } = userResponse
            if (data && 'email' in data) {
                setUser(data)
                console.log('mensaje')
            }
        })
    }, [])
    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </UserContext.Provider>
}