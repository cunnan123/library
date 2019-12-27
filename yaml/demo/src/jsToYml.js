var yaml = require('js-yaml');
var fs   = require('fs');

var obj = {
  fn: function () { return 1 },
  reg: /test/
};

try {
  fs.writeFileSync(
    './jsToYml.yml',
    yaml.dump(obj),
    'utf8'
  );
} catch (e) {
  console.log(e);
}