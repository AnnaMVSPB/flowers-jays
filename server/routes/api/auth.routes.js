const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && password && email) {
      let user = await User.findOne({ where: { name } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ name, password: hash, email });
        req.session.userId = user.id;
        res.locals.user = { name: user.name, id: user.id };
        res.status(201).json({ name: user.name, id: user.id, email: user.email });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/logout', (req, res) => {
  // удаление сессии на сервере
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени
      .json({ message: 'Успешный выход' });
  });
});
router.get('/verification', async (req, res) => {
  try {
    const { userId } = req.session;
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },

      });
      res.status(201).json(user);
    } else {
      res.status(403).json({ message: 'не в сети' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
