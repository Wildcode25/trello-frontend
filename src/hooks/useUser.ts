import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext.tsx"
import { UserService } from "../services/UserService.ts"
import { useNotification } from "./useNotification.ts"
export const useUser = () => {
    const {setMessage} = useNotification()
    const context = useContext(UserContext)
    if (!context) throw new Error('Çontext error')
    const {user, setUser} = context  
    useEffect(() => {
        UserService.getUser().then(userResponse => {
            const { data, message, error } = userResponse
            if (data && 'email' in data) {
                setUser(data)
                setMessage({ content: message, error })
            }
        })
    }, [])
    return {user, setUser}
}