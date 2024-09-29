import { useContext, useEffect, useReducer } from "react"
import { CardContext } from "../context/card"
import { Card } from "../types"
import { cardReducer } from "../reducers/card"
import { CARD_ACTION_TYPES } from "../consts"

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
    return {initCards, addCard, cardsState}
}
export const useCard = (cards: Card[])=>{
    const context = useContext(CardContext)
    
    if(!context) throw new Error('Error context')
    const {card, setCard} = context;
    const {initCards, addCard, cardsState} = useCardReducer()
    useEffect(()=>{
        if(cards) initCards(cards)
    }, [cards])

    return {card, setCard, addCard, cardsState} 
}