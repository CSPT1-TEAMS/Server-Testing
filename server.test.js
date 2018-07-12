const request = require('supertest');
const server = require('./server');

describe('server tests', () => {
    it('should have base server endpoint, that also returns a 200 status' , async () => {
        await request(server)
            .get('/Home')
            .expect(200)
    });

    it('should return JSON confirming a get request on the server', async () => {
        const response = await request(server).get('/Home')

        expect(200)
        expect(response.body).toEqual( {"Server": "You're in it!"} )
    });

    // it('should return Alexis via get request', async () => {
    //     const response = await request(server).get('/user')

    //     expect(200)
    //     expect(response.name).toEqual('Alexis')
    // })
})