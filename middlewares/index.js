const ctrlWrapper = require('./ctrlWrapper');
const validateBody = require('./validateBody');
const isValidId = require('./isValidId');
const authentication = require('./authenticate');
const upload = require('./upload');

module.exports = { ctrlWrapper, validateBody, isValidId, authentication, upload };
