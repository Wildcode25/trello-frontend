import { createContext, ReactNode, useReducer, useEffect } from "react";
import type { Card } from "../types.d.ts";
import { CARD_ACTION_TYPES } from "../consts.ts";
import { cardReducer } from "../reducers/card";
import { useList } from "../hooks/useList.ts";
import { CardService } from "../services/CardService.ts";
import { useCard } from "../hooks/useCard.ts";
interface ContextTypes{
    addCard: (card: Card)=>void,
    deleteCard: (card: Card)=>void,
    cardsState: Card[],
    initCards: (cards: Card[])=>void,
    listId: number | undefined
}

export const CardsContext = createContext<ContextTypes | undefined>(undefined)

const useCardReducer = ()=>{
    const [cardsState, dispatch] = useReducer(cardReducer, [])
    const addCard = (card: Card)=>{
        dispatch({
            type: CARD_ACTION_TYPES.ADD_CARD,
            payload: card
        })
    }
    const initCards = (cards: Card[])=>{
        dispatch({
            type: CARD_ACTION_TYPES.CHANGE_CARD,
            payload: cards
        })
    }
    const deleteCard = (card:Card)=>dispatch({ 
            type: CARD_ACTION_TYPES.REMOVE_CARD,
            payload: card
        })
    
    return {initCards, addCard, cardsState, deleteCard}
}
export const CardsProvider= ({children, listId}:{children: ReactNode, listId:number|undefined})=>{
    const {cardsState, initCards, deleteCard, addCard} = useCardReducer()
    const {lists} = useList()
    const {card, setCard, setPosition} = useCard()
    useEffect(()=>{
        if(listId) CardService.getCards(listId).then(cards=>{
            initCards(cards)
        })
    }, [lists])
    useEffect(()=>{
        if(card) document.addEventListener('mouseup', handleDropCard)
    },[card])
    
   
    const handleDropCard=({target}:any)=>{
       
        console.log(card)
        if(card){
            if(target.classList.contains('listEnvelope')&&card.listId===listId){
                addCard(card)
            }else{
                if(target.classList.contains('listContainer')) {

                }
                deleteCard(card)
            } 
            setCard(null)
            setPosition({
                x: 0,
                y: 0
            })
            
            
        }
        document.removeEventListener('mouseup', handleDropCard)
        
    }
    
   
    return <CardsContext.Provider value={{
        cardsState,
        initCards,
        deleteCard,
        addCard,
        listId
    }}>
        {children}
    </CardsContext.Provider>
}