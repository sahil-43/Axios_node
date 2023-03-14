let { adddata1 } = require("../services/user")

async function add(req, res) {

    let data = await adddata1().catch((err) => {
        return err
    })
    return res.send(data)

}

module.exports = { add }