let usuariosMock = require("./usuarios.json");

class Usuarios {
  listar() {
    return Promise.resolve(usuariosMock);
    //bloco 3 -12 minutos
  }

  buscarPorId(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  adicionar(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  async validarNomeUsuarioNaoUtilizado(nome) {
    return Promise.resolve(
      usuariosMock.find((usuario) => usuario.nome === nome)
    );
  }

  alterar(id, valores) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
  }

  excluir(id) {
    return Promise.resolve(usuariosMock.find((usuario) => usuario.id == id));
  }

  buscarPorNome(nome) {
    return Promise.resolve(
      usuariosMock.find((usuario) => usuario.nome === nome)
    );
  }
}

module.exports = new Usuarios();
