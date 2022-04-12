var http = require('http');
var app = require('./config/express');
var database = require('./config/database');

//const MONGODB_URI = 'mongodb://localhost/gerenciadorFinanceiro';
const MONGODB_URI = 'mongodb+srv://rodrigolimacunha:3emcae5V1G@cluster0.tygpl.mongodb.net/gerenciadorFinanceiro?retryWrites=true&w=majority'

database(MONGODB_URI); 

http.createServer(app)
    .listen(app.get('port'), function(){
      console.log('Serviço iniciado na porta ' +app.get('port'))
    });
