const { Contract, Faction, StatusEffect } = require('../../db');

const contractDetail = async (req, res) => {
  try {
    const { idContract } = req.params;

    const contract = await Contract.findOne({
      where: { id: idContract },
      include: [Faction, StatusEffect],
    });

    if (!contract) {
      return res.status(404).json({ error: 'Contract not found' });
    }

    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  contractDetail
};