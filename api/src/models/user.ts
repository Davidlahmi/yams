import mongoose, { InferSchemaType, Schema, Types } from "mongoose";

const userPriceSchema = new Schema(
  {
    pasty: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    name: {
      type: String,
      required: true,
    },
    numberOfPastries: {
      type: Number,
      required: true,
    },
  }
)

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    turn: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    userPrice: {
      type: [userPriceSchema],
    }
  },
  { timestamps: true, }
);

export type UserType = InferSchemaType<typeof userSchema> & {
  _id: Types.ObjectId;
};
export type UserDocument = UserType & mongoose.Document;

export const UserModel = mongoose.model("User", userSchema, "users");

