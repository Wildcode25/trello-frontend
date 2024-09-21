import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext.tsx"
import { UserService } from "../services/UserService.ts"
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('Çontext error')
    const {user, setUser} = context  
    useEffect(() => {
        UserService.getUser().then(userResponse => {
            const { data } = userResponse
            if (data && 'email' in data) {
                setUser(data)
                console.log('mensaje')
            }
        })
    }, [])
    return {user, setUser}
}