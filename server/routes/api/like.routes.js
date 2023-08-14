const express = require('express');

const router = express.Router();
const { Like } = require('../../db/models');

router.post('/:animalId', async (req, res) => {
  try {
    const like = await Like.findOne({
      where: { animalIdLike: Number(req.params.animalId), userIdLike: 2 },
    });
    if (like) {
      await Like.destroy({
        where: { animalIdLike: Number(req.params.animalId), userIdLike: 2 },
      });
    } else {
      await Like.create({
        animalIdLike: Number(req.params.animalId), userIdLike: 2,
      });
      res.cookie('like', req.params.animalId);
    }
    const likeArr = await Like.findAll({
      raw: true, where: { animalIdLike: Number(req.params.animalId) },
    });
    res.status(200).json({ quantityLikes: likeArr.length, message: 'ok' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});
module.exports = router;
