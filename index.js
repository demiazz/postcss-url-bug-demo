var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var assets = require('postcss-assets');
var url = require('postcss-url');


function replacement(url) {
  console.log('URL: %s', url);

  return url;
}

const processor = postcss([
  assets({ loadPaths: [path.join(__dirname, 'static')] }),
  url({ url: replacement }),
]);

processor
  .process(fs.readFileSync(path.join(__dirname, 'index.css')).toString())
  .then((result) => fs.writeFileSync('result.css', result.css));
