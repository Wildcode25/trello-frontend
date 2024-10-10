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
    listId: number | undefined,
    changeCardOrder: (card:Card)=>void
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
    const changeCardOrder = (card: Card)=>dispatch({
        type: CARD_ACTION_TYPES.CHANGE_CARD_ORDER,
        payload: card
    })
    return {initCards, addCard, cardsState, deleteCard, changeCardOrder}
}
export const CardsProvider= ({children, listId}:{children: ReactNode, listId:number|undefined})=>{
    const {cardsState, initCards, deleteCard, addCard, changeCardOrder} = useCardReducer()
    const {lists} = useList()
    const {isDragging, cardRef} = useCard()
    useEffect(()=>{
        if(listId) CardService.getCards(listId).then(cards=>{
            initCards(cards)
        })
    }, [lists])
    useEffect(()=>{
        if(!isDragging) if(cardRef.current){
            if(cardRef.current.listId !== listId) deleteCard(cardRef.current)
        }
    }, [isDragging])
    return <CardsContext.Provider value={{
        cardsState,
        initCards,
        deleteCard,
        addCard,
        listId,
        changeCardOrder
    }}>
        {children}
    </CardsContext.Provider>
}