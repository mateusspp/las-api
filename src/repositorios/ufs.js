const query = require("../infraestrutura/database/queries");

class Ufs {
  listar() {
    const sql = "SELECT Abreviacao FROM UFs ORDER BY Abreviacao";
    return query(sql);
  }
}

module.exports = new Ufs();
