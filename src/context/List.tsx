import { createContext, ReactNode, useReducer, useEffect } from "react";
import { listReducer } from "../reducers/list.ts";
import type { List } from "../types.ts";
import { LIST_ACTION_TYPES } from "../consts.ts";
import { useBoard } from "../hooks/useBoard.ts";
interface ListContextTypes{
    addList: (list: List)=>void,
    changeLists: (lists: List[])=>void
    lists: List[]
}
export const ListContext = createContext<ListContextTypes| undefined>(undefined)

export const useListReducer = ()=>{
    const {board} = useBoard() 
    const [lists, dispatch] = useReducer(listReducer, [])
    useEffect(()=>{
        
        if(board){
            console.log(board)
            changeLists(board.lists)
        }
    }, [board])
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