const { paymentCreate } = require("./paymentCreate")
const { paymentDelete } = require("./paymentDelete")
const { paymentDetail } = require("./paymentDetail")
const { paymentGet } = require("./paymentGet")
const { paymentUpdate } = require("./paymentUpdate")

module.exports = {
    paymentCreate,
    paymentDelete,
    paymentDetail,
    paymentGet,
    paymentUpdate
}