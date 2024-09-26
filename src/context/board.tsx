import { createContext, ReactNode, useEffect, useState } from "react";
import type { Board } from "../types.d.ts";
import { useUser } from "../hooks/useUser.ts";
import { BoardService } from "../services/BoardService.ts";
interface BoardContextTypes{
    board: Board | null,
    setBoard: (board: Board|null)=>void,
    boards: Board[]|any[],
    setBoards: (board: Board[]|any[])=>void,


}

export const BoardContext = createContext<BoardContextTypes|undefined>(undefined)

export const BoardcontextProvider = ({children}:{children: ReactNode})=>{
    const {user} = useUser()
    const [boards, setBoards] = useState<Board[]|any[]>([])
    const [board, setBoard] = useState<Board|null>(null)
    useEffect(()=>{
        if(user)
             BoardService.getBoards({workspaceName: user?.workspaces[0]?.name}).then(data=>{
                if(data)setBoard(data[0])
                console.log(data)
            }) 
    }, [])
    
    useEffect(()=>{
        if(user)
             BoardService.getBoards({workspaceName: user?.workspaces[0]?.name}).then(data=>{
                if(data) setBoards(data)
            }) 
    }, [board])
    return <BoardContext.Provider value={{
        board,
        setBoard,
        boards,
        setBoards
    }}>
        {children}
    </BoardContext.Provider>
}