const router = require("express").Router()
const db = require("./login.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const env = require('dotenv').config()

function signJWT(data) {
    const payload = data

    const secret = process.env.SECRET
    const options = {}

    return jwt.sign(payload, secret, options)
}

router.post("/", (req, res) => {
    const { username, password } = req.body
    if (!username || !password) res.status(401).send("missing username or password")

    db.get(username).then(r => {
        if (!r || r.length == 0) {
            res.status(404).send("user does not exist").end()
        }

        if (bcrypt.compareSync(password, r[0].password)) {
            const token = signJWT({ username })
            res.status(200).send(token)
        } else {
            res.status(400).send("incorrect password")
        }

    }).catch(error => {
        console.log(error)
        res.status(500).json({
            message: "sever side error",
            error
        })
    })
})

router.post("/new", (req, res) => {
    const { username, password } = req.body

    if (!username || !password) res.status(401).send("missing username or password")
    req.body.password = bcrypt.hashSync(password, 14)

    db.add(req.body).then(r => {
        const token = signJWT({ username })
        res.status(200).send(token)
    }).catch(error => {
        // console.log(error)
        res.status(500).json({
            message: "sever side error",
            error
        })
    })
})

module.exports = router