import { useList } from "../../hooks/useList.ts"
import { Header } from "./ContentHeader.tsx"
import { CreateListButton } from "./CreateListButton.tsx"
import { ListItem } from "./List.tsx"
export function Content():JSX.Element{
    const {lists} = useList()
    return<>
    
        <Header/>
        <div className={`col-start-2 row-end-[-2] row-start-2 flex h-full gap-3 p-3 overflow-auto scrollbar`}>
        {lists.map((list)=>{
            return <ListItem list={list}/> 
        })}
        <CreateListButton />
          
        </div>
    </>
}