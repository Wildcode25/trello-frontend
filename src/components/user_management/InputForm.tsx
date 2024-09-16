import React from "react"
interface Props {
    placeholder: string,
    value: string,
    id: string,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    type: string
}
const resetInputDesign = (e: React.FocusEvent<HTMLInputElement>)=>{
    const input = e.target
    input.classList.remove('errorInput')
    input.value=''
    if(input.name==='password'|| input.name==='confirmPassword' && input.type==='text') 
        input.type='password'
        
}
export function InputForm({
    placeholder,
    value,
    id, 
    onChangeHandler,
    type
}: Props):JSX.Element{
    return (<input type={type} onFocus={resetInputDesign} onChange={onChangeHandler} placeholder={placeholder} value={value} id={id} name={id} className="inputForm" />)
}