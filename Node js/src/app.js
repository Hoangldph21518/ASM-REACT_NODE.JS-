import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import autheRouter from "./routes/auth"
import mongoose from "mongoose";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", autheRouter);

mongoose.connect("mongodb://127.0.0.1:27017/we17303")
export const viteNodeApp = app;