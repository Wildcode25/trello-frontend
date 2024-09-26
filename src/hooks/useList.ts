import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { ListContext } from "../context/List.tsx";
import { useBoard } from "./useBoard.ts";
import { List } from "../types";
import { ListService } from "../services/ListService.ts";
export function useList(){
    const context = useContext(ListContext)
    if(!context) throw new Error('Context Error')
    const {addList, lists, changeLists} = context
    const {board} = useBoard() 
    const [listData, setListData] = useState<List>({name:'', boardId: 0})
    useEffect(()=>{
        
        if(board){
            console.log(board)
            setListData({...listData, boardId: board.id})
            changeLists(board.lists)
        }
    }, [board])
   
    const handleChangeListData =(e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        const newData = {...listData, [name]: value}
        setListData(newData)
    }
    const handleSubmitListData = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setListData({
            ...listData,
            name: ''
        })
        if(listData.name==="") return 
        const createdList = await ListService.createList(listData)
        addList(createdList)
    }
    

    return { listData, addList, lists, changeLists, handleChangeListData, handleSubmitListData}    
}