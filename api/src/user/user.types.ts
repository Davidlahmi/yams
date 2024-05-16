import mongoose from "mongoose";

export type UserCreate = {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    username: string;
    turn: number;
    price: number
};

export type UserRead = {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    price: number;
}

export type DecodedUser = {
    userId: mongoose.Types.ObjectId;
}