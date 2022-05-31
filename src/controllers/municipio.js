let Municipio = require("../models/municipio");

module.exports = (app) => {
  app.get("/ufs/:nome", (req, res) => {
    let nome = req.params.nome;

    Municipio(nome)
      .then((resultados) => {
        res.status(200).json(resultados);
      })
      .catch(() => {
        res.status(500).end();
      });
  });
};
