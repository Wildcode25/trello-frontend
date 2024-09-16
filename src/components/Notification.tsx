import React from "react";
import { useNotification } from "../hooks/useNotification.ts";
import './components_styles/Notification.css'
export const Notification=(): JSX.Element=>{
    const {message, setMessage} = useNotification()
    console.log(message)
    if(message.content==='') return <></>;
    setTimeout(() => setMessage({
        details: message.details,
        content: '',
        error: false
    }), 3000);
    return  <div className="messageContainer">
        <div className={`message ${message.error?"error":"success"}`}>
        <div className="load"></div>
        <span>{message.content}</span>
    </div>
    </div>
}