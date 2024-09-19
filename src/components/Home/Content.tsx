import { Header } from "./ContentHeader.tsx"
import { CreateListButton } from "./CreateListButton.tsx"
export function Content():JSX.Element{
    return <article className="w-[82%] h-80 bg=rose-200">
        <Header/>
        <div className="flex h-[100vh] bg-rose-300 gap-3 p-3">
        <CreateListButton />
            
        </div>
    </article>
}