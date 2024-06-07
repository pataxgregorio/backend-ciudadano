const User = require('../models/user');

function getAllUsers(req, res) {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).json({ message: 'Error obteniendo usuarios' });
    } else {
      res.json(users);
    }
  });
}

module.exports = { getAllUsers }; 
