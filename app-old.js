'use strict'

const http = require('http');

http.createServer( (req, res) => {

    res.writeHead(200, { 'content-Type': 'application/json' });
    let salida = {
        nombre: 'German',
        edad: 22,
        url: req.url
    }
    res.write( JSON.stringify(salida) );
    //res.write('Hola mundo');
    res.end()
})


.listen(8080);

console.log('server corriendo en el puerto 8080');