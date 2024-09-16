import { useContext } from "react"
import { NotificationContext } from "../context/Notification.tsx"
export const useNotification = () =>{
    const context = useContext(NotificationContext)
    if(!context) throw new Error("usenotification no puede invocarse fuera de un NotificationProvider")
    const {message, setMessage} = context
    return {message, setMessage}
}