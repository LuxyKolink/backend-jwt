import mongoose from "mongoose";

const UserModel = mongoose.model('user', new mongoose.Schema({
    username: String,
    email: String,
    password: String
}));

export default UserModel;