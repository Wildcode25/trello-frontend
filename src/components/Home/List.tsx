import { useCard } from "../../hooks/useCard.ts"
import type { Card, List } from "../../types.d.ts"
import { CardForm } from "./cardForm.tsx"
import { FloatingListMenu } from "./floatingListMenu.tsx"
import { useCards } from "../../hooks/useCards.tsx"
const CardItem = ({ cardItem}: {
    cardItem: Card,
    list: List,
}) => {
    const { setSpace, space, setCard, card, positionCard} = useCard()
    const { handleDeleteCard} = useCards()
    const handleCreateSpacing = ()=>{
        if(card&&card.id!==cardItem.id){
            setSpace(true)
        }
    }
    const handleGrabCard = (e: any)=>{
       if(e.target.classList.contains('card-item'))
        setCard(cardItem)
       
    }
    
    return (
        <li  className="flex items-center gap-2 flex-col user-select-none">
            {(space && card) && <div onMouseOut={()=>setSpace(false)} className="h-8 w-full rounded-md bg-slate-200">

            </div>}
            <div onMouseOver={handleCreateSpacing} onMouseDown={handleGrabCard}  className={`card-item left-[${positionCard.x}px]  top-[${positionCard.y}px] active:cursor-grabbing cursor-grab ${card?.id===cardItem.id&&'absolute pointer-events-none z-20 opacity-75 rotate-6'} bg-white rounded-md shadow-md h-8 p-3 w-64 flex justify-between items-center`}>
                <b> {cardItem.name}</b>
                <i onClick={handleDeleteCard} data-cardId={cardItem.id} className="fi fi-rr-trash relative  cursor-pointer"></i>
            </div>

        </li>
    )
}
export const ListItem = ({ list }: { list: List }) => {
    const {cardsState} = useCards()
    const {card} = useCard()
    return <div data-listid={list.id} className={`listEnvelope h-full ${card&&`*:hover:border-sky-400 *:hover:border-2`}`}> 
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

        {cardsState.map((cardItem) => {
            return <CardItem cardItem={cardItem} list={list}/>
        })}
        <CardForm list={list}>
            <li className="relative" >

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