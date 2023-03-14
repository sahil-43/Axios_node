const { getdata, adddata } = require("../Model/model")
const axios = require("axios")




async function adddata1() {
    let apidata = await axios.get("https://reqres.in/api/users").catch((err) => { return err })
    console.log(apidata.data)
    let data = await adddata(apidata.data.data).catch((err) => { return err })

    return data
}

module.exports = {
    adddata1
}