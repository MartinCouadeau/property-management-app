const { Payment } =require("../../db")

const paymentDelete = async (req, res) => {
    try {
        const { id } = req.params

        await Payment.destroy(
          {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The Payment was succefully deleted")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  paymentDelete
}