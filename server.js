const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const booksRouter = require("./routes/bookRoutes");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/books", booksRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;