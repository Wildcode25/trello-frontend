import { useCallback, useContext, useState } from "react";
import { BoardContext } from "../context/board";
import { useUser } from "./useUser";
import type { Board } from "../types";
import { BoardService } from "../services/BoardServic";
export function useBoard(){
    const {user} = useUser()
    const [boards, setBoards] = useState<Board[]|null>(null)
    const context = useContext(BoardContext)
    if(!context) throw new Error('Context Error')
    const {board, setBoard} = context
    
    const updateBoards = useCallback(()=>{
        if(user)
            return BoardService.getBoards({workspaceName: user?.workspaces[0]?.name}).then(data=>{
                setBoards(data)
                
                return data
            }) 
    }, [])
   if(!boards){
    console.log('a')
    
    updateBoards()
   }
    
    const handleChangeBoard = async (boardId:number)=>{
        if(boardId === board?.id) return
        const newBoard = boards?.find((board)=>board.id===boardId)
        if(newBoard) setBoard(newBoard)
        updateBoards()
    }

    return {handleChangeBoard, boards, board}


    
}