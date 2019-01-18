var express = require('express')
var bodyParser = require('body-parser')

var app = express()
const nodemailer = require('nodemailer');
const morgan = require("morgan");
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/docs'))


app.post('/form/info', function (request, response, nextFn) {
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'nphelps@structuresnew.net',
            pass: 'NPpass33!'
        }
    })

    const name = request.body.customerName
    console.log(name)
    
    var mailOptions = {
        from: 'nphelps@structuresnew.net',
        to: 'nphelps@incontrolwatersystems.com',
        subject: 'Website Message',
        html: `<h1>Customer Name:${request.body.customerName}</h1>
               <h2>Customer Phone:${request.body.customerPhone}</h2>
               <h2>Customer Company: ${request.body.customerCompany}</h2>
               <h2>Customer Email: ${request.body.customerEmail}</h2>
               <p>Customer Message:${request.body.customerMessage}</p>`
    }
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
            return response.send(true)
        }
    })

})//post

//setting up server on port 3000
app.listen(3000, function() {
    console.log('structures NEW Company Site is running on port 3000...')
})