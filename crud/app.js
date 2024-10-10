import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import router from "./router/employee.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api',router)
mongoose
  .connect(
    process.env.MONGO_URL.replace("<db_password>", process.env.MONGO_PASSWORD)
  )
  .then(() => console.log("DB is connected successfully!!"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log(`app is running on 4000`));
