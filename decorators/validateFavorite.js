const HttpError = require('../helpers/HttpError');

const validateFavorite = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(error);
    if (error) {
      throw HttpError(400, `Missing fields favorite`);
    }
    next();
  };
  return func;
};
module.exports = validateFavorite;
