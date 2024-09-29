import type { Card } from "../types"
import { CARD_ACTION_TYPES } from "../consts.ts"
interface Action {
    payload: Card|Card[],
    type: string
}

export const cardReducer = (state: Card[], action:Action):Card[]=>{
    if(Array.isArray(action.payload)){
            
        return action.payload
    }
    
    if(action.type === CARD_ACTION_TYPES.ADD_CARD ){
        const newState = [...state]
        newState.push(action.payload)

        return newState
    }
    if(action.type === CARD_ACTION_TYPES.REMOVE_CARD){
        const deletedCard = action.payload
        const newState = state.filter((card)=>{
            return card.id !== deletedCard.id
        })
        return newState
    }
    return state
}