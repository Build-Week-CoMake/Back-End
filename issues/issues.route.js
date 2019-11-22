const router = require("express").Router()
const { auth } = require("../middleware")
const db = require("./issues.model")

router.get("/", auth, (req, res) => {
    db.get(req.query).then(r => {
        res.status(200).send(r)
    }).catch(error => {
        console.log(error)
        res.status(500).json({
            message: "server side error",
            error
        })
    })
})

router.post("/", auth, (req, res) => {
    let { title, picture, location, description } = req.body
    if (!title || !picture || !location || !description) {
        res.status(404).send("missing a required field").end()
    }

    let payload = {
        user_id: req.token.username,
        ...req.body
    }
    db.add(payload).then(async r => {

        let data = await db.get({ location: req.body.location });
        res.status(200).send(data);

    }).catch(error => {
        console.log(error)
        res.status(500).json({
            message: "server side error",
            error
        })
    })
})

router.put("/:id", auth, (req, res) => {


    db.edit(req.params.id, req.body, req.token.username).then(async r => {

        let data = await db.get({ location: req.body.location });
        res.status(200).send(data);

    }).catch(error => {
        res.status(500).json({
            message: "server side error",
            error
        })
    })
})

router.delete("/:id", auth, (req, res) => {

    db.del({
        id: req.params.id,
        user_id: req.token.username
    }).then(async r => {

        let data = await db.get({ location: req.headers.location });
        res.status(200).send(data);

    }).catch(error => {
        res.status(500).json({
            message: "server side error",
            error
        })
    })
})



module.exports = router