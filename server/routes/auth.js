const { signUp, login } = require("../controller/userController");

const router = require("express").Router();

router.get('/healthCheck', (req, res) => {res.send("hello from server")});

router.post('/auth/signup', signUp);

router.post('/auth/login', login);

module.exports = router;