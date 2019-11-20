const request = require("supertest")
const server = require("../server")

describe("end-to-end: /issues", () => {
    it("/issues (get)", () => {
        request(server)
            .get("/issues")
            .expect(200)
    })

    it("/issues (post) : passes with token", () => {
        request(server)
            .post("/issues")
            .set("auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdGUiLCJpYXQiOjE1NzQyMTU0NTV9.mIwl3imI0SjFBA1lOi1muPJ5LPKZiVwEze8UEaVFuiI")
            .send({ title: " ", picture: "(url)", location: "test", description: " " })
            .expect(200)
    })

    it("/issues (post) : fails without token", () => {
        request(server)
            .post("/issues")
            .send({ title: " ", picture: "(url)", location: "test", description: " " })
            .expect("400")
    })

    it("/issues (post) : fails without correct data", () => {
        request(server)
            .post("/issues")
            .set("auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hdGUiLCJpYXQiOjE1NzQyMTU0NTV9.mIwl3imI0SjFBA1lOi1muPJ5LPKZiVwEze8UEaVFuiI")
            .send({ location: "test" })
            .expect("400")
    })
})

