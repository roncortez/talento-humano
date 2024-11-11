require('dotenv').config()
const sql = require('mssql');

const config = {
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true        
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos');
        return pool;
    })
    .catch(err => {
        console.error('Error de conexión a SQL Server:', err);
        process.exit(1);
    });

module.exports = {
    poolPromise
}