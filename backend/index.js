const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// apis
const registerApi = require("./routes/register-api");
const loginApi = require("./routes/login-api");
const validateUserApi = require("./routes/validation-api");
const blogApi = require("./routes/blogs-api");
const favoritesApi = require("./routes/favorites-api");

const db = require("./models/db.js");
require("dotenv").config({ credentials: true, origin: "localhost:3000" });
const port = 9000;
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookies());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "api",
      version: "1.0.0",
    },
  },
  servers: [
    {
      url: "localhost:9000",
    },
  ],

  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

db();
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/", registerApi);
app.use("/", loginApi);
app.use("/", validateUserApi);
app.use("/", blogApi);
app.use("/", favoritesApi);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
