import * as path from 'path';
import * as fs from 'fs';
import * as Q from 'q';
export function readFile(fileName) {
    var deferred = Q.defer();
    fs.readFile(path.join(process.cwd(), '/dist', fileName), function (error, file) {
        if (error) {
            deferred.reject(error);
        }
        else {
            deferred.resolve(file);
        }
    });
    return deferred.promise;
}
