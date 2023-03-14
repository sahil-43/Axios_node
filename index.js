
const express = require("express")
const rout = require('./routes')
const app = express();

const port = 3002;

app.use(express.json())
app.use("/api", rout)
app.use(express.urlencoded({ extended: true }))


// app.get("/", (req, res) => {
//     res.send("hello world")
// });

// axios.get("https://reqres.in/api/users/2")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// axios.post("https://reqres.in/api/users", {

//     "name": "morpheus",
//     "job": "leader"
// })
//     .then((result) => {
//         console.log(result.data)
//     }).catch((err) => {
//         console.log(err)
//     })



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});