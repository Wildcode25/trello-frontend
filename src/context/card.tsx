import { createContext, ReactNode, useState, useEffect, useRef } from "react";
import type {Card} from '../types.d.ts'
interface PositionCard{
    x: number,
    y: number
}
interface ContextTypes{
    cardRef: {current: Card | null},
    positionCard: PositionCard,
    setPosition: (position: PositionCard)=>void,
    positionCardRef: {current: PositionCard},
    isDragging: boolean,
    setDragging: (isDragging: boolean) => void
}
export const CardContext = createContext<ContextTypes|undefined>(undefined)

export const CardProvider = ({children}:{children:ReactNode})=>{
    const cardRef = useRef<Card|null>(null)

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
        if(!isDragging&&e.target.classList.contains('card-item')){
            
            positionRef.current = {
                x: offsetX,
                y: offsetY
            }
        }
       
        const newPosition = {x:0, y:0}
        newPosition.x = clientX-positionRef.current.x
        newPosition.y = clientY-positionRef.current.y
        
        setPosition(newPosition)

       
       
    }
    
    
    const [isDragging, setDragging] = useState(false)
    useEffect(()=>{
        window.addEventListener('pointermove', handleMove)
        return ()=>{
            window.removeEventListener( 'pointermove',handleMove)
        }
    },[isDragging])
    return <CardContext.Provider value={
        {cardRef,
        isDragging,
        positionCard: position,
        setPosition,
        positionCardRef: positionRef,
        setDragging
    }
    }>
        {children}
    </CardContext.Provider>
}
