const db = require('../db');

class User {
  static getAll(callback) {
    db.query('SELECT * FROM users', callback); 
  }

  static getByEmail(email, callback) {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
  }
}

module.exports = User;
