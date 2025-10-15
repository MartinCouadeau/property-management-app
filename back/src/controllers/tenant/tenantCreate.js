const { Tenant } = require('../../db');

const tenantCreate = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      nationalId,
      active
    } = req.body;

    const newTenant = await Tenant.create({
      name,
      email,
      phone,
      nationalId,
      active
    });

    res.status(201).json(newTenant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  tenantCreate
};