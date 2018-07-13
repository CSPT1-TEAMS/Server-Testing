// use jest and supertest to write the tests.
// Your API must be able to create and delete a resource of your choosing.
// Write a minimum of two tests per route handler.
// Add logic on the route handlers to validate request data and return the correct HTTP status code.
// Add tests to verify that validation works as intended.
// Add tests to verify that the endpoints return the correct HTTP status codes.
// Write the tests BEFORE writing the route handlers.
// The integration tests can be written after the model is created.
// Your mongoose model should have at least a method or static that is tested.


const request = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');

describe('server', () => {
    beforeAll(() => {
        return mongoose.connect('mongodb://localhost/testdb')
    })

    afterAll(() => {
        return mongoose.disconnect()
    })

    it('has a GET / endpoint', async () => {
        await request(server)
            .get('/')
            .expect(200)
    })

    it('has a GET / endpoint that returns 200', async () => {
        await request(server)
            .get('/')
            .expect(200)
    })

    it('has a GET / endpoint that returns json', async () => {
        const expectedJSON = { "api": "running" }

        const response = await request(server).get('/')

        expect(response.body).toEqual(expectedJSON)
    })

    it('should return user data after successfully saved to db',
        async () => {
            const testUserData = {
                username: 'Lisa',
                password: '123'
            }
            console.log('TEST', testUserData)
            await request(server).post('/', testUserData)
                .expect(201);
        })

    // it('should return status 202 after successfully deleting from db',
    //     async () => {
    //         // const testUserData = {
    //         //     username: 'Lisa',
    //         //     password: '123'
    //         // }
    //         console.log('TEST', testUserData)
    //         await request(server).delete('/', testUserData)
    //             .expect(202);
    // })

})