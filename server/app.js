const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const { PORT } = process.env || 4000;

serverConfig(app);

const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);

app.listen(PORT, () => { console.log(`Наш прекрасный сервер трудиться на  ${PORT} порту`); });
