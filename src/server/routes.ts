'use strict';
import * as Q from 'q';
import * as path from 'path';
import * as express from 'express';
import * as handlebars from 'handlebars';
import { readFile } from './utils';

export class Routes {

  public metaTags = {
    'title': 'ng-express-base project'
  };

  defaultRoute (req: express.Request, res: express.Response) {
    readFile('index.html')
      .then(function(file) {
        const template = handlebars.compile(file.toString());
        return Q.when(template( this.metaTags ));
      })
      .then(function(html) {
        res.send(html);
      }, function(error) {
        throw error;
      });
  }

  paths(app: express.Application) {

    app.get('/', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

  }

}
