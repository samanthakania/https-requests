var getHTML = require('../step-five');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


function printUppercase(html){
  console.log('Response stream complete.');
    html.forEach(function(item){
      console.log(`${item} \n`.toUpperCase());

});
}
getHTML(requestOptions, printUppercase);