const { Router } = require("express")
const {
    contractCreate,
    contractDelete,
    contractDetail,
    contractGet,
    contractUpdate
} = require("../controllers/index")

const router = Router()

router.get("/", contractGet)
router.get("/:idCharacter",contractDetail)
router.post("/",contractCreate)
router.delete("/:id", contractDelete)
router.put("/:id", contractUpdate)

module.exports = router