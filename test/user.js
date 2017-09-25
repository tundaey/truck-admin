process.env.NODE_ENV = 'test';
let mongoose = require('mongoose');
let User = require('../app/models/user.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', ()=> {
    beforeEach((done)=> {
        User.remove({}, err=> {
            done();
        })
    })

    //Test the get route
    describe('/GET user', ()=> {
        it("it should GET all users", (done)=> {
            chai.request(server)
                .get('/api/v1/users')
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    //Test the post route
    describe("/POST user", ()=> {
        it("it should not create a user without an email", (done)=> {
            let user = {
                forename: "Tunde",
                surname: "Ganiy"
            }

            chai.request(server)
                .post('/api/v1/users')
                .send(user)
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    done();
                })
        })

        it("it should create a user", (done)=> {
             let user = {
                 email: "tundaey@gmail.com",
                forename: "Tunde",
                surname: "Ganiy"
            }

            chai.request(server)
                .post('/api/v1/users')
                .send(user)
                .end((err, res)=> {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message')
                    res.body.user.should.have.property('email')
                    res.body.user.should.have.property('surname')
                    res.body.user.should.have.property('forename')
                    done();
                })
        })
    })

    describe("GET /:id user", ()=> {
        it("it should GET a user by the given id", (done)=> {
            let user = new User({
                email: "tundaey@gmail.com",
                surname: "Ganiy",
                forename: "Tunde"
            })
            user.save((err, user)=> {
                chai.request(server)
                    .get('/api/v1/users/' + user.id)
                    .send(user)
                    .end((err, res)=> {
                        res.should.have.status(200)
                        res.body.should.be.a('object');
                        res.body.should.have.property('surname')
                        res.body.should.have.property('forename')
                        res.body.should.have.property('email')
                        res.body.should.have.property('_id').eql(user.id)
                        done();
                    })
            })
        })

         it("it should not return user if id is incorrect", (done)=> {
            let user = new User({
                email: "tundaey@gmail.com",
                surname: "Ganiy",
                forename: "Tunde"
            })
            user.save((err, user)=> {
                chai.request(server)
                    .get('/api/v1/users/' + 12345)
                    .send(user)
                    .end((err, res)=> {
                        res.should.have.status(200)
                        res.body.should.be.a('object');
                        res.body.should.have.property('errors');
                        done();
                    })
            })
        })
    })

    describe("/PUT/:id user", ()=> {
        it("should update the user given the id", (done)=>{
            let user = new User({
                email: "tundaey@gmail.com",
                surname: "Ganiy",
                forename: "Tunde"
            })
            user.save((err, user)=> {
                chai.request(server)
                    .put('/api/v1/users/' + user.id)
                    .send({surname: "Afolabi"})
                    .end((err, res)=> {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('User updated!');
                        res.body.user.should.have.property('surname').eql('Afolabi');
                        done();
                    })
            })
        })
    })

    describe("/DELETE/:id user", ()=> {
        it("it should DELETE a user given the id", (done)=> {
            let user = new User({
                email: "tundaey@gmail.com",
                surname: "Ganiy",
                forename: "Tunde"
            })
            user.save((err, user)=> {
                chai.request(server)
                    .delete('/api/v1/users/' + user.id)
                    .end((err, res)=> {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('User successfully deleted!')
                        res.body.result.should.have.property('ok').eql(1)
                        res.body.result.should.have.property('n').eql(1);
                        done();
                    })
            })
        })
    })
})