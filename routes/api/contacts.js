const express = require('express');

const contactsControllers = require('../../controllers/contacts');
const schemas = require('../../schemas/contacts-schema');
const validateBody = require('../../decorators/validateBody');
const validateFavorite = require('../../decorators/validateFavorite');
const authentication = require('../../decorators/authenticate');
const isValidId = require('../../decorators/isValidId');

const router = express.Router();

router.get('/', authentication, contactsControllers.getAllContacts);

router.get('/:contactId', authentication, isValidId, contactsControllers.getContactById);

router.post(
  '/',
  authentication,
  validateBody(schemas.contactsSchema),
  contactsControllers.addNewContact
);

router.delete('/:contactId', authentication, isValidId, contactsControllers.deleteContact);

router.put(
  '/:contactId',
  authentication,
  isValidId,
  validateBody(schemas.contactsSchema),
  contactsControllers.updateContact
);
router.patch(
  '/:contactId/favorite',
  authentication,
  isValidId,
  validateFavorite(schemas.favoriteSchema),
  contactsControllers.updateFavorite
);

module.exports = router;
