import { VayuzControllerAction } from './vayuz.action';
import {Response,Request,NextFunction} from 'express';


let vayuzControllerAction = new VayuzControllerAction();
export const signUp = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body)
    vayuzControllerAction.createUser(req.body.email, req.body.password, req.body.name).then((result)=>{
        if(result == true)
        return res.status(200).send({ success: true, message: 'Created' });
    });
}

export const logIn = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body)
    vayuzControllerAction.userExistByEmail(req.body.email, req.body.password).then((result)=>{
        if(result == true)
        return res.status(200).send({ success: true, message: 'Found' , email:req.body.email});
    });
}

export const update = (req:Request, res:Response, next:NextFunction)=>{
    console.log(req.body)
    vayuzControllerAction.updateUserByEmail(req.body.email, req.body.imagePath, req.body.DOB).then((result)=>{
        if(result == true)
        return res.status(200).send({ success: true, message: 'Updated' });
    });
}

