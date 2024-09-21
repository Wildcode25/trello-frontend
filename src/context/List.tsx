import { createContext, ReactNode, useReducer } from "react";
import { listReducer } from "../reducers/list.ts";
import type { List } from "../types.ts";
import { LIST_ACTION_TYPES } from "../consts.ts";

interface ListContextTypes{
    addList: (list: List)=>void,
    changeLists: (lists: List[])=>void
    lists: List[]
}
export const ListContext = createContext<ListContextTypes| undefined>(undefined)

export const useListReducer = ()=>{
    
    const [lists, dispatch] = useReducer(listReducer, [])

    const addList = (list: List)=>dispatch({
        type: LIST_ACTION_TYPES.ADD_LIST,
        payload: [list]
    })
    const changeLists = (lists: List[])=>{
        dispatch({
            type: LIST_ACTION_TYPES.CHANGE_LISTS,
            payload: lists
        })
    }
    return {lists, addList, changeLists}
}
export const ListContextProvider = ({children}:{children:ReactNode})=>{
    const {lists, addList, changeLists} = useListReducer()
    return <ListContext.Provider value={{
        lists,
        addList,
        changeLists
    }}>
        {children}
    </ListContext.Provider>
}