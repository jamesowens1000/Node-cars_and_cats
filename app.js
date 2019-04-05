// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);   //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);   //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/new-car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);   //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/favicon.ico'){
        // notice we won't include the utf8 encoding
        fs.readFile('favicon.ico', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/ico'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}); // send data about response
            response.write(contents);   //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/2010-mercedes-benz-cl65.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/2010-mercedes-benz-cl65.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/2013-hyundai-genesis-coupe.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/2013-hyundai-genesis-coupe.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/2018-chevrolet-corvette-z06.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/2018-chevrolet-corvette-z06.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/2018-jeep-wranglers.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/2018-jeep-wranglers.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/anti-cats.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/anti-cats.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat-hellion.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat-hellion.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('The URL requested is not available.');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");