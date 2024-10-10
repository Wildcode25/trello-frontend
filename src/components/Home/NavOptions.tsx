import { NavLi } from "./NavLi.tsx"
import { useId } from "react"
export const NavOptions = ()=>{
    const id = useId()
    return <div className="relative">
        <label className="md:hidden p-4 py-2 rounded-sm bg-gray-400/50" htmlFor={`${id}`}>mas</label>
        <input type="radio" id={`${id}`} name="toggleFormBoard" className="peer hidden" />
        <ul className="text-black font-normal md:text-white rounded-md min-w-48 min-h-max p-4 hidden peer-checked:block peer-checked:absolute top-8 -left-5 z-20 peer-checked:bg-slate-200 md:flex gap-6">
        <NavLi text={"Espacios de trabajo"}/>
        <NavLi text={"Reciente"}/>
    </ul>
        </div>
}