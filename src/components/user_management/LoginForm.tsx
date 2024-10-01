import { AtlassiaSvg } from "../assets_componentes/AtlassiaSvg.tsx"
import { TrelloSvg } from "../assets_componentes/TrelloSvg.tsx"
import { InputForm } from "./InputForm.tsx"
import { useForm } from "../../hooks/useForm.ts"
interface Props{
  page: boolean,
  setPage: (page: boolean)=>void
}
export function LoginForm({page, setPage}:Props):JSX.Element{
    const {formData, handleLoginSubmit, loading} =useForm({page})
    const {email, password} = formData

    return <form onSubmit={handleLoginSubmit} className="userManagementForm" action="">
        <div className="flex gap-8 flex-col">
            <TrelloSvg />
            <p className="font-bold text-slate-600 text-m">Inicia sesión para continuar</p>
        </div>
        <div className="flex-col items-center flex gap-2">
          <InputForm type="text" placeholder="Introduce tu correo electronico" value={email} id={"email"}/>
          <InputForm type="password" placeholder="Introduce tu contraseña" value={password} id={"password"}/>
          <button className="submit" type="submit">{loading? <div className="load m-auto"></div>:'Iniciar sesión' }</button>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="anchor">¿No puedes iniciar sesión?</a>
          <div className="w-[3px] h-[3px] bg-blue-600 rounded-full"></div>
          <a onClick={()=>{setPage(!page)}} href="#" className="anchor">Crea una cuenta</a>
          
        </div>
        <hr className="bg-gray-400 h-[2px] w-80"/>
        <div className="flex flex-col items-center">
          <AtlassiaSvg />
          <p className="text-sm">Una cuenta para Trello, Jira, Confluence y <a href="#" className="anchor">mas</a></p>
        </div>
    </form>
}