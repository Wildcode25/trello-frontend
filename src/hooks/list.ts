import { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { ListContext } from "../context/List";
import { useBoard } from "./useBoard";
import { List } from "../types.ts";
export function useList(){
    const context = useContext(ListContext)
    if(!context) throw new Error('Context Error')
    const {board} = useBoard() 
    const [listData, setListData] = useState<List>({name:'', boardId: 0})
    const initLists = useCallback(()=>{
        
        if(board){
            console.log(board)
            setListData({...listData, boardId: board.id})
            changeLists(board.lists)
        }
    }, [board])
    useEffect(()=>{
       if(board) changeLists(board.lists)
    }, [board])
    const handleChangeListData =(e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        const newData = {...listData, [name]: value}
        setListData(newData)
    }
    const handleSubmitListData = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setListData({
            ...listData,
            name: ''
        })
        if(listData.name!=="") addList(listData)
    }
    const {addList, lists, changeLists} = context
    

    return {initLists, listData, addList, lists, changeLists, handleChangeListData, handleSubmitListData}    
}