const { Payment } = require('../../db');

const paymentCreate = async (req, res) => {
  try {
    const {
      contractId,
      tenantId,
      amount,
      dueDate,
      paidDate,
      status,
      notes
    } = req.body;

    const newPayment = await Payment.create({
      contractId,
      tenantId,
      amount,
      dueDate,
      paidDate,
      status,
      notes
    });

    res.status(201).json(newPayment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  paymentCreate
};