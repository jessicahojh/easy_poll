const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');

chai.should();

chai.use(chaiHttp);

describe('Testing Gets', () => {
  it("check questions page", (done) => {
    chai.request('http://localhost:5000')
      .get("/questions").end((error, response) => {
        console.log("TEST:  Checking /questions")
        response.should.have.status(200);
        console.log(response.body);
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
              console.log("TEST:  Adding test user")
              response.should.have.status(200);
              //console.log(response.body.msg);
              console.log(response.body);
              done();
            })
    })

    it("Check test user exists", (done) => {
      chai.request('http://localhost:5000')
        .post("/users/add")
          .send({ username: 'testUsername', email: "testing@gmail.com", password: "test123" })
            .end((error, response) => {
              console.log("TEST:  Checking if test user exists")
              //response.should.have.status(400);
              response.body.should.have.property('msg').eq('User already exists');
              //console.log(response.body.msg);
              console.log(response.body);
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
          console.log("TEST:  Deleting test user")
          //response.should.have.status(200);
          response.body.should.have.property('msg').eq('User exists and deleted');
          console.log(response.body);
          done();
        })
    })
  })