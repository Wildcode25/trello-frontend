import React from "react"
interface Props {
    placeholder: string,
    value: string,
    id: string,
    onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    type: string
}
export function InputForm({
    placeholder,
    value,
    id, 
    onChangeHandler,
    type
}: Props):JSX.Element{
    return (<input type={type} onChange={onChangeHandler} placeholder={placeholder} value={value} id={id} name={id} className="inputForm" />)
}