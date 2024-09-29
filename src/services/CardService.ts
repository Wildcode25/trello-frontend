import axios, { AxiosResponse } from "axios";
import { Card, CardResponse } from "../types";

export class CardService{
    static async createCard(card:Card):Promise<Card>{
        const response:AxiosResponse<CardResponse> = await axios.post('/api/card', card)
        return response.data.data
    }
    static async deleteCard(){

    }
}