import mongoose from "mongoose";

export type GameType = {
    _id: mongoose.Types.ObjectId;
    isYams: boolean;
    isCarre: boolean;
    isDouble: boolean;
    user: mongoose.Types.ObjectId;
}
