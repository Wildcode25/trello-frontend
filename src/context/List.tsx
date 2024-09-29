import { createContext, ReactNode, useReducer, useEffect } from "react";
import { listReducer } from "../reducers/list.ts";
import type { List } from "../types.ts";
import { LIST_ACTION_TYPES } from "../consts.ts";
import { useBoard } from "../hooks/useBoard.ts";
interface ListContextTypes{
    addList: (list: List)=>void,
    changeLists: (lists: List[])=>void,
    deleteList: (id: number)=>void
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
    const deleteList=(id:number)=>dispatch({
        type: LIST_ACTION_TYPES.REMOVE_LIST,
        payload: id
    })
    return {lists, addList, changeLists, deleteList}
}
export const ListContextProvider = ({children}:{children:ReactNode})=>{
    const {lists, addList, changeLists, deleteList} = useListReducer()
    const {board} = useBoard() 

    useEffect(()=>{
        
        if(board){
            console.log(board)
            changeLists(board.lists)
        }
    }, [board])
    return <ListContext.Provider value={{
        lists,
        addList,
        changeLists,
        deleteList
    }}>
        {children}
    </ListContext.Provider>
}