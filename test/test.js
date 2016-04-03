var NpmConfig = require('../index');
conf = new NpmConfig('./npmconfig.json');

console.log(NpmConfig);
console.log(conf.groups());
