const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


//Middleware

app.use(bodyParser.json());
app.use(cors());


const products= require("./routes/api/products.js")
app.use('/api/products',products)
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started listening on port ${port}`))