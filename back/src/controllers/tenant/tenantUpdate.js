const { Tenant } =require("../../db")

const tenantUpdate = async (req, res) => {
    try {
        const { tenantId } = req.params

        const existingTenant = await Tenant.findByPk(tenantId);
        if (!existingTenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        const {
          name,
          email,
          phone,
          nationalId,
          active
        } = req.body;


        const updatedTenant = await Tenant.update(
          {
            name,
            email,
            phone,
            nationalId,
            active
          }, {
            where: {
              tenantId: tenantId
            }
          }
        )
        return res.status(200).send("The Tenant was succefully updated")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  tenantUpdate
}