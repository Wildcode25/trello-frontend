import { createContext, ReactNode, useState } from "react";
import type {Card} from '../types.d.ts'
interface ContextTypes{
    card: Card | null,
    setCard: (card:Card)=>void

}
export const CardContext = createContext<ContextTypes|undefined>(undefined)

export const CardProvider = ({children}:{children:ReactNode})=>{
    const [card, setCard] = useState<Card|null>(null)
    return <CardContext.Provider value={
        {card,
        setCard}
    }>
        {children}
    </CardContext.Provider>
}
