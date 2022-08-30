
const express = require('express');
const app = express();
const port = 3000;
const split = require('./split.js');
const evenAndOdd = require('./evenAndOdd.js');

const fs = require('fs');

app.get('/', function(req, res){
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
})

app.get('/split/:number', function(req, res){
    res.status(200).send(split.my_split(req.params.number).toString());
})

app.get('/evenAndOdd/isEven/:number', function(req, res){
  res.status(200).send(evenAndOdd.isEven(req.params.number));
})

exports.stop = function(){
    server.close();
}
const server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});