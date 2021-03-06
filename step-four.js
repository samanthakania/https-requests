var https = require('https');
var dataArray = [];

function getHTML(options, callback) {

 https.get(options, function(response, error){
  response.setEncoding('utf8');

  response.on('data', function(data){
    if (!error && response.statusCode === 200){
      dataArray.push(data);
  } else {
    console.log("not found");
  }

  });
   response.on('end', callback);
});
}

function printHTML (html) {
  console.log('Response stream complete.');
    dataArray.forEach(function(item){
      console.log(item);
});
  }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);