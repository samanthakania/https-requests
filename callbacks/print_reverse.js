var getHTML = require('../step-five');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(html){
  console.log('Response stream complete.');
    html.forEach(function(item){
      console.log(item.split("").reverse().join(""));

});
}
getHTML(requestOptions, printReverse);