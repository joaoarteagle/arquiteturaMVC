import { Connection } from "mongoose";
import { LocaisSchema } from "./locais.schema";

export const locaisProviders=[
    {
        provide: 'LOCAIS_MODEL',
        useFactory: (connection: Connection) => connection.model('Locais', LocaisSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];