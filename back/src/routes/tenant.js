const { Router } = require("express")
const {
    tenantCreate,
    tenantDelete,
    tenantDetail,
    tenantGet,
    tenantUpdate
} = require("../controllers/index")

const router = Router()

router.get("/", tenantGet)
router.get("/:idCharacter",tenantDetail)
router.post("/",tenantCreate)
router.delete("/:id", tenantDelete)
router.put("/:id", tenantUpdate)

module.exports = router