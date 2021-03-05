
import { Document } from 'mongoose';
import { DBmodel } from '../../db/dbmodel';
import { UserItem } from '../../item/userItem';
import {RegisterSchema} from '../../db/registerEmail';

export class VayuzControllerAction extends DBmodel<UserModel> {
    constructor() {
        super(RegisterSchema, 'user');
    }
    async createUser(email:string, password:string, name:string):Promise<any>{
        //console.log(this._dbmodel);
        return await this.getDBmodel.create({email, password, name})
            .then((result)=>{
                return true;
            })
            .catch((error)=>{
                // console.log(error);
            });
    }

    async userExistByEmail(email:string, password:string):Promise<boolean>{
        return await this.getDBmodel.findOne({email:email, password:password})
        .then((result)=>{
            console.log(result);
            if(result)
                return true;
            else
                return false;
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    async updateUserByEmail(email:string, imagePath:string, DOB:string):Promise<boolean>{
        return await this.getDBmodel.updateMany({email:email},{ imagePath:imagePath, DOB:DOB})
        .then((result)=>{
            console.log(result);
            if(result)
                return true;
            else
                return false;
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
}

interface UserModel extends UserItem,Document{
}