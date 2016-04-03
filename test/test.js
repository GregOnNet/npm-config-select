var NpmPackageSelect = require('../index');
conf = new NpmPackageSelect('./npmconfig.json');

console.log(NpmPackageSelect);
console.log(conf.groups());
