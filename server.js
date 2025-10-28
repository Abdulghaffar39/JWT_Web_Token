const express = require("express");
const data = require("./Router/route")

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json())

app.use("/api", data);

app.listen(PORT, () => {
    // template littrels
    console.log(`Server is working successfuly on ${PORT}`);
})