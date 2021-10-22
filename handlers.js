module.exports.get = axios => async (req, res) => {
    const { data } = await axios.get("url")
    res.send(data)
}
module.exports.post = (axios,db, storagem, auth) => async (req, res) => {
    const { data } = await axios.get("url")
    res.send(data)
}