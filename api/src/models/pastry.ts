import mongoose, { Schema } from "mongoose";

const pastrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    quantityWon: {
      type: Number,
      required: true,
    }
  },
);

export const PastryModel = mongoose.model("Pastry", pastrySchema, "pastries");