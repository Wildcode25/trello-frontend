import React, { useEffect, useContext, useState } from "react";
import { UserService } from "../services/UserService.ts";
import { useNotification } from "./useNotification.ts";
import type { ErrorDetails, UserResponse } from "../types";
import { FormContext } from "../context/FormContext.tsx";
import { useUser } from "./useUser.ts";
interface Props{
    page?: boolean
}
export function useForm({page}:Props) {
    const {setUser} = useUser()
    const [loading, setLoading] = useState(false)
    const { setMessage, message } = useNotification()
    const context = useContext(FormContext)
    if(!context) throw new Error('No usar ')
    const {formData, setformData} = context    
    useEffect(() => {
        if(message.content===''){
            const updatedFormData = {...formData}

            setformData(updatedFormData)
        }
    }, [message])
    useEffect(() => {
        resetFormData()
    }, [page])
    const showValidationErrorDetails = (errors: ErrorDetails[]) => {
        let newFormData = {...formData}
        errors.forEach((error) => {
            const input = document.getElementById(error.path) as HTMLInputElement | null
            if (input) {
                input.classList.add("errorInput")
                newFormData = {...newFormData, [input.name]: error.message}
                
                if (input.name === "password" || input.name === "confirmPassword") {
                    if (input.type === "password") {
                        input.type = "text"
                    }
                }
                
            }

        });
        setformData(newFormData)

    }

    const resetFormData = () => {
        Object.keys(formData).forEach((formDataItem)=>{
            document.getElementById(formDataItem)?.classList.remove('errorInput')
        })
        setformData({ name: '', email: '', password: '', confirmPassword: '' })
        
    }
    const verifyResult = ({data, message, error}:UserResponse)=>{
        if (Array.isArray(data) && error){
            showValidationErrorDetails(data)    
            return setMessage({
                details: data,
                content: message,
                error
            })
        }
        resetFormData()
        setMessage({
            content: message,
            error
        })
        if(data && 'email'in data)setUser(data)
    } 
    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        const response = await UserService.loginUser(formData)
        setLoading(false)
        const { data, message, error } = response
        verifyResult({data, message, error})

    }
    
    async function handleRegisterUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        const response = await UserService.registerUser(formData)
        setLoading(false)
        const { data, message, error } = response
        verifyResult({data, message, error})
    }
    return { setformData, formData, handleLoginSubmit, handleRegisterUser, resetFormData , setLoading, loading }
}