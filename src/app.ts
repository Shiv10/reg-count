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
    res.json({success: true, count: users.length});
    res.end();
})

app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT}`);
})

