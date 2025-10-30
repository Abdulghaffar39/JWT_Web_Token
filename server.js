const express = require("express");
const router = require("./Router/route")
const dbCon = require("./db/dbConnection")
// https://zweck.io/jwt-authentication-in-node-js-with-middleware-a-secure-approach-for-web-applications/
// Describe local and global varriables

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())

dbCon();
app.use("/api", router);

app.listen(PORT, () => {
    // template littrels
    console.log(`Server is working successfuly on ${PORT}`);
})