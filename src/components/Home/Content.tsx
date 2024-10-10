import { useList } from "../../hooks/useList.ts"
import { Header } from "./ContentHeader.tsx"
import { CreateListButton } from "./CreateListButton.tsx"
import { ListItem } from "./List.tsx"
import { CardProvider } from "../../context/card.tsx"
import { CardsProvider } from "../../context/cards.tsx"
export function Content():JSX.Element{
    const {lists} = useList()
    return<>
    
        <Header/>
        <div className={`max-w-min col-start-2 row-end-[-2] md:row-start-2 row-start-3 flex gap-3 p-3 overflow-auto scrollbar`}>
        <CardProvider>
       {lists.map((list)=>{
       return <CardsProvider listId={list.id}>
             <ListItem list={list}/> 
       </CardsProvider>
        })}
        </CardProvider>
        <CreateListButton />
          
        </div>
    </>
}