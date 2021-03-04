import { Schema } from 'mongoose';

export const RegisterSchema = new Schema({
    email: Schema.Types.String,
    name: Schema.Types.String,
    password: Schema.Types.String,
    createdAt: Schema.Types.String
})  