require('./config/db')
const express = require('express');
const app = express();
const cors = require('cors');
const port = 10000;
const userRouter = require('./routes/userRoutes');

app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send('Backend desarrollo');
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});