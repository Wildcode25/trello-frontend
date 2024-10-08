import { useBoard } from "../../hooks/useBoard.ts"
import { SearchInput } from "./SearchInput.tsx"
import { BoardForm } from "./boardForm.tsx"
import { NavOptions } from "./NavOptions.tsx"
export function Nav(): JSX.Element{
    const {board} = useBoard()
    return <header>
         <nav className={`border-[0.25px] gap-2 bg-gradient-to-l from-${board?.color}-800 to-${board?.color}-800 font-bold flex justify-between text-sm p-1 px-3`}>
        <ul className="flex gap-6 items-center">
            <li>
            <h1 className="font-bold text-xl">Trello-clon</h1>
            </li>
            <NavOptions />
            <li>
                <BoardForm position={
                    {
                        top: '5px'
                    }
                } inputId="toggleFormBoard1">

                <div className={`text-center cursor-pointer p-2 px-1 w-16 bg-${board?'gray-400/50':'blue-600'} hover:bg-slate-500/25 rounded-sm text-white`}>Crear</div>
                </BoardForm>
            </li>
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