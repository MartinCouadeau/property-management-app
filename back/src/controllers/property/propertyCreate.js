const { Property } = require('../../db');

const propertyCreate = async (req, res) => {
  try {
    const {
      name,
      address,
      description,
      rentDefault,
      ownerId,
      active
    } = req.body;

    const newProperty = await Property.create({
      name,
      address,
      description,
      rentDefault,
      ownerId,
      active
    });

    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  propertyCreate
};