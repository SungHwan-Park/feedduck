# Feed-Duck Project

This project uses the following frameworks.

1. [Nx](https://nx.dev/)
1. [NestJS](https://nestjs.com/)
1. [React](https://reactjs.org/)
1. [Material-UI](https://material-ui.com/)
1. [Formik](https://formik.org/)

## How to run

### Prepration

The project was tested with Node v14.17.3.

1. Install Nx  
   `npm install -g nx`

1. Install dependencies.  
   `npm install`

### Run API Server

`nx run api:serve`

### Run frontend app

`nx run app:serve`

### Run unit tests

`nx run api:test`

### Run e2e tests

`nx run app-e2e:e2e`
