import { ReactNode } from "react"
import { useId } from "react"
import type { List } from "../../types.d.ts"
import { useCards } from "../../hooks/useCards.tsx"
interface Props { 
    children: ReactNode,
    list: List
 }
export const CardForm = ({ children }: Props) => {
    const {cardData, handleChangeCardData, handleSubmitCardData} = useCards()
    const inputId = useId()
    return <label htmlFor={inputId} className="relative min-h-8 overflow-hidden">
        <div className="relative top-0 z-20">
            <input type="radio" name="toggleFormBoard" id={inputId} className="hidden peer gap-2" />
            <form onSubmit={handleSubmitCardData} className="cursor-default text-black peer-checked:flex hidden flex-col gap-2">
                <div className="bg-white  min-h-24  w-[17rem] p-2 px-2 rounded-lg">
                    <input autoComplete="off" onChange={handleChangeCardData} value={cardData.name} placeholder="Introduce un nombre para esta tarjeta..." name='name' id="listInput" type="text" autoFocus className="h-[48px] w-56 rounded-sm focus:outline-none placeholder:text-wrap" />
                </div>
                <div className="">
                    <button type="submit" className="bg-blue-600 p-2 rounded-sm text-white">Añadir tarjeta</button>
                    <label htmlFor="to"><i className="hover:bg-gray-200 p-2 rounded-sm cursor-pointer mx-3 fi fi-rs-cross"></i></label>
                </div>
            </form>

        </div>
        <div className="absolute z-10">
            {children}
        </div>

    </label>
}