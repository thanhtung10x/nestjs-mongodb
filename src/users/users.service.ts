import { Injectable } from '@nestjs/common';
import User from './Schema/User.schema';

@Injectable()
export class UsersService {
  User: any = User;
  async create(user): Promise<any> {
    console.log(user);
    const newUser = new this.User(user);
    return await newUser.save();
  }
}
