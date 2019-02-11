var getHTML = require('../step-five');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printLowercase(html){
  console.log('Response stream complete.');
    html.forEach(function(item){
      console.log(`${item} \n`.toLowerCase());

});
}
getHTML(requestOptions, printLowercase);