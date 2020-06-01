const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');

chai.should();

chai.use(chaiHttp);

describe('Testing Gets', () => {
  it("check questions page", (done) => {
    chai.request('http://localhost:5000')
      .get("/questions").end((error, response) => {
        response.should.have.status(200);
        done();
      })
  })
})

  describe('Testing Posts', () => {
    it("make user", (done) => {
      chai.request('http://localhost:5000')
        .post("/users/add")
          .send({ username: 'testUsername', email: "testing@gmail.com", password: "test123" })
            .end((error, response) => {
              response.should.have.status(200);
              done();
            })
    })

    it("Check test user exists", (done) => {
      chai.request('http://localhost:5000')
        .post("/users/add")
          .send({ username: 'testUsername', email: "testing@gmail.com", password: "test123" })
            .end((error, response) => {
              response.body.should.have.property('msg').eq('User already exists');
              done();
            })
    })

  })



  describe('Testing Delete', () => {
    it("Delete test user", (done) => {
      chai.request('http://localhost:5000')
      .delete("/users/delete")
      .send({ username: 'testUsername' })
        .end((error, response) => {
          response.body.should.have.property('msg').eq('User exists and deleted');
          done();
        })
    })
  })