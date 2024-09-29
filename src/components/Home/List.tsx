import { useCard } from "../../hooks/useCard.ts"
import type { List } from "../../types.d.ts"
import { CardForm } from "./cardForm.tsx"
export const ListItem = ({ list }: { list: List }) => {
    const { cardsState } = useCard(list.cards ? list.cards : [])
    return <ul className="rounded-xl h-max max-h-full min-w-72 bg-gray-100 text-gray-700 p-2 text-sm flex flex-col gap-2">
        <li className="flex items-center h-8 p-2 justify-between"><b>{list.name}</b>
            <div className="flex gap-6 items-center"> <i className="h-3 rotate-45 fi fi-br-down-left-and-up-right-to-center"></i><i className="fi h-3 fi-rr-menu-dots"></i></div>
        </li>
        {cardsState.map((card)=>{
            return <li className="flex items-center h-8 p-3 cursor-pointer justify-between bg-white rounded-md shadow-md">
                <div>
                    <b> {card.name}</b>
                </div>
            </li>
        })}
            <CardForm>
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
}