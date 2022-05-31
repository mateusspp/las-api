const repositorios = require("../repositorios/municipio");

class Municipio {
  async Municipio(nome) {
    const Municipio = await repositorios.Municipio(nome);
    return Municipio.map((municipio) => municipio.nome);
  }
}

module.exports = new Municipio();
