const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('... department')
})

const con = require('./con')

con.connect(function(err) {
    if (err) console.log(err)
    else console.log('connected to database')
})

require('./routes')(app)

app.listen(config.port, () => {
    console.log('Server Started at port ' + config.port)
})