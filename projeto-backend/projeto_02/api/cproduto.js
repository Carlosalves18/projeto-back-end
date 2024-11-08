import mysql from 'mysql2';

export const c = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Sen@iDev77!.",
    database:"cproduto"
})