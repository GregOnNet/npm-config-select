"use strict";
var npm_config_group_1 = require('./npm-config-group');
var NpmConfig = (function () {
    function NpmConfig(pathToNpmConfig) {
        this.packages = require(pathToNpmConfig);
    }
    NpmConfig.prototype.groups = function () {
        var _this = this;
        return Object.keys(this.packages)
            .map(function (key) { return new npm_config_group_1.NpmConfigGroup(key, _this.packages[key]); });
    };
    return NpmConfig;
}());
exports.NpmConfig = NpmConfig;
