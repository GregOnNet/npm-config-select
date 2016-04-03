"use strict";
var NpmPackage = (function () {
    function NpmPackage(candidate) {
        var _this = this;
        this.name = Object.keys(candidate)[0];
        this.files = candidate[this.name]
            .files
            .map(function (f) { return ("./node_modules/" + _this.name + "/" + f); });
    }
    return NpmPackage;
}());
exports.NpmPackage = NpmPackage;
