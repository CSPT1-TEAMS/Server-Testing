const User = require('./userModel');
const mongoose = require('mongoose');

describe('user model tests', () => {
    beforeAll(() => {
        return mongoose.connect('mongodb://localhost/testdb')
      })

      afterEach(() => {
        return User.remove()
      })
    
      afterAll(() => {
        return mongoose.disconnect()
      })

    it('should create a user to the db', async () => {
        const userData = { name: 'Alexis', ethnicity: 'Latino' }

        const response = await User.create(userData)
        expect(response.name).toBeDefined()
        expect(response.ethnicity).toBeDefined()
    });

    it('should have ethnicity be lowercase', async () => {
        const userData = { name: "Alexis", ethnicity: "Latino" }

        const response = await User.create(userData)
        expect(response.ethnicity).toBe("latino")
    });
})