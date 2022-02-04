<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/ng-heroes-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/ng-heroes-app/actions/workflows/codeql-analysis.yml)
[![Deploy to Heroku](https://github.com/webceyhan/ng-heroes-app/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/ng-heroes-app/actions/workflows/heroku.yml)

<!-- HEADER ///////////////////////////////////////////////////////////// -->

# Angular Tour of Heroes Application

This is a sample application based on the famous tutorial `Tour of Heroes` from the official Angular website, which covers many aspects of the Angular Framework.

[View Demo](https://webceyhan-ng-heroes-app.herokuapp.com) |
[Report Issue](https://github.com/webceyhan/ng-heroes-app/issues) |
[Request Feature](https://github.com/webceyhan/ng-heroes-app/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- BUILT WITH ////////////////////////////////////////////////////////// -->

## Built With

-   [Node.js](https://nodejs.dev/)
-   [Express](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org)
-   [Angular](https://angular.io/)
-   [Bootstrap](https://getbootstrap.com)

<br>
<!-- PREREQUISITES /////////////////////////////////////////////////////// -->

## Prerequisites

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/) + [Angular Essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/ng-heroes-app.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd <project folder>
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm start           # serve the app for production
npm run serve       # serve the app for development
npm run test        # run the test suits
npm run build       # build for production
```

> Take a look at the other scripts in [`package.json`](https://github.com/webceyhan/ng-heroes-app/blob/main/package.json)

<br>
<!-- DEVELOPMENT //////////////////// -->

## Development

Run `ng serve` for a dev server.
Navigate to `http://localhost:4200`.
The app will automatically reload if you change any of the source files.

<br>
<!-- TESTING //////////////////////// -->

## Testing

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

<br>
<!-- BUILDING /////////////////////// -->

## Building

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.
Use the `--prod` flag for a production build.

<br>
<!-- DEPLOYMENT ///////////////////// -->

## Deployment (Heroku)

A built-in Github Action will automatically deploy the project to Heroku on every push.

1. Create an [Heroku](https://www.heroku.com/home) account.

2. Install the heroku-cli as shown in the [guide](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

3. Create a new Heroku app inside the project folder to bind it.
    ```sh
    heroku create
    ```

    > This will create a new application on Heroku server and bind it to your project by adding a remote `heroku` upstream to your git repository.

4. Setup the repository secrets on your github as shown below:
    ```yaml
    name: Deploy to Heroku
    on:
        push:
            branches:
                - main
    jobs:
        build:
            runs-on: ubuntu-latest
            steps:
                - uses: actions/checkout@v2
                - uses: akhileshns/heroku-deploy@v3.12.12
                with:
                    heroku_api_key: ${{secrets.HEROKU_API_KEY}}
                    heroku_app_name: ${{secrets.HEROKU_APP_NAME}}
                    heroku_email: ${{secrets.HEROKU_EMAIL}}
    ```

<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Heroku](https://www.heroku.com)
-   [GitHub Actions](https://docs.github.com/en/actions)
