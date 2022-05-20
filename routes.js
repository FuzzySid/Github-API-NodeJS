const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/emojis',controllers.getEmojis)

router.get('/user/:user', controllers.getUser)

router.get('/repo/:user/:reponame', controllers.getRepo)

router.get('/commit/:user/:reponame', controllers.getCommit)

module.exports = router;