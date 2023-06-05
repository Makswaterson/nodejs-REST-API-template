const contactService = require('../models/contacts');

const HttpError = require('../helpers');

const ctrlWrapper = require('../decorators/ctrlWrapper');

const getAllContacts = async (req, res) => {
  const result = await contactService.listContacts();
  res.json(result);
};
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.getContactById(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};
const addNewContact = async (req, res) => {
  const result = await contactService.addContact(req.body);
  res.status(201).json(result);
};
const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'Contact deleted' });
};
const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
};
