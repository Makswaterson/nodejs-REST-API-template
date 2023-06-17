const express = require('express');

const authControllers = require('../../controllers/auth');
const schemas = require('../../schemas/users-schema');
const validateBody = require('../../decorators/validateBody');
const authentication = require('../../decorators/authenticate');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), authControllers.register);

router.post('/login', validateBody(schemas.loginSchema), authControllers.login);

router.get('/current', authentication, authControllers.getCurrent);

router.post('/logout', authentication, authControllers.logOutUser);

module.exports = router;
