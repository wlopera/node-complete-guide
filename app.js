const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");

const adminData = require("./routes/admin");
const shopRouters = require("./routes/shop");

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

app.use("/admin", adminData.routes);
app.use(shopRouters);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "error404.html"));
  res.status(404).render("error404", { pageTitle: "Error", message: "Página no encontrada", path: "/" });
});

app.listen(3000);
