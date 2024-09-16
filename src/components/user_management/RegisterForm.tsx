import React from "react"
import { TrelloSvg } from "../assets_componentes/TrelloSvg.tsx"
import { AtlassiaSvg } from "../assets_componentes/AtlassiaSvg.tsx"
import { InputForm } from "./InputForm.tsx"
import { useForm } from "../../hooks/useForm.ts"
interface Props{
  setPage: (page: boolean)=>void,
  page: boolean
}
export function RegisterForm({setPage, page}:Props):JSX.Element{
    const {onChangeInput, formData, handleRegisterUser}=useForm({page})
    const {email, password, name, confirmPassword} = formData
    return <form onSubmit={handleRegisterUser} className="userManagementForm">
    <div className="flex gap-8 flex-col">
        <TrelloSvg />
        <p className="font-bold text-slate-600 text-m">Registrarse para continuar</p>
    </div>
    <div className="flex-col items-center flex gap-2">
      <InputForm type="text" onChangeHandler={onChangeInput} placeholder="Introduce un nombre de usuario" value={name} id={"name"}/>
      <InputForm type="text" onChangeHandler={onChangeInput} placeholder="Introduce tu correo electronico" value={email} id={"email"}/>
      <InputForm type="password" onChangeHandler={onChangeInput} placeholder="Introduce tu contraseña" value={password} id={"password"}/>
      <InputForm type="password" onChangeHandler={onChangeInput} placeholder="Confirmar contraseña" value={confirmPassword} id={"confirmPassword"}/>
      <button className="submit" type="submit">Registrarse</button>
    </div>
    <div className="flex gap-4 items-center">
      <a onClick={()=>setPage(!page)} href="#" className="anchor">¿Ya tienes una cuenta? inisia sesión</a>
      
    </div>
    <hr className="bg-gray-400 h-[2px] w-80"/>
    <div className="flex flex-col items-center">
      <AtlassiaSvg />
      <p className="text-sm">Una cuenta para Trello, Jira, Confluence y <a href="#" className="anchor">mas</a></p>
    </div>
</form>
}