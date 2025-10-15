const { Payment, Faction, StatusEffect } = require('../../db');


const paymentGet = async (req, res) => {
    try {
      const payments = await Payment.findAll({
        include: [Faction, StatusEffect],
      });
      res.json(payments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


module.exports = {
  paymentGet
}