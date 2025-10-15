const { Tenant } =require("../../db")

const tenantDelete = async (req, res) => {
    try {
        const { id } = req.params

        await Tenant.destroy(
          {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The Tenant was succefully deleted")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  tenantDelete
}