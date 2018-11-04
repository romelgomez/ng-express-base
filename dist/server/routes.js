'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var handlebars = require("handlebars");
var utils_1 = require("./utils");
var Routes = /** @class */ (function () {
    function Routes() {
        this.metaTags = {
            'title': 'ng-express-base project'
        };
    }
    Routes.prototype.defaultRoute = function (req, res) {
        var metaTags = this.metaTags;
        utils_1.readFile('app.html')
            .then(function (file) {
            var template = handlebars.compile(file.toString());
            var html_compiled = template(metaTags);
            res.send(html_compiled);
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
exports.Routes = Routes;
