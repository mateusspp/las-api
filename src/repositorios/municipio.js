const query = require("../infraestrutura/database/queries");

class Municipios {
  Municipios(nome) {
    const sql = "SELECT nome FROM Municipio WHERE nome = ?";
    return query(sql, nome);
  }
}

module.exports = new Municipios();
