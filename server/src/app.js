require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const categoryRoot = require('./routes/categoryRoute');

const { sequelize } = require('../db/models');

const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT } = process.env || 3100;
const corsOptions = {
  credential: true,
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.use('/api/v1', categoryRoot);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
