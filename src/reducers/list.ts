import { List } from "../types.ts";
import { LIST_ACTION_TYPES } from "../consts.ts";
interface Action{
    type: string,
    payload: number | List[]
}
export const listReducer = (state: List[], action: Action)=>{
    if(Array.isArray(action.payload)){
        if(action.type===LIST_ACTION_TYPES.CHANGE_LISTS){
            console.log("aqui")
            return action.payload
        }
        if(action.type === LIST_ACTION_TYPES.ADD_LIST){
            const newState =  [...state]
             newState.push(action.payload[0])

            return newState
        }
       
    }
    return state
    
    
}