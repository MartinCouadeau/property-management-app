const { Router } = require("express")
const {
    paymentCreate,
    paymentDelete,
    paymentDetail,
    paymentGet,
    paymentUpdate
} = require("../controllers/index")

const router = Router()

router.get("/", paymentGet)
router.get("/:idCharacter",paymentDetail)
router.post("/",paymentCreate)
router.delete("/:id", paymentDelete)
router.put("/:id", paymentUpdate)

module.exports = router