const express = require('express');
// const port = 5000

const server = express()

// server.listen(port, () => {
//     return console.log(`server running on port ${port}`)
// })

server.get('/', (req, res) => {
    res.status(200).json({'dBStatus': 'connected'})
})


module.exports = server