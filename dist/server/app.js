'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var compression = require("compression");
var morgan = require("morgan"); // log requests to the console (express4)
var path = require("path"); // normalize the paths
var bodyParser = require("body-parser"); // pull information from HTML POST (express4)
var methodOverride = require("method-override"); // simulate DELETE and PUT (express4)
var helmet = require("helmet"); // Security
var routes_1 = require("./routes"); // App Dependencies
var App = /** @class */ (function () {
    function App(NODE_ENV, PORT) {
        if (NODE_ENV === void 0) { NODE_ENV = 'development'; }
        if (PORT === void 0) { PORT = '9090'; }
        // Setting environment for development|production
        process.env.NODE_ENV = 'production'; // process.env.NODE_ENV || NODE_ENV;
        // Setting port number
        process.env.PORT = '8080'; // process.env.PORT || PORT;
        // Create our app w/ express
        this.app = express();
        this.app.use(helmet());
        if (NODE_ENV === 'development') {
            this.app.use(express.static(path.join(process.cwd(), 'dist/app')));
            // log every request to the console
            this.app.use(morgan('dev'));
        }
        else {
            this.app.use(express.static(path.join(process.cwd(), 'dist/app'), { immutable: true, maxAge: '7d' }));
            this.app.use(compression());
        }
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ 'extended': true }));
        // parse application/json
        this.app.use(bodyParser.json());
        // parse application/vnd.api+json as json
        this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.app.use(methodOverride());
        // Setting routes
        var routes = new routes_1.Routes();
        routes.paths(this.app);
        this.app.listen(process.env.PORT, function () {
            if (NODE_ENV === 'development') {
                console.log('The dev server is running in port localhost: ', 'http://localhost:' + process.env.PORT);
            }
            else {
                console.log('The production server is running in port:', process.env.PORT);
            }
        });
    }
    return App;
}());
exports.App = App;
