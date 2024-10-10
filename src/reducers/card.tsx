import type { Card } from "../types.ts"
import { CARD_ACTION_TYPES } from "../consts.ts"
interface Action {
    payload: Card | Card[],
    type: string
}

export const cardReducer = (state: Card[], action: Action): Card[] => {
    if (Array.isArray(action.payload)) {

        return action.payload
    }
    if (action.type === CARD_ACTION_TYPES.ADD_CARD) {
        const card = action.payload
        const newState = [...state.filter((cardItem)=>{
            return cardItem.id !== card.id
        })]
        newState.push(action.payload)

        return newState
    }
    if (action.type === CARD_ACTION_TYPES.REMOVE_CARD) {

        const card = action.payload
        const newState = state.filter((cardItem) => {
            return cardItem.id !== card.id
        })
        return newState
    }
    if(action.type === CARD_ACTION_TYPES.CHANGE_CARD_ORDER){
        const card = action.payload
        const index = state.findIndex((cardItem)=>card.order===cardItem.order)
        const filtedState = state.filter((cardItem)=>card.id!==cardItem.id)
        if(index===-1) return state
        // filtedState.push(card)
        // const newState = filtedState.sort((a, b)=>{
        //     if(a.order && b.order) return a.order-b.order
        //     return 1
        // })
        const part = filtedState.slice(0, index)
            part.push(card)
        const newState = part.concat(filtedState.slice(index))
        
        console.log(card.order)
        
        return newState
    }
    
    return state
}