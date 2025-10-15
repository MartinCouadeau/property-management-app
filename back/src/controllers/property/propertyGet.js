const { Property, Faction, StatusEffect } = require('../../db');


const propertyGet = async (req, res) => {
    try {
      const propertys = await Property.findAll({
        include: [Faction, StatusEffect],
      });
      res.json(propertys);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


module.exports = {
  propertyGet
}