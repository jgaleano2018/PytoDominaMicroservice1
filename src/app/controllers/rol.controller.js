import mysql from 'mysql2'
import { createCustomError } from "../../errors/customErrors.js";
import { tryCatchWrapper } from "../../middlewares/tryCatchWrapper.js";

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bddomina',
});

export const getRol = (req, res, next) => {
    
    db.query('SELECT * FROM rol', function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

  };

