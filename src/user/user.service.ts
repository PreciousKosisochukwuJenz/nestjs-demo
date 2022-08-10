import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel) {}

  addUser = async ({ name, username, password }) => {
    const newUser = new this.UserModel({ name, username, password });
    await newUser.save();
  };

  getAllUsers = async (): Promise<IUser[]> => {
    return await this.UserModel.find();
  };

  getUser = async (id: string): Promise<IUser> => {
    const user = await this.UserModel.findById(id);
    console.log(user.namedUsername);
    return user;
  };
  getUserByName = async (name: string): Promise<IUser> => {
    const user = await this.UserModel.findByName(name);
    return user;
  };
}
