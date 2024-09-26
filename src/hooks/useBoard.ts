import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { BoardContext } from "../context/board";
import { useUser } from "./useUser";
import type { BoardData } from "../types";
import { BoardService } from "../services/BoardService";
export function useBoard(){
    const {user} = useUser()
    const [boardData, setBoardData] = useState<BoardData>({
        name: '',
        color: "rose",
        workspaceName: ''
    })
    const context = useContext(BoardContext)
    if(!context) throw new Error('Context Error')
    const {board, setBoard, boards} = context
    
    const handleSubmitBoard = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(boardData.name==='') return
        
        const data = {...boardData, workspaceName: user?.workspaces[0].name}
        const createdboard = await BoardService.createBoard(data)
        setBoard(createdboard)
        setBoardData({...boardData, name: ''})
    }
   const  handleChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    console.log(value)
        const newState = {...boardData, [name]: value}
        setBoardData(newState)
   }
    const handleChangeBoard = async (boardId:number)=>{
        if(boardId === board?.id) return
        const newBoard = boards?.find((board)=>board.id===boardId)
        if(newBoard) setBoard(newBoard)
    }

    return {handleChangeBoard, boards, board, handleChangeInput, handleSubmitBoard, boardData}


    
}