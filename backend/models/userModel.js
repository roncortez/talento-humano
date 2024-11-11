const  { poolPromise }  = require('../config/db');

const getUsers = async () => {
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM socios');
    
    return result.recordset;
    
}

module.exports = {
    getUsers
}