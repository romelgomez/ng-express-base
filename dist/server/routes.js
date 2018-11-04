'use strict';
import * as Q from 'q';
import * as handlebars from 'handlebars';
import { readFile } from './utils';
var Routes = /** @class */ (function () {
    function Routes() {
        this.metaTags = {
            'title': 'ng-express-base project'
        };
    }
    Routes.prototype.defaultRoute = function (req, res) {
        readFile('index.html')
            .then(function (file) {
            var template = handlebars.compile(file.toString());
            return Q.when(template(this.metaTags));
        })
            .then(function (html) {
            res.send(html);
        }, function (error) {
            throw error;
        });
    };
    Routes.prototype.paths = function (app) {
        var _this = this;
        app.get('/', function (req, res) {
            _this.defaultRoute(req, res);
        });
        app.get('*', function (req, res) {
            _this.defaultRoute(req, res);
        });
    };
    return Routes;
}());
export { Routes };
