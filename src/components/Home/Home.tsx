import { Nav } from "./Nav.tsx"
import { Content } from "./Content.tsx"
import { Aside } from './Aside.tsx'
import { ListContextProvider } from "../../context/List.tsx"
import { useBoard } from "../../hooks/useBoard.ts"
import { Workspace } from "./Workspace.tsx"
export function Home(): JSX.Element {

    const { board } = useBoard()
    return <label htmlFor="to" className={`text-gray-${board ? '100' : '600'}`}>
        <Nav />
        <input id="to" type="radio" name="toggleFormBoard" className="hidden"/>
        
        <input type="radio" name="toggleBar" className="peer/toggleBar hidden" id="toggleBar" checked/>
        <main className={` grid h-screen grid-cols-[16rem_1fr] peer-checked/toggleBar:-ml-[15rem] group transition-all grid-rows-11 bg-gradient-to-l from-${board?.color}-600 to-${board?.color}-600`}>
        
            <ListContextProvider>

                <div className="relative">
                <input type="radio" name="toggleBar" id="toggleBar2" className="hidden peer" checked />
                    <div className={`bg-${board?.color}-900 w-full h-screen py-4 peer-checked:hidden absolute z-20`}>
                        <label className="cursor-pointer px-2 py-1 bg-gray-400/75 rounded-full inline-block relative -right-60" htmlFor="toggleBar2"><i className="scale-75  inline-block fi text-sm fi-br-angle-right"></i></label>
                    </div>
                    <Aside />
                </div>
                {board ? <Content /> : <Workspace />}
            </ListContextProvider>

        </main>
    </label>
}