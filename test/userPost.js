const expect = require('chai').expect;
const request = require('supertest');

const app = require('../routes/users.js');
// const conn = require('../models/User.js');
const connectDB = require('../config/db');

describe('POST /add', () => {
    before((done) => {
        connectDB()
            .then(() => done())
            .catch((err) => done(err));
    })

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    })
    
    it('OK, registering a new user', (done) => {
        request(app).post('/add')
            .send({ username: 'testUsername', email: "testing@gmail.com", password: "test123" })
            .then((res) => {
                const body = res.body;
                console.log(body)
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('username');
                expect(body).to.contain.property('email');
                expect(body).to.contain.property('date');
                done();
            })
            .catch((err) => done(err));
     });
    
    it('Fail, something went wrong', (done) => {
        request(app).post('/add')
            .send({ name: 'NOTE' })
            .then((res) => {
                const body = res.body;
                expect(body.errors.text.name)
                .to.equal('ValidatorError')
                done();
          })
          .catch((err) => done(err));
    });
})