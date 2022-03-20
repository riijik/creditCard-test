import { Router } from "express";
import CardForm from "../models/creditCardForm.js";
import { dateFormatter } from "../funcHelpers/dateFormatter.js";

export const routerCardForm = Router();

routerCardForm.post("/cardForm", async (req, res) => {
  if (req.body) {
    req.body.expDate = dateFormatter(req.body.expDate);
    CardForm.create(req.body).then((data) =>
      res.json({ RequestId: data._id, Amount: data.amount })
    );
  } else {
    res.json({ error: "the input is empty" });
  }
});
