const express = require('express');

const router = express.Router();

const flowersApiRouter = require('./api/flower.routes');

const likesRouter = require('./api/like.routes');

const authApiRouter = require('./api/auth.routes');

router.use('/api/flowers', flowersApiRouter);
router.use('/api/likes', likesRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
