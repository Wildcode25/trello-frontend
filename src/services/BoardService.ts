import axios, { AxiosResponse, isAxiosError } from "axios";
import type { Board, BoardData } from "../types";
import type { BoardResponse, BoardsResponse } from "../types";
export class BoardService{
    static async getBoards({workspaceName}:{workspaceName: string}):Promise<Board[] | null>{
        try{
            const response:AxiosResponse<BoardsResponse> = await axios.get(`/api/board/${workspaceName}`)
            return response.data.data
            
        }catch(e){
            if(isAxiosError(e)) console.error(e)
            return []
        }
    }
    static async createBoard({name, color, workspaceName}:BoardData):Promise<Board | null>{
        try{
            const response:AxiosResponse<BoardResponse> = await axios.post(`/api/board`,{name, color, workspaceName})
            return response.data.data
            
        }catch(e){
            if(isAxiosError(e)) console.error(e)
           return null
        }
    }
}