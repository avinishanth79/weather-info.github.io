//server side using http method
const weatherData = require('./current-timezone.js');
const http = require('http');
const port = process.env.PORT || 5000;

//server gives the data based the methods (i.e GET,POST)
const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        if(req.url === '/weatherData'){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify(weatherData.allTimeZones()));
            res.end();
        }else{
            res.write('Wrong URL');
            res.end();
        }
    }else if (req.method === 'POST') {
        if(req.url === '/nextFiveHours'){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
            res.writeHead(200, {'Content-Type':'application/json'});
            req.on('data', chunk => {
                let city = (chunk.toString().split('"')[3]);
                res.write(JSON.stringify(weatherData.nextNhoursWeather(city,5,weatherData.allTimeZones())));
              })
            req.on('end', () => {
                res.end();
              })
        }else{
            res.write('Wrong URL');
            res.end();
        }
    }else{
        res.write('Wrong HTTP METHOD');
        res.end();
    }
});

server.listen(port);