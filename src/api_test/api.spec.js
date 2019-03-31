const request = require("supertest");
const should = require("should");
const index = require("../index");

describe("GET /api/home는", () => {
  describe("성공 시", () => {
    it("매장 리스트의 첫번째는 맥도날드이다.", done => {
      request(index)
        .get("/api/home")
        .end((err, res) => {
          const mac = res.body[0];
          mac.should.have.property("name", "맥도날드");
          done();
        });
    });
  });
});
