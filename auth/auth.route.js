const router = require("express").Router()
const { auth } = require("../middleware")

router.use(auth)

module.exports = router

