const { Contract } = require('../../db');

const contractCreate = async (req, res) => {
  try {
    const {
        id,
        tenantId,
        propertyId,
        startDate,
        endDate,
        monthlyRent,
        deposit,
        status
    } = req.body;

    const newContract = await Contract.create({
        id,
        tenantId,
        propertyId,
        startDate,
        endDate,
        monthlyRent,
        deposit,
        status
    });

    res.status(201).json(newContract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  contractCreate
};