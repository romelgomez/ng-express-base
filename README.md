# NgExpressBase

This angular project has a custom express server that change the "index" AKA "app.html" for handle the changes that need to be made before delivery the index.html to the client or crawlers and that are outside of angular scope. 

In the /src/server/routes.ts file, you can set your URLs to point to microservices, and change the index.html (app.html) base structure as your wish.

```
# if don't have node yet [Ubuntu Only]
source node-asap.sh


npm i
gulp dev-server
```
--- 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


npm i @types/del @types/gulp-nodemon @types/express @types/morgan @types/body-parser @types/method-override @types/helmet @types/express --save-dev