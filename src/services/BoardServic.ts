import axios, { AxiosResponse, isAxiosError } from "axios";
import type { Board } from "../types.ts";
import type { BoardResponse } from "../types.ts";
export class BoardService{
    static async getBoards({workspaceName}:{workspaceName: string}):Promise<Board[] | null>{
        try{
            const response:AxiosResponse<BoardResponse> = await axios.get(`/api/board/${workspaceName}`)
            return response.data.data
            
        }catch(e){
            if(isAxiosError(e)) console.error(e)
            return []
        }
    }
}