const User = require('./user');
const server = require('./server');
const mongoose = require('mongoose');
const request = require('supertest');

describe('user Model', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost/testdb')
  })
  afterAll(() => {
    return mongoose.disconnect()
  })
  afterEach(() => {
    return User.remove()
  })

  it('Should save user to database', () => {
    const user = { username: 'Glenn-David', password: 'password' }
    return User.create(user)
  } )

  it('should return submitted `user` at endpoint/user', () => {
    const user = { username: 'Glenn-David', password: 'password' }
    request(server)
      .post('/user')
      .send(user)
      .end(function (err, res) {
        if (err) return done(err);
      expect(res.status).toBe(200)
      expect(res.body).toEqual(user)
        done();
      });
  })
})