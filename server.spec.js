const request = require('supertest');
const server = require('./server');


describe('server', () => {
    it('running', async () => {
        await request(server)
            .get('/')
            .expect(200)

    })

    it('server posts', async () => {
        await request(server)
            .post('/')
            .expect(200)
    })

    it('post request returns json', async () => {
        const JSON = { "something": "json" }

        const response = await request(server).post('/')

        expect(response.body).toEqual(JSON)

    }
    )

    it('delete works', async () => {
        await request(server)
            .delete('/')
            .expect(202)
    })

    it('Del a user that does not exist', async ()=> {
      err = new Error('user was not present');
      
        await request(server).del('/').then()
       .catch(err => {
           res.sendStatus(err)
       })
    //     if (err !== null) {
            
    //     } else {

    //     }
     })



})