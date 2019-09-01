// содежимое index.js
const http = require('http')
const fs = require('fs')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    switch (request.url) {
        case '/index':
            fs.readFile('../index.html', { encoding: 'utf8' }, function (error, file) {
                if (!error) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(file);
                    response.end();
                } else {
                    console.log(error)
                }
            });
            return;
        case '/main.css':
                fs.readFile('../main.css', { encoding: 'utf8' }, function (error, file) {
                    if (!error) {
                        response.writeHead(200, { 'Content-Type': 'text/css' });
                        response.write(file);
                        response.end();
                    } else {
                        console.log(error)
                    }
                });
            return;
        case '/index.js':
                fs.readFile('../index.js', { encoding: 'utf8' }, function (error, file) {
                    if (!error) {
                        response.writeHead(200, { 'Content-Type': 'text/javascript' });
                        response.write(file);
                        response.end();
                    } else {
                        console.log(error)
                    }
                });
            return;        
        case '/index2':
            fs.readFile('../index2.html', { encoding: 'utf8' }, function (error, file) {
                if (!error) {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(file);
                    response.end();
                } else {
                    console.log(error)
                }
            });
            return;
        default:
            response.end('nah idi!')
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})