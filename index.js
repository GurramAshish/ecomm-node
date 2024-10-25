import express from "express";
import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


app.use("/users", userRouter);


mongoose
  .connect("mongodb://127.0.0.1:27017/ecommdb")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
