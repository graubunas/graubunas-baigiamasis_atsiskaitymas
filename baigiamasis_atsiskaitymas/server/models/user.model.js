import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  age: Number,
});

const User = model('user', userSchema);

export default User;
