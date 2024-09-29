import { ReactNode } from "react"
import { useList } from "../../hooks/useList"
export const FloatingListMenu = ({children, inputId, listId}:{
    children: ReactNode,
    inputId: string,
    listId:number|undefined
})=>{
    const {handleDeleteList} = useList()
    return <label htmlFor={inputId} className="relative flex items-center">
        {children}
        <input type="radio" name="toggleFormBoard" id={inputId} className="hidden peer" />
        <ul className="absolute top-8 font-bold bg-white p-2 h-32 z-20 shadow-md border-spacing-1 border-2 w-36 rounded-md text-sm peer-checked:block hidden">
            <li className="hover:bg-slate-200 p-1 rounded-sm cursor-pointer" data-listid={listId} onClick={handleDeleteList}>
                Eliminar lista
            </li>
            <li className="hover:bg-slate-200 p-1 rounded-sm cursor-pointer">
                
                Cambiar nombre
               
            </li>
        </ul>
    </label>
}