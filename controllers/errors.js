exports.getError404 = (req, res, next) => {
  res.render("error404", { pageTitle: "Error", message: "Página no encontrada", path: "/" });
};
