const repositorios = require("../repositorios/ufs");

class Ufs {
  async listar() {
    const ufs = await repositorios.listar();
    return ufs.map((uf) => uf.Abreviacao);
  }
}

module.exports = new Ufs();
