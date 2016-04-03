"use strict";
var npm_config_group_1 = require('./npm-config-group');
var path = require('path');
var NpmPackageSelect = (function () {
    function NpmPackageSelect(pathToNpmConfig) {
        this.packages = require(path.join(process.cwd(), pathToNpmConfig));
    }
    NpmPackageSelect.prototype.groups = function () {
        var _this = this;
        return Object.keys(this.packages)
            .map(function (key) { return new npm_config_group_1.NpmConfigGroup(key, _this.packages[key]); });
    };
    return NpmPackageSelect;
}());
exports.NpmPackageSelect = NpmPackageSelect;
