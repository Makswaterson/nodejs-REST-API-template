const express = require('express');

const contactsControllers = require('../../controllers/controllers');
const schemas = require('../../schemas/contacts-schema');
const validateBody = require('../../decorators/validateBody');
const router = express.Router();

router.get('/', contactsControllers.getAllContacts);

// router.get('/:contactId', contactsControllers.getContactById);

// router.post('/', validateBody(schemas.contactsSchema), contactsControllers.addNewContact);

// router.delete('/:contactId', contactsControllers.deleteContact);

// router.put('/:contactId', validateBody(schemas.contactsSchema), contactsControllers.updateContact);

module.exports = router;
