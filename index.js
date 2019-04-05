var express = require('express');
var app = express();

console.log(__dirname);

var fs = require ('fs');

app.use(express.static('public'));
var contador =0;

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/public/home.html');
  contador ++;
  console.log('pagina visitada'+ contador);


fs.writeFile('contador.txt','pagina visita: '+contador , 'utf8',function(){
console.log('archivo escrito');
});

});

app.get('/contacto', function(request, response) {
    response.sendFile(__dirname+'/public/contacto.html');
  });

  app.get('/sobre-mi', function(request, response) {
    response.sendFile(__dirname+'/public/sobremi.html');
  });


  app.get('/portafolio', function(request, response) {
    response.sendFile(__dirname+'/public/portafolio.html');
  });
  

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

////FS