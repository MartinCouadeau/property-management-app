const { Contract } =require("../../db")

const contractUpdate = async (req, res) => {
    try {
        const { contractId } = req.params

        const existingContract = await Contract.findByPk(contractId);
        if (!existingContract) {
          return res.status(404).json({ error: "Contract not found" });
        }

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


        const updatedContract = await Contract.update(
          {
            id,
            tenantId,
            propertyId,
            startDate,
            endDate,
            monthlyRent,
            deposit,
            status
          }, {
            where: {
              contractId: contractId
            }
          }
        )
        return res.status(200).send("The Contract was succefully updated")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  contractUpdate
}