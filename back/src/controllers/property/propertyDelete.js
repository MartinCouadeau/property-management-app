const { Property } =require("../../db")

const propertyDelete = async (req, res) => {
    try {
        const { id } = req.params

        await Property.destroy(
          {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The Property was succefully deleted")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  propertyDelete
}