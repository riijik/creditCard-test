import mongoose from "mongoose";

const CardForm = new mongoose.Schema({
  cardNumber: { type: Number, required: true },
  expDate: { type: String, required: true },
  cvv: { type: Number, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model("CardForm", CardForm);
