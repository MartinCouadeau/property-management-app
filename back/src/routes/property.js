const { Router } = require("express")
const {
    propertyCreate,
    propertyDelete,
    propertyDetail,
    propertyGet,
    propertyUpdate
} = require("../controllers/index")

const router = Router()

router.get("/", propertyGet)
router.get("/:idCharacter",propertyDetail)
router.post("/",propertyCreate)
router.delete("/:id", propertyDelete)
router.put("/:id", propertyUpdate)

module.exports = router