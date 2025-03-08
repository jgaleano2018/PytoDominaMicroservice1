import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bddomina',
});


// Create and Save a new User
export const postUserRol = (req, res, next) => {
    const { id_user, id_rol } = req.body;
    db.query('INSERT INTO userRol (id_user, id_rol) VALUES (?, ?)', [id_user, id_rol], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User by Rol added successfully', id_user: result.insertId });
    });
};

// Retrieve all Users by Roles from the database.
export const getUserRol = (req, res, next) => {
    db.query('SELECT * FROM userRol', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Find a single Users by Roles with an id
export const getUserRolById = (req, res, next) => {
    const { id_user, id_rol } = req.params;
    db.query('SELECT * FROM userRol WHERE id_user = ? And id_rol = ?', [id_user, id_rol], (err, results) => {
      if (err) throw err;
      res.json(results[0]);
    });
};