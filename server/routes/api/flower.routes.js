const express = require('express');

const router = express.Router();

const {
  Flower, User, Like, Comment,
} = require('../../db/models');
const fileuploadMiddeleware = require('../../middleware/fileuploadMiddeleware');

router.post('/', async (req, res) => {
  const {
    name, description, url,
  } = req.body;

  try {
    if (name && description && url) {
      const flower = await Flower.create({
        name, description, userId: 1, url,
      });
      const flowerInclude = await Flower.findOne({
        where: { id: flower.id },
        include: [{
          model: User,
        },
        { model: Comment },
        ],
      });
      res.status(201).json(flowerInclude);
    } else {
      res.status(401).json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});
router.post('/urlFoto', async (req, res) => {
  const file = req.files?.homesImg;

  const arrUrl = await Promise.all(
    file.map(async (el) => await fileuploadMiddeleware(el)),
  );
  res.json(arrUrl);
});

router.delete('/:idFlower', async (req, res) => {
  try {
    const flowerDel = await Flower.destroy({
      where: { id: req.params.idFlower },
      // where: { id: 88 },
    });
    if (flowerDel) {
      res.status(200).json({ message: 'ok', id: Number(req.params.idFlower) });
    } else {
      res.status(400).json({ message: 'сервер временно не работает', status: 400 });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const flowers = await Flower.findAll({
      include: [{
        model: User,
      },
      { model: Comment },
      ],
    });
    res.json(flowers);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
