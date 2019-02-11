var getHTML = require('./step-five');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log('Response stream complete.');
    dataArray.forEach(function(item){
      console.log(item);
});
}

getHTML(requestOptions, printHTML);