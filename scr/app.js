import express from "express"
import database from "./config/database.js"
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"
import dotenv from "dotenv-safe"
import cors from "cors"




dotenv.config()






database.on("open",()=>console.log("conexão realizada com sucesso"))
database.on("error",()=>console.log("ops houve um erro!"))


const app = express();
app.use(express.json())
app.use(cors());
app.use("/auth", authRouter)
app.use("/user", userRouter)

export default app;
