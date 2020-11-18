const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;

chai.use(chaiHttp);
describe("Product API", () => {
  before(() => {
    console.log("before");
  });
  after(() => {
    console.log("after");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  it("Get All Products", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .get("/products")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Create Product", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .post("/products")
      .send({ name: "ishoes", price: 190 })
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Get Single Product", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .get("/products/5fb4fcf58283c74200a65eb1")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Update a Product", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .put("/products/5fb4fcf58283c74200a65eb1")
      .send({ name: "Hp", price: 1900 })
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Patch a Product", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .patch("/products/5fb4fcf58283c74200a65eb1")
      .send({ price: 1200 })
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Delete a Product", () => {
    return chai
      .request("http://localhost:8000/productapi")
      .delete("/products/5fb4fcf58283c74200a65eb1")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });
});
