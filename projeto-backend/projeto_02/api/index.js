import express from "express";
import cors from "cors";
import useRoutes from "./routers/produtos.js"

const app = express();
const port = 7777;

app.use(cors());
app.use(express.json())

app.use("/", useRoutes)

app.listen(port, () => {
    console.log(`Disponível em http://localhost:${port}`)
})
