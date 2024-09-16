import React, { useEffect, useState } from "react";
import { UserService } from "../services/UserService.ts";
import { useNotification } from "./useNotification.ts";
import type { ErrorDetails } from "../types";
export function useForm() {
    const { setMessage, message } = useNotification()
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    useEffect(() => {
        console.log(message)
        if (message.details) showValidationErrorDetails(message.details)

    }, [message])
    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target
        console.log(name, value)
        const newFormData = {
            ...formData,
            [name]: value
        }
        setformData(newFormData)
    }
    const showValidationErrorDetails = (errors: ErrorDetails[]) => {
        if (!message.error) resetFormData()
        errors.forEach((error) => {
            const input = document.getElementById(error.path) as HTMLInputElement | null
            if (input) {
                if (input.name === "password" || input.name === "confirmPassword") input.type = input.type === "password" ? "text" : "password"
                input?.classList.toggle("errorInput")
                if (input) input.value = error.message
            }

        })
    }
    const resetFormData = () => setformData({ name: '', email: '', password: '', confirmPassword: '' })
    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const response = await UserService.loginUser(formData)
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
    return { formData, onChangeInput, handleLoginSubmit, handleRegisterUser }
}