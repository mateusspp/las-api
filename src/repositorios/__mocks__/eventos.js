let eventosMock = require("./eventos.json");
//eventosMock
class Eventos {
  listar() {
    return Promise.resolve(eventosMock);
  }

  buscarPorId(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  adicionar(id, evento) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  deletar(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  atualizar(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  listarEventoAgendados() {
    const sql = "SELECT * FROM Eventos WHERE dataInicio >= CURDATE();";
    return executaQuery(sql);
  }

  listarEventoEmAadamento() {
    const sql =
      "SELECT * FROM Eventos WHERE dataInicio <= CURDATE() and dataFim >= CURDATE();";
    return executaQuery(sql);
  }

  listarEventoFinalizado() {
    const sql = "SELECT * FROM Eventos WHERE dataFim < CURDATE();";
    return executaQuery(sql);
  }
}

module.exports = new Eventos();
