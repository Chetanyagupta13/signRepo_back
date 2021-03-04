import { signUp } from '../api/vayuzRegister/vayuz.controller';
import express from 'express';


export const vayuzRoute = express.Router();


vayuzRoute.post('/register', signUp);