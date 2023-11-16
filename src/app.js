import express from 'express';

import db from "./config/db.js";

const app = express();

app.set("port", process.env.PORT || 3000)


app.use("/", (req, res) => {
    res.send("Welcome to planetscale API")
})

app.listen(app.get("port"), () => {
    console.log("server is runing on  port 3000", app.get("port"))
})


db.connect()
.then(() =>{
    console.log("conected to database");
})
.catch((err) =>{
    console.log("erro: ", err)
})