import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema(
    {
        isYams: {
            type: Boolean,
            required: true
        },
        isCarre: {
            type: Boolean,
            required: true
        },
        isDouble: {
            type: Boolean,
            required: true
        },
        user: {
            _id: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        }
    },
);

export const GameModel = mongoose.model("Game", gameSchema, "games");