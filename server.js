const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {


    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = ()=>{
        console.log('Hello');
    };

    greet();
    greet();



    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.setHeader('location', './about');
            res.statusCode = 301;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    };

    //sendind a html file to server
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            // if we are only using one one file to send then we can also do following
            // res.end(data);
            res.end();
        }
    });


});

server.listen(3000, 'localhost', () => {
    console.log('listening for request in port 3000');
    //set header content type

});