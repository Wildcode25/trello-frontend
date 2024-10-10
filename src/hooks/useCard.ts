import { useContext, useState } from "react"
import { CardContext } from "../context/card"


export const useCard = ()=>{
  

    const context = useContext(CardContext)
    if(!context) throw new Error('Error context')
    const {cardRef, positionCard, setPosition, positionCardRef, setDragging, isDragging} = context;
    
    const [space, setSpace] = useState(false)
    
    return {
        setSpace, 
        space, 
        positionCard, 
        setPosition, 
        cardRef,  
        positionCardRef,
        isDragging,
        setDragging
    } 
}