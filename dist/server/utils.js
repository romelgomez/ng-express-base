"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var Q = require("q");
function readFile(fileName) {
    var deferred = Q.defer();
    fs.readFile(path.join(process.cwd(), '/dist/app', fileName), function (error, file) {
        if (error) {
            deferred.reject(error);
        }
        else {
            deferred.resolve(file);
        }
    });
    return deferred.promise;
}
exports.readFile = readFile;
