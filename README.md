

# MeliFrontendTest

This project was generated using [Nx](https://nx.dev).

## Development server

Run `nx serve frontend` for the frontend app dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `nx serve api` to start the backend for frontend API. The server will be listening at http://localhost:3333/api.

## Build

Run `nx build frontend` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test frontend` and/or `nx test api` to execute the unit tests via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `nx e2e frontend-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Important: In order to run the e2e test it's required that the backend for frontend is up and running, with `nx serve api`.
