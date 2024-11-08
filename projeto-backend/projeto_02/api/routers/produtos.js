import express from "express"
import { getProduto, postProduto, putProduto, deleteProduto } from '../controllers/produto.js';


const router = express.Router();

router.get("/", getProduto);

router.post("/", postProduto);

router.put("/:id", putProduto);

router.delete("/:id", deleteProduto);

export default router