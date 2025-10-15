const { tenantCreate } = require("./tenantCreate")
const { tenantDelete } = require("./tenantDelete")
const { tenantDetail } = require("./tenantDetail")
const { tenantGet } = require("./tenantGet")
const { tenantUpdate } = require("./tenantUpdate")

module.exports = {
    tenantCreate,
    tenantDelete,
    tenantDetail,
    tenantGet,
    tenantUpdate
}