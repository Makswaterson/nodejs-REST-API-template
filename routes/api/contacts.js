const express = require('express');

const contactsControllers = require('../../controllers/contacts');
const schemas = require('../../schemas/contacts-schema');
const validateBody = require('../../decorators/validateBody');
const validateFavorite = require('../../decorators/validateFavorite');
const isValidId = require('../../decorators/isValidId');

const router = express.Router();

router.get('/', contactsControllers.getAllContacts);

router.get('/:contactId', isValidId, contactsControllers.getContactById);

router.post('/', validateBody(schemas.contactsSchema), contactsControllers.addNewContact);

router.delete('/:contactId', isValidId, contactsControllers.deleteContact);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.contactsSchema),
  contactsControllers.updateContact
);
router.patch(
  '/:contactId/favorite',
  isValidId,
  validateFavorite(schemas.favoriteSchema),
  contactsControllers.updateFavorite
);

module.exports = router;
