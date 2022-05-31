const municipioMock = require("./municipios.json");

class Municipio {
  Municipio(nome) {
    return Promise.resolve(municipioMock.find(nome));
  }
}

module.exports = new Municipio();
