import { useContext, useEffect, useReducer, useState, ChangeEvent, FormEvent } from "react"
import { CardContext } from "../context/card"
import { Card, List } from "../types.ts"
import { cardReducer } from "../reducers/card"
import { CARD_ACTION_TYPES } from "../consts"
import { CardService } from "../services/CardService.ts"

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
export const useCard = (list: List)=>{
    const {cards, id} = list
    const context = useContext(CardContext)
    
    if(!context) throw new Error('Error context')
    const {card, setCard} = context;
    const {initCards, addCard, cardsState} = useCardReducer()
    const [cardData, setCardData] = useState({
        name: '',
        listId: id
    })
    useEffect(()=>{
        if(cards) initCards(cards)
    }, [cards])
    const handleChangeCardData = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        const newData = {...cardData, [name]: value}
        setCardData(newData)
    }
    const handleSubmitCardData = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setCardData({
            ...cardData,
            name: ''
        })
        if(cardData.name==="") return 
            const createdCard = await CardService.createCard(cardData)
            console.log(createdCard)
            addCard(createdCard)
    }
    
    return {cardData, card, setCard, addCard, cardsState, handleChangeCardData, handleSubmitCardData} 
}