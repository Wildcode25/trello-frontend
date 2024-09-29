import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ListContext } from "../context/List.tsx";
import { useBoard } from "./useBoard.ts";
import { List } from "../types";
import { ListService } from "../services/ListService.ts";
import { hideForms } from "../utils/hideForms.ts";
export function useList(){
    const context = useContext(ListContext)
    if(!context) throw new Error('Context Error')
    const {addList, lists, changeLists, deleteList} = context
    const [listData, setListData] = useState<List>({name:'', boardId: 0})
   const {board} = useBoard()
   
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
        if(board){
            const createdList = await ListService.createList({...listData, boardId: board.id})
            addList(createdList)
        }
        hideForms()
    }
    const handleDeleteList = async (e: any)=>{
        const id = e.target.dataset.listid
        deleteList(id)
        hideForms()
        await ListService.deleteList(id)
        
    }

    return { listData, addList, lists, changeLists, handleChangeListData, handleSubmitListData, handleDeleteList}    
}