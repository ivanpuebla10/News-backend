const express = require("express");
const app = express();
const PORT = 5000;
const { dbConnection } = require("./config/config");
const { typeError }= require('./middlewares/errors');

app.use(express.json());

dbConnection();

app.use("/news", require("./routes/news"));
app.use(typeError)

app.listen(PORT, console.log(`Server started on port ${PORT}`));
