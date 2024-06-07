const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const db = require('../db'); // Assuming you have a db.js file to handle your MySQL connection


async function login(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    // Query for the user by email using MySQL2
    
      User.findUser(email, async (error, results) => {
        if (error) {
          console.error('Error al obtener usuario:', error);
          return res.status(500).json({ message: 'Error en el servidor' });
        }
        if (results.length === 0) {
          return res.status(401).json({ message: 'Credenciales inválidas' }); // User not found
        }
  
        const user = results[0]; // Get the first (and only) user from the results
  
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Credenciales inválidas' });
        }
  
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      ;
      })

  } catch (err) {
    console.error('Error en el login:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
}

module.exports = { login };
