import { useBoard } from "../../hooks/useBoard.ts"
import { NavLi } from "./NavLi.tsx"
import { SearchInput } from "./SearchInput.tsx"
export function Nav(): JSX.Element{
    const {board} = useBoard()
    return <header>
         <nav className={`border-[0.25px] bg-gradient-to-l from-${board?.color}-800 to-${board?.color}-800 font-bold flex justify-between text-sm p-1 px-3`}>
        <ul className="flex gap-6 items-center">
            <li>
            <h1 className="font-bold text-xl">Trello-clon</h1>
            </li>
            <NavLi text={"Espacios de trabajo"}/>
            <NavLi text={"Reciente"}/>
            <li><button className={`p-2 px-1 w-16 bg-${board?'gray-400/50':'blue-600'} hover:bg-slate-500/25 rounded-sm text-white`}>Crear</button></li>
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