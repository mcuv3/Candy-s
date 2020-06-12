const dulceControllers = require("../controllers/dulces");
const mongoose = require("mongoose");
const Dulce = require("../model/Dulce");
const expect = require("chai").expect;

describe("Dulces - Tests", () => {
  before((done) => {
    mongoose
      .connect(
        "mongodb+srv://mcuve:dislexiaautismo1313@nodejs-wg1ao.mongodb.net/testDulceria?retryWrites=true&w=majority",
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      )
      .then((res) => {
        const dulce = new Dulce({
          _id: "5c0f66b979af55031b34728a",
          Nombre: "Panditas",
          Descripcion: "De sabor fresa",
          Seccion: "Gomas",
          Precio: 250,
          imageURL: "https://source.unsplash.com/200x200/?candy,granel",
        });
        dulce.save().then((r) => {
          done();
        });
      });
  });

  it("Deberia extraer un arreglo de dulces con almenos un dulce ", (done) => {
    const res = {
      dulces: null,
      statusCode: 500,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.dulces = data.dulces;
      },
    };

    dulceControllers
      .getDulces({}, res, () => {})
      .then((result) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.dulces).to.be.a("Array").to.have.lengthOf.at.least(1);
        done();
      });
  });

  it("Deberia enviar un status valido y regresar el dulce con los tipos de datos deseados", (done) => {
    const req = {
      body: {
        Nombre: "Panditas",
        Descripcion: "De sabor fresa",
        Seccion: "Gomas",
        Precio: 300,
      },
    };
    const res = {
      dulce: null,
      statusCode: 500,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (dulce) {
        this.dulce = dulce;
      },
    };

    dulceControllers
      .postDulce(req, res, () => {})
      .then((result) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.dulce).to.have.property("_id");
        expect(res.dulce).to.have.property("Nombre").to.be.a("String");
        expect(res.dulce).to.have.property("Descripcion").to.be.a("String");
        expect(res.dulce).to.have.property("Seccion").to.be.a("String");
        expect(res.dulce).to.have.property("Precio").to.be.a("Number");
        expect(res.dulce).to.have.property("imageURL").to.be.a("String");
        done();
      });
  });

  it("Deberia enviar un status valido al usuario y cambiar exitosamente su disponibilidad", (done) => {
    const req = { body: { _id: "5c0f66b979af55031b34728a" } };
    const res = {
      statusCode: 500,
      newDisponible: null,
      prevDisponible: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      send: function (bool) {
        this.newDisponible = bool;
        this.prevDisponible = !bool;
      },
    };
    dulceControllers
      .postCambiarDisponibilidad(req, res, () => {})
      .then((result) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.newDisponible).to.not.be.equal(res.prevDisponible);
        done();
      });
  });

  after((done) => {
    Dulce.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
