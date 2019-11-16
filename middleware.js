const jwt = require("jsonwebtoken")

module.exports = {
    auth
}

function auth(req, res, next) {
    if (!req.headers.auth) res.status(400).send("missing auth token").end()

    jwt.verify(req.headers.auth, process.env.SECRET, (error, data) => {
        if (error) {
            res.status(400).json({
                error
            })
        } else {
            req.token = data
            next()
        }
    })
}