const express = require("express");
const app = express();
const port = 3030;

const errorHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

app.use(express.static("public"));

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
