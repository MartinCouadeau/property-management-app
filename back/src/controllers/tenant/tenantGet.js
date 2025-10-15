const { Tenant, Faction, StatusEffect } = require('../../db');


const tenantGet = async (req, res) => {
    try {
      const tenants = await Tenant.findAll({
        include: [Faction, StatusEffect],
      });
      res.json(tenants);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


module.exports = {
  tenantGet
}