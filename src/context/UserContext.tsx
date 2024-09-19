import { createContext, ReactNode, useState } from "react";
import { User } from "../types.ts";

interface UserContextTypes{
    user: User|null,
    setUser: (user: User)=>void
}
export const UserContext = createContext<UserContextTypes|undefined>(undefined)

export function UserProvider({children}:{children:ReactNode}){
    const [user, setUser] = useState<User|null>(null)
   
    return <UserContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </UserContext.Provider>
}