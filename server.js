const express = require("express");

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.json())



app.listen(PORT, () => {
    // template littrels
    console.log(`Server is working successfuly on ${PORT}`);
})