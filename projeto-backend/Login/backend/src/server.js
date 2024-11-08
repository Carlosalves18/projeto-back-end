import express from "express"
import cors from "cors"
import conn from "./config/conn.js";
import UserRouter from "./router/userRouter.js";
import authRouter from "./router/authRouter.js"
import dotenv from "dotenv"

const port = 7777;
const app = express()

dotenv.config(); //guarda nossas variaveis do ambiente

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", UserRouter)

app.use("/auth", authRouter)

conn
    .sync()
    .then(() => {
    app.listen(port, () =>{
        console.log(`Disponivel em http://localhost:${port}`)
        })
    })
    .catch((error) => console.log(error))