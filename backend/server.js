const express = require('express');
const app = express();
const port = 10000;


app.listen(port, () => {
    console.log('Servidor escuchando en puerto:', port);
});