import type { Card } from "../../types"

export function CardItem({handleDeleteCard, card}:{
    card: Card,
    handleDeleteCard: (e:any)=>void
}){
    return (
        <li className="flex items-center gap-2 flex-col">
                <div className="h-8 w-full rounded-md bg-slate-200">

                </div>
                <div className="bg-white rounded-md shadow-md h-8 p-3 w-full flex justify-between items-center">
                    <b> {card.name}</b>
                    <i onClick={handleDeleteCard} data-cardId={card.id} className="fi fi-rr-trash  cursor-pointer"></i>
                </div>
               
            </li>
    )
}