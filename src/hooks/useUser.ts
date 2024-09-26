import { useContext } from "react"
import { UserContext } from "../context/UserContext.tsx"
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('Çontext error')
    const {user, setUser} = context  
    
    return {user, setUser}
}