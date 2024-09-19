import { useUser } from "../../hooks/useUser.js"
import { AsideItem } from "./AsideItem.js"
export const Aside = ()=>{
   const {user} = useUser()
    return <aside className="bg-rose-400 w-[16em] h-[100vh]">
        <div className="flex gap-2 p-2 items-center border-[0.5px] border-gray-400">
        <div className="text-md font-bold w-8 h-8 px-3 rounded-sm py-1 bg-blue-600">
            {user?.name[0]}
        </div>
        <p className="font-bold text-sm">Espacio de trabajo de <div>{user?.name}</div> <div className="font-normal">Gratuito</div></p>
        </div>
    <ul className="py-3 text-sm">
        <AsideItem><i className="m-4 fi fi-bs-chalkboard"></i>Tableros</AsideItem>
        <AsideItem><i className="fi fi-tr-member-search m-4 "></i>Miembros</AsideItem>
        <AsideItem><i className="m-4 fi fi-tc-settings"></i>Ajustes del espacio de trabajo</AsideItem>
    </ul>
    <ul className="p-3">
        <div className="flex justify-between"><h2 className="font-bold text-sm">Sus tableros</h2><i className="hover:bg-gray-400/25 rounded-md fi fi-rs-plus"></i></div>
    </ul>
    </aside>
}