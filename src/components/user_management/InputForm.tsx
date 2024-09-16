import React from "react"
import { useForm } from "../../hooks/useForm"
interface Props {
    placeholder: string,
    value: string,
    id: string,
    type: string,

}

export function InputForm({
    placeholder,
    value,
    id,
    type
}: Props): JSX.Element {
    const { formData, setformData } = useForm({})
    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target
        const newFormData = {
            ...formData,
            [name]: value
        }
        e.target.classList.remove('errorInput')
        setformData(newFormData)
    }
    const resetInputDesign = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target
        if (input.className.includes('errorInput')) {
            const newFormData = { ...formData, [input.name]: '' }
            setformData(newFormData)
        }
        
        if (input.name === 'password' || input.name === 'confirmPassword' && input.type === 'text')
            input.type = 'password'

    }

    return (<input type={type} onFocus={resetInputDesign} onChange={onChangeInput} placeholder={placeholder} value={value} id={id} name={id} className="inputForm" />)
}