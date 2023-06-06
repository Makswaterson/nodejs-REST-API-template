const HttpError = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(req.body);
    if (req.body === undefined || {}) {
      throw HttpError(400, 'Missing fields');
    } else if (error) {
      next(HttpError(400, `Missing required ${error.details[0].path} fields`));
    }
    next();
  };
  return func;
};
module.exports = validateBody;
