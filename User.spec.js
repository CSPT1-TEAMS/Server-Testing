// use jest and supertest to write the tests.
// Your API must be able to create and delete a resource of your choosing.
// Write a minimum of two tests per route handler.
// Add logic on the route handlers to validate request data and return the correct HTTP status code.
// Add tests to verify that validation works as intended.
// Add tests to verify that the endpoints return the correct HTTP status codes.
// Write the tests BEFORE writing the route handlers.
// The integration tests can be written after the model is created.
// Your mongoose model should have at least a method or static that is tested.


const request = require('supertest')
const User = require('./User')
const mongoose = require('mongoose');

describe('user model', () => {
    beforeAll(() => {
        return mongoose.connect('mongodb://localhost/testdb')
    })

    afterAll(() => {
        return mongoose.disconnect()
      })
    
    afterEach(() => {
        return User.remove()
    })

it('should save users to the database', async () => {
    const user = { username: 'Russell', password: 'password' }

    await User.create(user)
    })

    it('should hash a user\'s password before they are saved to the database', async () => {
    const user = { username: 'Russell', password: 'password' }

    const newUser = await User.create(user)

    expect(newUser.password).not.toBe(user.password)
    })
})