import { vayuzRoute } from './routes/vayuz.route';
import express from 'express';
import * as bodyParse from 'body-parser';
import cors from 'cors';
import mongoose = require("mongoose");

export const app = express();

let port = process.env.PORT? process.env.PORT:5000;
app.listen(port,()=>{
    console.log('server started');
});

mongoose.connect('mongodb+srv://chetanya:Chetanya.321@cluster0.ueeyh.mongodb.net/Vayuz?retryWrites=true&w=majority')
    .then((result)=>{
        app.listen(3000,()=>{
            console.log('server started');
        });
        console.log('connected to database');
    })
    .catch((err)=>{
        console.log(err);
    });




app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})

app.use('/api/auth', vayuzRoute)








