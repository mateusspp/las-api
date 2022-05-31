const Ufs = require("../models/ufs");

module.exports = (app) => {
  app.get("/ufs", (req, res) => {
    Ufs.listar()
      .then((resultados) => {
        res.json(resultados);
      })
      .catch(() => {
        res.status(500).end();
      });
  });
};
