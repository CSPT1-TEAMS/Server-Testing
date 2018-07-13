const request = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');

describe('server tests', () => {
    beforeAll(() => {
        return mongoose.connect('mongodb://localhost/testdb')
      })

      afterAll(() => {
        return mongoose.disconnect()
      })

    it('should have base server endpoint, that also returns a 200 status' , async () => {
        await request(server)
            .get('/Home')
            .expect(200)
    });

    it('should return JSON confirming a get request on the server', async () => {
        const response = await request(server).get('/Home')

        .expect(200)
        .expect(response.body).toEqual( {"Server": "You're in it!"} )
    });

    it('should create data using post', async () => {
        await request(server)
            .post('/user')

            .expect(200)
            
    });

})