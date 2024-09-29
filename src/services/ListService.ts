import axios, { AxiosResponse } from "axios";
import type { List, ListResponse } from "../types.ts";
export class ListService{
    static async createList(list: List):Promise<List>{
        const response:AxiosResponse<ListResponse> = await axios.post('/api/list', list)
        return response.data.data
    }
    static async deleteList(id: number){
        await axios.delete(`/api/list/${id}`)
    }
}