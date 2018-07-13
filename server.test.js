const request = require('supertest');
const server = require('./server');

describe('server loads', () => {
    it('loads and has a GET at / endpoint', () => {
        return request(server)
        .get('/')
        .expect(200)
    })

    it('returns json from endpoint /', (done) => {
        const testJson = {'dBStatus': 'connected'}
        request(server)
        .get('/')
        .end((err, res) => {
            if (err) return done(err);
            expect(res.status).toBe(200)
            expect(res.body).toEqual(testJson)
        done();
        })
    })
})
