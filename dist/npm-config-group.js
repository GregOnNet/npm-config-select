"use strict";
var npm_package_1 = require('./npm-package');
var NpmConfigGroup = (function () {
    function NpmConfigGroup(name, packagesRaw) {
        this.name = name;
        this.packages = packagesRaw.map(function (p) { return new npm_package_1.NpmPackage(p); });
    }
    return NpmConfigGroup;
}());
exports.NpmConfigGroup = NpmConfigGroup;
