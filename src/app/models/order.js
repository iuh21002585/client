import mongoose from "mongoose";
const Schema = mongoose.Schema;

const order = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        note: { type: String, required: false },
        cart: { type: Array, required: true },
    },
    {
        timestamps: true,
    }
);

const Models = mongoose.model("orders", order);

export default Models;
