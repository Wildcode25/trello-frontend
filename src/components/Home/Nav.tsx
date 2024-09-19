import { NavLi } from "./NavLi.tsx"
import { SearchInput } from "./SearchInput.tsx"
export function Nav(): JSX.Element{

    return <header>
         <nav className="border-[0.25px] border-gray-400 bg-rose-400 font-bold px-3 py-2 flex justify-between text-sm">
        <ul className="flex gap-6 items-center">
            <li>
            <h1 className="font-bold text-xl">Trello-clon</h1>
            </li>
            <NavLi text={"Espacios de trabajo"}/>
            <NavLi text={"Reciente"}/>
            <li><button className="p-2 bg-gray-400/25 hover:bg-slate-500/25 rounded-sm">Crear</button></li>
        </ul>
        <ul className="flex gap-6 items-center">
            <li>
                <SearchInput />
            </li>
            <li>
            <i className="fi fi-ts-bell-ring"></i>
            </li>
        </ul>
        </nav>
    </header>
}