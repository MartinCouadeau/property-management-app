const { Contract, Faction, StatusEffect } = require('../../db');


const contractGet = async (req, res) => {
    try {
      const contracts = await Contract.findAll({
        include: [Faction, StatusEffect],
      });
      res.json(contracts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


module.exports = {
  contractGet
}