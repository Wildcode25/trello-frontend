import { useCard } from "../../hooks/useCard.ts"
import type { Card, List } from "../../types.d.ts"
import { CardForm } from "./cardForm.tsx"
import { FloatingListMenu } from "./floatingListMenu.tsx"
import { useCards } from "../../hooks/useCards.tsx"
const CardItem = ({ cardItem}: {
    cardItem: Card,
}) => {
    const {  positionCard, cardRef, isDragging, setDragging} = useCard()
    const { handleDeleteCard, listId} = useCards()
  
        const handleChangeCardOrder = (e: any)=>{
           
                if(cardRef.current&&isDragging&&e.target.classList.contains('card-item')){
                    const newOrder = parseInt(e.target.dataset.cardorder)
                    cardRef.current = {...cardRef.current, order: newOrder}
                    console.log("Change order to: "+cardRef.current.order)
             } 
        
         }
        
         const handleGrabCard = ({target}:any)=>{
          if(target.classList.contains('card-item')){
            setDragging(true)
            cardRef.current = cardItem
          }
         }
         
    
    return (
        <li  className="flex group items-center gap-2 flex-col user-select-none">
          <div  className="hidden order-2 h-8 w-full rounded-md bg-slate-200 card-item-space">

            </div>
            <div onMouseOver={handleChangeCardOrder} data-cardid={cardItem.id} data-listid={listId}  onMouseDown={handleGrabCard} data-cardorder={cardItem.order}  className={`card-item left-[${positionCard.x}px]  top-[${positionCard.y}px] active:cursor-grabbing ${(cardRef.current?.id===cardItem.id && isDragging)&&'absolute pointer-events-none z-20 opacity-75 rotate-6'} bg-white rounded-md shadow-md h-8 p-3 w-64 flex justify-between items-center`}>
                <b> {cardItem.name}</b>
                <i onClick={handleDeleteCard} data-cardid={cardItem.id} className="fi fi-rr-trash relative  cursor-pointer"></i>
            </div>

        </li>
    )
}
export const ListItem = ({ list }: { list: List }) => {
    const {cardsState, handleDropCard, handleChangeListId} = useCards()
    const {isDragging} = useCard()
    return <div data-listid={list.id} onMouseOver={handleChangeListId} onMouseUp={handleDropCard} className={`listEnvelope h-full ${isDragging&&`*:hover:border-sky-400 *:hover:border-2`}`}> 
        <ul className="listContainer rounded-xl scrollbar  h-max  max-h-full min-w-72 bg-gray-100 text-gray-700 p-2 text-sm flex flex-col gap-2">
        <li className="flex items-center h-8 p-2 justify-between"><b>{list.name}</b>
            <div className="flex gap-6 items-center">
                <i className="h-3 rotate-45 fi fi-br-down-left-and-up-right-to-center"></i>
                <FloatingListMenu inputId={`list-${list.id}`} listId={list.id}>
                    <div className="cursor-pointer hover:bg-slate-200 p-2 rounded-md items-center flex">
                        <i className="fi h-3 fi-rr-menu-dots "></i>

                    </div>
                </FloatingListMenu>
            </div>
        </li>

        {cardsState.map((cardItem,index) => {
            cardItem.order = (index+1)*100
            return <CardItem cardItem={cardItem}/>
        })}
        <CardForm list={list}>
            <li className="relative order-last" >

                <div className="flex items-center h-8 justify-between w-[17rem]">
                    <div className="hover:bg-slate-200 rounded-md cursor-pointer w-full py-2">
                        <i className="p-1 px-2 rounded-sm fi fi-rs-plus  "></i>
                        <b> Crear tarjeta</b>
                    </div>
                    <i className="fi fi-ss-template p-2"></i>
                </div>
            </li>
        </CardForm>


    </ul>
    </div>
}