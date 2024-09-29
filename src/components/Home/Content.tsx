import { useList } from "../../hooks/useList.ts"
import { Header } from "./ContentHeader.tsx"
import { CreateListButton } from "./CreateListButton.tsx"
import { ListItem } from "./List.tsx"
import { CardProvider } from "../../context/card.tsx"
export function Content():JSX.Element{
    const {lists} = useList()
    return<>
    
        <Header/>
        <div className={`col-start-2 row-end-[-2] row-start-2 flex h-full gap-3 p-3 overflow-auto scrollbar`}>
        <CardProvider>
        {lists.map((list)=>{
            return <ListItem list={list}/> 
        })}
        </CardProvider>
        <CreateListButton />
          
        </div>
    </>
}