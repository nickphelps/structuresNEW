var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/public'))

//setting up server on port 3000
app.listen(3000, function() {
    console.log('structures NEW Company Site is running on port 3000...')
})