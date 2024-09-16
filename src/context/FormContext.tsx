import { createContext, ReactNode, useState } from "react";
import type { FormData } from "../types.ts";
interface FormContextTypes{
    formData: FormData,
    setformData: (data: FormData)=>void

}

export const FormContext = createContext<FormContextTypes|undefined>(undefined)

interface Props{
    children: ReactNode
}
export function FormContextProvider({children}: Props): JSX.Element{
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    return <FormContext.Provider value={{
        formData,
        setformData
    }}>
        {children}
    </FormContext.Provider>
}