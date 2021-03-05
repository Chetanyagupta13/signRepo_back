import { signUp, logIn, update } from '../api/vayuzRegister/vayuz.controller';
import express from 'express';


export const vayuzRoute = express.Router();


vayuzRoute.post('/register', signUp);
vayuzRoute.post('/login', logIn);
vayuzRoute.post('/update', update);