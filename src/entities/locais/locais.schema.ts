import * as mongoose from 'mongoose';


export const LocaisSchema = new mongoose.Schema({
    id: String,
    nome: String,
    local: String,
    imagens: [String],
});
