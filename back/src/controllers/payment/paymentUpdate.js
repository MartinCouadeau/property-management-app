const { Payment } =require("../../db")

const paymentUpdate = async (req, res) => {
    try {
        const { paymentId } = req.params

        const existingPayment = await Payment.findByPk(paymentId);
        if (!existingPayment) {
          return res.status(404).json({ error: "Payment not found" });
        }

        const {
          contractId,
          tenantId,
          amount,
          dueDate,
          paidDate,
          status,
          notes
        } = req.body;


        const updatedPayment = await Payment.update(
          {
            contractId,
            tenantId,
            amount,
            dueDate,
            paidDate,
            status,
            notes
          }, {
            where: {
              paymentId: paymentId
            }
          }
        )
        return res.status(200).send("The Payment was succefully updated")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  paymentUpdate
}