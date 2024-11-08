import { c } from "../cproduto.js"
import { z } from "zod"


const ProdutoSchema = z.object({
    nome: z.string().min(255, {message: "O nome é obrigatorio"}),
    preco: z.string().trim(1, {message: "O preço é obrigatorio"}),
    descricao: z.string().min(255, {message: "A descrição é obrigatorio"}),
    estoque: z.string().trim(1, {message: "O estoque obrigatorio"}),
    total: z.string().trim(1, {message: "O total é obrigatorio"}),
})

export const getProduto = (request, response) =>{

    const query = "SELECT * FROM produtos"

    c.query(query, (error, data) => {
        if(error){
            return response.json(error)
        }
        return response.status(200).json(data)
    })
}
export const postProduto = (request, response) =>{
    const validation = ProdutoSchema.safeParse(request.body)

    if(!validation.success == false){
        return response.status(400).json("Foi barrado na minha validação!")
    }

    const query = "INSERT INTO produtos(`nome`, `preco`, `descricao`, `estoque`, `total`) VALUES (?)"

    const values = [
        validation.data.nome,
        validation.data.preco,
        validation.data.descricao,
        validation.data.estoque,
        validation.data.total
    ]

    c.query(query, [values], (error) => {
        if(error){
            return response.json(error)
        }

        return response.status(200).json("Produto cadastrado com sucesso!")
    })
}
export const putProduto = (request, response) =>{
    const validation = ProdutoSchema.safeParse(request.body)

    if(!validation.success){
        return response.status(400).json(validation.error.issues)
    }


    const query = "UPDATE produtos SET `nome` = ?, `preco` = ?, `descricao` = ?, `estoque` = ?, `total` = ? WHERE `id` = ?";

    const values = [
        validation.data.nome,
        validation.data.preco,
        validation.data.descricao,
        validation.data.estoque,
        validation.data.total
    ]

    c.query(query, [...values, request.params.id], (error) => {
        if(error) {
            return response.json(error)
        }

        response.status(200).json("produto atualizado  com sucesso!")
    })

}
export const deleteProduto = (request, response) => {

    const query = "DELETE from produtos WHERE `id`= ?";

    c.query(query, [request.params.id], (error) => {
        if(error){
            return response.status(500).json(error)
        }

        return response.status(200).json("Registro deletado com sucesso!")
    })

}