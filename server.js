const express = require("express");
const router = require("./Router/route")
const dbCon = require("./db/dbConnection")
// const cors = require('cors');
// https://zweck.io/jwt-authentication-in-node-js-with-middleware-a-secure-approach-for-web-applications/
// Describe local and global varriables

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(cors());

dbCon();
app.use("/api", router);

app.listen(PORT, () => {
    // template littrels
    console.log(`Server is working successfuly on ${PORT}`);
})