const User = require('./user');
const mongoose = require('mongoose');


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
})