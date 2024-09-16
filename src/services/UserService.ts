import axios, {AxiosResponse} from "axios";
import type { Response } from "../types.ts";
import { baseUrl } from "../consts.ts";
import type { FormData } from "../types.ts";
export class UserService{
    static async loginUser(formData: FormData):Promise<Response>{
        try{
            const response:AxiosResponse<Response> = await axios.post(`${baseUrl}/login`, formData)
            return response.data
        }catch(e){
            if(axios.isAxiosError(e)){

                console.error(`Error fetching data: ${e.message}`)
                if(e.response) return e.response.data
            }
            return {
                data: null,
                message: 'Error unkhow',
                error: true
            }
            
        }

    }
    static async registerUser(formData: FormData):Promise<Response>{
        try{
            const response:AxiosResponse<Response> = await axios.post(`${baseUrl}/register`, formData)
            return response.data
        }catch(e){
            if(axios.isAxiosError(e)){

                console.error(`Error fetching data: ${e.message}`)
                if(e.response) return e.response.data
            }
            return {
                data: null,
                message: 'Error unkhow',
                error: true
            }
            
        }

    }
}