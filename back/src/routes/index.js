const { Router } = require('express');
const contract = require("./contract")
const payment = require("./payment")
const property = require("./property")
const tenant = require("./tenant")


const router = Router();

router.use("/contract", contract)
router.use("/payment", payment)
router.use("/property", property)
router.use("/tenant", tenant)

module.exports = router;