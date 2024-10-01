import {  ChangeEvent, useContext } from "react"
import { CardsContext } from "../context/cards.tsx"
import { useState, FormEvent
 } from "react"
 import { CardService } from "../services/CardService.ts"
export const useCards = ()=>{
    const cardsContext = useContext(CardsContext)
    if(!cardsContext) throw new Error('error context')
    const { addCard, cardsState, deleteCard, listId} = cardsContext
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
            console.log(createdCard)
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
       console.log(cardsState, cardid) 
       
    }

    return {
        handleDeleteCard,
        handleSubmitCardData,
        addCard,
        deleteCard,
        cardsState,
        handleChangeCardData,
        cardData
    }
}