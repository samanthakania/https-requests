// while https is built-in to Node, it is a module, so it must be required
var https = require('https');
var dataArray = [];

function getAndPrintHTML(options) {

 https.get(options, function(response, error){
  response.setEncoding('utf8');

  response.on('data', function(data){
    if (!error && response.statusCode === 200){
      dataArray.push(data);
  } else {
    console.log("not found");
  }

  });
   response.on('end', function() {
    console.log('Response stream complete.');
    dataArray.forEach(function(item){
      console.log(item);
    });
  });
});
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);
