const express = require('express');

const authControllers = require('../../controllers/auth');
const schemas = require('../../schemas/users-schema');
const validateBody = require('../../middlewares/validateBody');
const authentication = require('../../middlewares/authenticate');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), authControllers.register);

router.post('/login', validateBody(schemas.loginSchema), authControllers.login);

router.get('/current', authentication, authControllers.getCurrent);

router.post('/logout', authentication, authControllers.logOutUser);

router.patch('/avatars', authentication, upload.single('avatar'), authControllers.updateAvatar);

module.exports = router;
