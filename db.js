// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}); 

db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a la base de datos establecida.');
  db.query('USE alcadia', (err) => { 
    if (err) throw err;    
  });
});

module.exports = db;
