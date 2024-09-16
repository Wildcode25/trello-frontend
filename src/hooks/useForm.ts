import React, { useEffect, useState } from "react";
import { UserService } from "../services/UserService.ts";
import { useNotification } from "./useNotification.ts";
import type { ErrorDetails } from "../types";
interface Props{
    page: boolean
}
export function useForm({page}:Props) {
    const { setMessage, message } = useNotification()
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    useEffect(() => {
        if (message.details) showValidationErrorDetails(message.details)

    }, [message])
    useEffect(() => {
        resetFormData()
    }, [page])
    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target
        const newFormData = {
            ...formData,
            [name]: value
        }
        setformData(newFormData)
    }
    const showValidationErrorDetails = (errors: ErrorDetails[]) => {
        errors.forEach((error) => {
            const input = document.getElementById(error.path) as HTMLInputElement | null
            if (input) {
                input.classList.add("errorInput")
                input.value = error.message
                if (input.name === "password" || input.name === "confirmPassword") {
                    if (input.type === "password") {
                        input.type = "text"
                    }
                }

                
            }

        })
    }
    const resetFormData = () => {
        Object.keys(formData).forEach((formDataItem)=>{
            console.log(formDataItem)
            document.getElementById(formDataItem)?.classList.remove('errorInput')
        })
        setformData({ name: '', email: '', password: '', confirmPassword: '' })
        
    }
   
    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await UserService.loginUser(formData)
        const { data, message, error } = response

        if (Array.isArray(data) && error) return setMessage({
            details: data,
            content: message,
            error
        })
        else if (!error) {
            setMessage({
                content: message,
                error
            })
        }

    }
    async function handleRegisterUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await UserService.registerUser(formData)
        const { data, message, error } = response
        resetFormData()
        if (Array.isArray(data) && error) return setMessage({
            details: data,
            content: message,
            error
        })
        setMessage({
            content: message,
            error
        })
    }
    return { formData, onChangeInput, handleLoginSubmit, handleRegisterUser, resetFormData }
}