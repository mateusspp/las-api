class Tabelas {
  init(pool) {
    this.pool = pool;

    this.criarUsuarios();
    this.criarEventos();
    this.criarTiposVendas();
    this.criarUFs();
    this.criarMunicipio();
  }

  criarUsuarios() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Usuarios(id INT AUTO_INCREMENT NOT NULL, nome varchar(100) NOT NULL, urlFotoPerfil text, UNIQUE (nome), PRIMARY KEY(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Usuarios criada com sucesso");
      }
    });
  }
  criarEventos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Eventos(id INT AUTO_INCREMENT NOT NULL, nome varchar(100) NOT NULL, descricao varchar(100) NOT NULL, urlFoto text, dataInicio DATE, dataFim DATE, UNIQUE (nome), PRIMARY KEY(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Eventos criada com sucesso");
      }
    });
  }
  criarTiposVendas() {
    const sql =
      "CREATE TABLE IF NOT EXISTS TipoVenda(id INT AUTO_INCREMENT NOT NULL, descricao VARCHAR(255), PRIMARY KEY(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela TipoVenda criada com sucesso");
      }
    });
  }

  criarUFs() {
    const sql =
      "CREATE TABLE IF NOT EXISTS UFs(id INT NOT NULL, sigla varchar(2) NOT NULL, nome varchar(30), primary key(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela UFs criada com sucesso");
      }
    });
  }

  criarMunicipio() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Municipio(id INT NOT NULL, nome varchar(50) NOT NULL, primary key(id))";

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Municipio criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
