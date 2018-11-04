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
    const metaTags = this.metaTags;
    readFile('app.html')
      .then(function(file) {
        const template = handlebars.compile(file.toString());
        const html_compiled = template(metaTags);
        res.send(html_compiled);
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
