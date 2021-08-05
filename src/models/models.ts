import mongoose, { Model } from 'mongoose';

import userSchema, { UserInterface } from './user';
import accountsDB from './db';

export const User: any = accountsDB.model('User', userSchema);