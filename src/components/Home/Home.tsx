import { Nav } from "./Nav.tsx"
import { Content } from "./Content.tsx"
import { Aside } from './Aside.tsx'
import { ListContextProvider } from "../../context/List.tsx"
import { useBoard } from "../../hooks/useBoard.ts"
import { Workspace } from "./Workspace.tsx"
export function Home(): JSX.Element {

    const {board} = useBoard()
    return <div className={`text-gray-${board?'100':'600'}`}>
        <Nav />
        <main className={`grid h-screen grid-cols-[16rem_1fr] grid-rows-11 bg-gradient-to-l from-${board?.color}-600 to-${board?.color}-600`}>
            <ListContextProvider>
            <Aside />
            {board? <Content />:<Workspace/>}
            </ListContextProvider>

        </main>
    </div>
}