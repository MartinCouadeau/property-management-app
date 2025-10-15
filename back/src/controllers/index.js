const { 
    contractCreate,
    contractDelete,
    contractDetail,
    contractGet,
    contractUpdate
} = require("./contract/index")

const { 
    paymentCreate,
    paymentDelete,
    paymentDetail,
    paymentGet,
    paymentUpdate
} = require("./payment/index")

const { 
    propertyCreate,
    propertyDelete,
    propertyDetail,
    propertyGet,
    propertyUpdate
} = require("./property/index")

const { 
    tenantCreate,
    tenantDelete,
    tenantDetail,
    tenantGet,
    tenantUpdate
} = require("./tenant/index")


module.exports = {
    contractCreate,
    contractDelete,
    contractDetail,
    contractGet,
    contractUpdate,
    paymentCreate,
    paymentDelete,
    paymentDetail,
    paymentGet,
    paymentUpdate,
    propertyCreate,
    propertyDelete,
    propertyDetail,
    propertyGet,
    propertyUpdate,
    tenantCreate,
    tenantDelete,
    tenantDetail,
    tenantGet,
    tenantUpdate
}