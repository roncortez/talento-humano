const socioModel = require('../models/userModel');

const getUsers = async (req, res) => {
    const result = await socioModel.getUsers();
    return res.json(result);
}

module.exports = {
    getUsers
}