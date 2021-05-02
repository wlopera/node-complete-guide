const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");

const errorsController = require("./controllers/errors");

const app = express();

const expressHbs = require("express-handlebars");

// Registra la devolución de llamada del motor de plantilla dada como handlebars
// app.engine("hbs", expressHbs({ layoutsDir: "views/layout/", defaultLayout: "main-layout", extname: "hbs" }));
// Plantilla Handlebars a usar por express
// app.set("view engine", "hbs");

// Plantilla PUG a usar por express
// app.set("view engine", "pug");

// Plantilla EJS a usar por express
app.set("view engine", "ejs");

// Donde encontrar las vistas que requiere las plantillas
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouters);
app.use(shopRouters);
app.use(errorsController.getError404);

app.listen(3000);
