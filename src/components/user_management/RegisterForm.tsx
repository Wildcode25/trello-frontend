import { TrelloSvg } from "../assets_componentes/TrelloSvg.tsx"
import { AtlassiaSvg } from "../assets_componentes/AtlassiaSvg.tsx"
import { InputForm } from "./InputForm.tsx"
import { useForm } from "../../hooks/useForm.ts"
interface Props{
  setPage: (page: boolean)=>void,
  page: boolean
}
export function RegisterForm({setPage, page}:Props):JSX.Element{
    const { formData, handleRegisterUser, loading}=useForm({page})
    const {email, password, name, confirmPassword} = formData
    return <form onSubmit={handleRegisterUser} className="userManagementForm">
    <div className="flex gap-8 flex-col">
        <TrelloSvg />
        <p className="font-bold text-slate-600 text-m">Registrarse para continuar</p>
    </div>
    <div className="flex-col items-center flex gap-2">
      <InputForm type="text" placeholder="Introduce tu nombre completo" value={name} id={"name"}/>
      <InputForm type="text" placeholder="Introduce tu correo electronico" value={email} id={"email"}/>
      <InputForm type="password"  placeholder="Introduce tu contraseña" value={password} id={"password"}/>
      <InputForm type="password"  placeholder="Confirmar contraseña" value={confirmPassword} id={"confirmPassword"}/>
      <button className="submit " type="submit">{loading? <div className="m-auto load"></div>:'Registrarse' }</button>
    </div>
    <div className="flex gap-4 items-center">
      <a onClick={()=>setPage(!page)} href="#" className="anchor">¿Ya tienes una cuenta? inicia sesión</a>
      
    </div>
    <hr className="bg-gray-400 h-[2px] w-80"/>
    <div className="flex flex-col items-center">
      <AtlassiaSvg />
      <p className="text-sm">Una cuenta para Trello, Jira, Confluence y <a href="#" className="anchor">mas</a></p>
    </div>
</form>
}