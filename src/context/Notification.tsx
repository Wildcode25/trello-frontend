import { createContext, ReactNode, useState } from "react";
import { ErrorDetails } from "../types";

interface Message {
    content: string,
    error: boolean
}
interface NotificationContextType{
    message: Message,
    setMessage: (message: Message)=>void
}
export const NotificationContext = createContext<NotificationContextType|undefined>(undefined)
interface Message{
    details?: ErrorDetails[],
    content: string, 
    error: boolean 
}

interface Props{
    children: ReactNode
}
export const NotificationProvider = ({children}:Props):JSX.Element => {
    const [message, setMessage] = useState<Message>({
        content: "", 
        error: false 
    })
    return <NotificationContext.Provider value={{
        message,
        setMessage
    }}>
        {children}
    </NotificationContext.Provider>
}