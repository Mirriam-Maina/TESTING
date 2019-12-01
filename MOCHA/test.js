const chai = require('chai');
const {expect} = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');


chai.use(chaiHttp);
const router = () => chai.request(app)

const testPerson = {
    "firstName":"test",
    "lastName":"test1",
    "email":"test@gmail.com",
    "password":"testpassword",
    "address":"kigali"
  };

describe('my test suite', ()=> {
    it('should post a new user', (done)=>{
        router()
        .post('/people')
        .send(testPerson)
        .end((error, response)=>{
            expect(response).to.have.status(201)
            expect(response.body).to.be.a('object')
            expect(response.body.data).to.be.a('object')
            done(error)
        })
    });

    it('should return all the users', (done)=>{
        router()
        .get('/')
        .end((error, response)=>{
            console.log(response.body)
            expect(response).to.have.status(200)
            expect(response.body).to.be.a('object')
            expect(response.body).to.have.property('something_else')
            expect(response.body.data[0]).to.be.a('object')
        done(error)
        })
    });

})




