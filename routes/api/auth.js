const express = require('express');

const authControllers = require('../../controllers/auth');
const schemas = require('../../schemas/users-schema');
const validateBody = require('../../decorators/validateBody');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), authControllers.register);

router.post('/login', validateBody(schemas.loginSchema), authControllers.login);

module.exports = router;
