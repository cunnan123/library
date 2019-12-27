var yaml = require('js-yaml');
var fs   = require('fs');
try {
  var doc = yaml.load(
    fs.readFileSync('./ymlTpJs.yml', 'utf8')
  );
  console.log(doc);
} catch (e) {
  console.log(e);
}

