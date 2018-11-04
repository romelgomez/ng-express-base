'use strict';
import * as express from 'express';
import * as compression from 'compression';
import * as morgan from 'morgan'; // log requests to the console (express4)
import * as path from 'path'; // normalize the paths
import * as bodyParser from 'body-parser'; // pull information from HTML POST (express4)
import * as methodOverride from 'method-override'; // simulate DELETE and PUT (express4)
import * as helmet from 'helmet'; // Security
import { Routes } from './routes'; // App Dependencies

export class App {

  protected app: express.Application;

  constructor( NODE_ENV: string = 'development', PORT: string = '9090') {

    // Setting environment for development|production
    process.env.NODE_ENV = 'production'; // process.env.NODE_ENV || NODE_ENV;

    // Setting port number
    process.env.PORT = '8080'; // process.env.PORT || PORT;

    // Create our app w/ express
    this.app = express();
    this.app.use( helmet() );

    if ( NODE_ENV === 'development' ) {
      this.app.use( express.static( path.join(process.cwd(), 'dist/app' )));
      // log every request to the console
      this.app.use(morgan('dev'));
    } else {
      this.app.use( express.static(path.join(process.cwd(), 'dist/app' ), { immutable : true, maxAge: '7d' }));
      this.app.use(compression());
    }

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({'extended': true}));

    // parse application/json
    this.app.use(bodyParser.json());

    // parse application/vnd.api+json as json
    this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    this.app.use(methodOverride());

    // Setting routes
    const routes = new Routes();
    routes.paths(this.app);

    this.app.listen(process.env.PORT, function() {
      if ( NODE_ENV === 'development' ) {
        console.log('The dev server is running in port localhost: ', 'http://localhost:' + process.env.PORT);
      } else {
        console.log('The production server is running in port:', process.env.PORT);
      }
    });

  }

}
