const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

jest.mock("../src/repositorios/evento");

describe("API de Eventos", () => {
  test("URL Base", async () => {
    const resp = await request.get("/eventos");
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toBe("Bem vindo ao LAS-API");
  });
});
