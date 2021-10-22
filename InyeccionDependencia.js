const express = require("express")
const axios = require("axios")
const {get} = require("./handlers")
const app = express()
const port = 3000

app.get("/", async (req, res) => {
    const { data } = await axios.get("url")
    res.send(data)
})
app.listen(port, () =>{ console.log(`Example app listening on port ${post}`);})