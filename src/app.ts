require('dotenv').config()
import { Request, Response} from 'express';
import express from 'express';
const app = express();
import { User } from './models/models';

app.get('/', async (req: Request, res: Response)=> {
    const token: any = req.query.token;
    if(!(token===process.env.REG_SECRET)){
        return res.json({success: false});
    }
    const users = await User.find({});
    const arr: Array<Object> = []
    if (users.length>0){
        users.forEach((document: any) => {
            const obj: Object = {
                "name": document.name,
                "email": document.email
            } 
            arr.push(obj)
        });
    }
    res.json({success: true, count: users.length, list: arr});
    res.end();
})

app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT}`);
})

