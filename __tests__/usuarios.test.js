const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());
jest.mock("../src/repositorios/usuario");

describe("API de Usuários", () => {
  test("listar usuários", async () => {
    const resp = await request.get("/usuarios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        id: 1,
        nome: "Pietro",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 2,
        nome: "Max",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 5,
        nome: "Michael Jackson",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 7,
        nome: "Jason",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 14,
        nome: "Acm Neto",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      {
        id: 17,
        nome: "Acm ",
        urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
      },
      { id: 18, nome: "Acm SP", urlFotoPerfil: "https://wwxxxx" },
      {
        id: 20,
        nome: "Acm RJ",
        urlFotoPerfil: "http://enderecoinvalido.com.br\n",
      },
    ]);
  });

  test("Buscar usuário por id existente", async () => {
    const resp = await request.get("/usuarios/2");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 2,
      nome: "Max",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
  });

  test("Buscar usuário por id inexistente", async () => {
    const resp = await request.get("/usuarios/999999");
    expect(resp.statusCode).toBe(404);
    expect(resp.body).toEqual({});
  });

  test("Adicionar usuário com dados válidos", async () => {
    const resp = await request.post("/usuarios").send({
      nome: "PorcoAranha",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
    expect(resp.statusCode).toBe(201);
    expect(resp.body).toEqual({
      id: 1,
      nome: "PorcoAranha",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    });
  });

  test("Alterar id de usuarios", async () => {
    let teste = {
      nome: "PorcoAranha",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    };

    const resp = await request.put("/usuarios/2").send(teste);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      id: 2,
      ...teste,
    });
  });

  test("Excluir usuário com id existente", async () => {
    const resp = await request.delete("/usuarios/1");
    expect(resp.statusCode).toBe(200);
  });

  test("Excluir usuário com id inexistente", async () => {
    const resp = await request.delete("/usuarios/999999");
    expect(resp.statusCode).toBe(404);
  });

  test("Buscar usuário por nome existente", async () => {
    const resp = await request.get("/usuarios/nome/Pietro");
    let teste = {
      id: 1,
      nome: "Pietro",
      urlFotoPerfil: "https://www.randomuser.me/api/portraits/men/91.jpg",
    };
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(teste);
  });

  test("Buscar usuário por nome inexistente", async () => {
    const resp = await request.get("/usuarios/nome/Übermensch");

    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual("");
  });
});
