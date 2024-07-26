// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}); 

// Obtener una conexión del pool antes de cada consulta
function getConnection(callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      // Intento de reconexión en caso de error
      console.error('Error al obtener la conexión:', err);
      setTimeout(() => getConnection(callback), 5000); // Reintentar después de 5 segundos
    } else {
      callback(null, connection);
    }
  });
}

module.exports = {
  query: (sql, params, callback) => {
    getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }
      connection.query(sql, params, (error, results) => {
        connection.release(); // Liberar la conexión después de cada consulta
        callback(error, results);
      });
    });
  }
};

