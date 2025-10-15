const { Contract } =require("../../db")

const contractDelete = async (req, res) => {
    try {
        const { id } = req.params

        await Contract.destroy(
          {
            where: {
              id: id
            }
          }
        )
        return res.status(200).send("The Contract was succefully deleted")

    } catch (error) {
        res.status(404).send({error:error.message})
    }
}

module.exports = {
  contractDelete
}