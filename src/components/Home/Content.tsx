import { useList } from "../../hooks/list.ts"
import { useBoard } from "../../hooks/useBoard.ts"
import { Header } from "./ContentHeader.tsx"
import { CreateListButton } from "./CreateListButton.tsx"
import { ListItem } from "./List.tsx"
export function Content():JSX.Element{
    const {board} = useBoard()
    const {lists} = useList()
    return<>
    <article className="w-[82%] h-8">
        <Header/>
        <div className={`flex h-[100vh] bg-gradient-to-l from-${board?.color}-400 to-${board?.color}-400 gap-3 p-3`}>
        {lists.map((list)=>{
            return <ListItem list={list}/> 
        })}
        <CreateListButton />
          
        </div>
    </article>
    </>
}