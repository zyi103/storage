const express = require('express')
const app = express()

app.use('/', express.static('public'))
app.get('/backend', (req, res) => res.send('Hello World!'))

app.listen(80, () => console.log('Example app listening on port 80!'))