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
        <div className="flex h-[100%] justify-start">
            <ListContextProvider>
            <Aside />
            {board? <Content />:<Workspace/>}
            </ListContextProvider>

        </div>
    </div>
}