import {  ChangeEvent, useContext } from "react"
import { CardsContext } from "../context/cards.tsx"
import { useState, FormEvent
 } from "react"
 import { CardService } from "../services/CardService.ts"
 import { useCard } from "./useCard.ts"
export const useCards = ()=>{
    const cardsContext = useContext(CardsContext)
    if(!cardsContext) throw new Error('error context')
    const { addCard, cardsState, deleteCard, listId, changeCardOrder} = cardsContext
    const {isDragging, setPosition, setDragging, cardRef } = useCard()
    const [cardData, setCardData] = useState({
        name: '',
        listId
    })
    const handleSubmitCardData = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setCardData({
            ...cardData,
            name: ''
        })
        if(cardData.name==="") return 
            const createdCard = await CardService.createCard(cardData)
            addCard(createdCard)
    }
    const handleChangeCardData = (e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        const newData = {...cardData, [name]: value}
        setCardData(newData)
    }
    const handleDeleteCard = async (e:any)=>{
       const {cardid} = e.target.dataset
       const deletedCard = await CardService.deleteCard(cardid)
       deleteCard(deletedCard)
       
    }
    const handleDropCard=({target}:any)=>{
       
        if(isDragging){
            if(target.classList.contains('listEnvelope')){
                if(cardRef.current)addCard(cardRef.current)
                console.log('only add')
            }else if(target.classList.contains('card-item')) {
                if(cardRef.current) changeCardOrder(cardRef.current)
                console.log('change oreder')
           }else{

                console.log("no cumplio")
           }
            
            
        }
        setDragging(false)
            setPosition({
                x: 0,
                y: 0
            })
        
    }
    const handleChangeListId = ()=>{
        if(cardRef.current && isDragging){
            cardRef.current= {...cardRef.current, listId}
            CardService.updateCard(cardRef.current)
        }
    }
    return {
        handleChangeListId,
        handleDeleteCard,
        handleSubmitCardData,
        addCard,
        deleteCard,
        cardsState,
        handleChangeCardData,
        cardData,
        listId,
        changeCardOrder,
        handleDropCard
    }
}