const { Property } =require("../../db")

const propertyUpdate = async (req, res) => {
    try {
        const { propertyId } = req.params

        const existingProperty = await Property.findByPk(propertyId);
        if (!existingProperty) {
          return res.status(404).json({ error: "Property not found" });
        }

        const {
          name,
          address,
          description,
          rentDefault,
          ownerId,
          active
        } = req.body;


        const updatedProperty = await Property.update(
          {
            name,
            address,
            description,
            rentDefault,
            ownerId,
            active
          }, {
            where: {
              propertyId: propertyId
            }
          }
        )
        return res.status(200).send("The Property was succefully updated")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  propertyUpdate
}