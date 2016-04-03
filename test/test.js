var NpmConfig = require('../dist/npm-config');
console.log(NpmConfig);
conf = new NpmConfig.NpmConfig('./npmconfig.json');
console.log(conf.groups());
