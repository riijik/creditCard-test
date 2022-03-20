import mongoose from "mongoose";
import express from "express";
import { routerCardForm } from "./routes/cardRouter.js";

const URL_FOR_MONGO = "mongodb://127.0.0.1:27017/cardForm";
const app = express();
app.use(express.json());

app.use("/", routerCardForm);

async function startApp() {
  try {
    await mongoose.connect(URL_FOR_MONGO);
    app.listen(8000, () => console.log(`Welcome to the port 8000 `));
    console.log(`MongoDB Connected: ${URL_FOR_MONGO}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startApp();
