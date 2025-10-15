const { Tenant, Faction, StatusEffect } = require('../../db');

const tenantDetail = async (req, res) => {
  try {
    const { idTenant } = req.params;

    const tenant = await Tenant.findOne({
      where: { id: idTenant },
      include: [Faction, StatusEffect],
    });

    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }

    res.json(tenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  tenantDetail
};