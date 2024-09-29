import { List } from "../types.ts";
import { LIST_ACTION_TYPES } from "../consts.ts";
type Action = {
    type: string,
    payload: List[]
} | {
    type: string,
    payload: number
}
export const listReducer = (state: List[], action: Action)=>{
    if(Array.isArray(action.payload)){
        if(action.type===LIST_ACTION_TYPES.CHANGE_LISTS){
            return action.payload
        }
        if(action.type === LIST_ACTION_TYPES.ADD_LIST){
            const newState =  [...state]
             newState.push(action.payload[0])

            return newState
        }
        
    }
    if(action.type === LIST_ACTION_TYPES.REMOVE_LIST){
        console.log(action.payload)
        const newState = state.filter((list)=>{
          
            return list.id!=action.payload
        })
        
        return newState
    }
    return state
    
    
}