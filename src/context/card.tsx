import { createContext, ReactNode, useState, useEffect, useRef } from "react";
import type {Card} from '../types.d.ts'
interface PositionCard{
    x: number,
    y: number
}
interface ContextTypes{
    card: Card | null,
    setCard: (card:Card|null)=>void
    positionCard: PositionCard,
    setPosition: (position: PositionCard)=>void,
    positionCardRef: {current: PositionCard}
}
export const CardContext = createContext<ContextTypes|undefined>(undefined)

export const CardProvider = ({children}:{children:ReactNode})=>{
    const positionRef = useRef({
        x: 0,
        y:0
    })
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    
    const handleMove = (e: PointerEvent|any)=>{
            
        const {clientX, clientY, offsetX, offsetY} = e
        if(e.target.classList.contains('card-item')) positionRef.current = {
            x: offsetX,
            y: offsetY
        }
        const newPosition = {x:0, y:0}
        newPosition.x = clientX-positionRef.current.x
        newPosition.y = clientY-positionRef.current.y
        
        setPosition(newPosition)

        if(card && e?.target?.classList.contains('listEnvelope')){
            const newCard = {...card, listId:parseInt( e.target.dataset.listid)}
            setCard(newCard)
        }
       
    }
    
    
    const [card, setCard] = useState<Card|null>(null)
    useEffect(()=>{
        window.addEventListener('pointermove', handleMove)
        return ()=>{
            window.removeEventListener( 'pointermove',handleMove)
        }
    },[card])
    return <CardContext.Provider value={
        {card,
        setCard,
        positionCard: position,
        setPosition,
        positionCardRef: positionRef
    }
    }>
        {children}
    </CardContext.Provider>
}
