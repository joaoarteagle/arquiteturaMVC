import { Document } from "mongoose";
export interface Local extends Document{
    readonly id: string;
    readonly nome: string;
    readonly imagem: string;
    
}