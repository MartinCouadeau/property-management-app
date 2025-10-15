const { Payment, Faction, StatusEffect } = require('../../db');

const paymentDetail = async (req, res) => {
  try {
    const { idPayment } = req.params;

    const payment = await Payment.findOne({
      where: { id: idPayment },
      include: [Faction, StatusEffect],
    });

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  paymentDetail
};