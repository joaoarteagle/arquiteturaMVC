import { Connection } from "mongoose";
import { LocaisSchema } from "./locais.schema";

export const locaisProviders=[
    {
        provide: 'CAT_MODEL',
        useFactory: (connection: Connection) => connection.model('Local', LocaisSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];