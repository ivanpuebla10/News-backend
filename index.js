const express = require("express");
const app = express();

const { dbConnection } = require("./config/config");
const { typeError }= require('./middlewares/errors');

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('./public'));

dbConnection();

app.use("/news", require("./routes/news"));
app.use(typeError)

app.listen(PORT, console.log(`Server started on port ${PORT}`)); 
