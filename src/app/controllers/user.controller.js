import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bddomina',
});

// Create and Save a new User
export const postUser = (req, res, next) => {

    const { name, address, phone, userName, password } = req.body;
    db.query('INSERT INTO user (name, address, phone, userName, password) VALUES (?, ?, ?, ?, ?)', [name, address, phone, userName, password], function(error, response, fields) {
        if (error) throw error;
        res.json({ message: 'User added successfully', id: response.insertId });
    })

};

// Retrieve all Users from the database.
export const getUser = (req, res, next) => {
    
    db.query('SELECT * FROM user', function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Find a single User with an id
export const getUserById = (req, res, next) => {

    const { id } = req.params;

    db.query('SELECT * FROM user WHERE id = ?', [id], function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Update a User by the id in the request
export const putUser = (req, res, next) => {

    const { id } = req.params;
    const { name, address, phone, userName, password } = req.body;

    db.query('UPDATE user SET name = ?, address = ?, phone = ?, userName = ?, password = ? WHERE id = ?', [name, address, phone, userName, password, id], (err) => {
      if (err) throw err;
      res.json({ message: 'User updated successfully' });
    });

};

// Delete a User with the specified id in the request
export const deleteUser = (req, res, next) => {

    const { id } = req.params;

    db.query('DELETE FROM user WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'User deleted successfully' });
    });
    
};