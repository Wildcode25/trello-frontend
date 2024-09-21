import { createContext, ReactNode, useState } from "react";
import type { Board } from "../types.d.ts";

interface BoardContextTypes{
    board: Board | null,
    setBoard: (board: Board|null)=>void

}

export const BoardContext = createContext<BoardContextTypes|undefined>(undefined)

export const BoardcontextProvider = ({children}:{children: ReactNode})=>{
    
    const [board, setBoard] = useState<Board|null>(null)
    return <BoardContext.Provider value={{
        board,
        setBoard
    }}>
        {children}
    </BoardContext.Provider>
}