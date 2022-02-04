[![CodeQL](https://github.com/webceyhan/ng-heroes/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/ng-heroes/actions/workflows/codeql-analysis.yml)
[![Deploy to Heroku](https://github.com/webceyhan/ng-heroes/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/ng-heroes/actions/workflows/heroku.yml)

# Tour of Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.  
Upgraded to version 13.0.0 later.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy to Heroku

In terminal, get inside your project folder by `cd <project-root>`. 
Bind existing project folder with heroku; `heroku create` which will create an git remote-url called 'heroku'

Below Github action will to deploy to Heroku on every push to master.
```
name: Deploy to Heroku

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.12.12 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
          heroku_email: ${{secrets.HEROKU_EMAIL}}
```

After deploye to Heroku server, `npm run build` in package.json, will be run automatically and create /dist/<project-name> folder. 

> Make sure to add expressJs to dependencies!

Once the build process was completed, Heroku will execute  `npm start` automatically which refers to `"start": "node server.js"` 
which will serve the static contents under /dist/<project-name> folder.

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
