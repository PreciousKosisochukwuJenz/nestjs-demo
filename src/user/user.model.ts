import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  id: string;
  name: string;
  username: string;
  password: string;
  sayHi(): void;
}

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

UserSchema.methods.sayHi = function () {
  console.log(`Hello ${this.name}`);
};

UserSchema.statics.findByName = function (name: string) {
  return this.find({ name: new RegExp(name, 'i') });
};

UserSchema.virtual('namedUsername').get(function () {
  return `${this.name} (${this.username})`;
});
