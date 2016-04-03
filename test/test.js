var NpmConfig = require('../index');
console.log(NpmConfig);
conf = new NpmConfig('./npmconfig.json');
console.log(conf.groups());
