const { Property, Faction, StatusEffect } = require('../../db');

const propertyDetail = async (req, res) => {
  try {
    const { idProperty } = req.params;

    const property = await Property.findOne({
      where: { id: idProperty },
      include: [Faction, StatusEffect],
    });

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  propertyDetail
};