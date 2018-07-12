const request = require('supertest');
const server = require('./server');

describe('server loads', () => {
    it('loads and has a GET at / endpoint', () => {
        return request(server)
        .get('/')
        .expect(200)
    })
    
})