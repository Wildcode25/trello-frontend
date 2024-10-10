import axios, { AxiosResponse } from "axios";
import { Card, CardResponse } from "../types";

export class CardService{
    static async getCards(listId: number):Promise<Card[]>{
        const response: AxiosResponse<{data: Card[], message: string, error: boolean}>= await axios.get(`/api/card/${listId}`)
        return response.data.data
    }   
    static async createCard(card:Card):Promise<Card>{
        const response:AxiosResponse<CardResponse> = await axios.post('/api/card', card)
        return response.data.data
    }
    static async deleteCard(cardId: number):Promise<Card>{
        const response:AxiosResponse<CardResponse> = await axios.delete(`/api/card/${cardId}`)
        return response.data.data
    }
    static async updateCard(card: Card){
        await axios.put(`/api/card/${card.id}`, card)
    }
}