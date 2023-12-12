# ZRP API TEST

Technical test for selection process at ZRP. The backend works as a middleware that makes requests to the pokemon listing api.

## Demo

The live demo may take a few minutes if the server is disabled due to inactivity, more details: <a href="https://render.com/docs/free">link</a>
<h4><a href="https://sp-ui.onrender.com/"> Live Demo API</a></h4>

## Installation and initialization with Docker-Compose

Stay in the root directory of this repository and type the command below to initialize the backend:

```bash 
  docker-compose build && docker-compose up
```
The application will run on port 3000

## Installation and initialization without Docker-Compose

```bash 
  npm i && npm run dev
```
The application will run on port 3000

## Tests

To run tests please run follow command:

```bash 
  npm run test
```


## Documentation

If you run the project in your local machine, check de documentation in: http://localhost:3000/api-docs

You can see the documentation on: TODO

TODO PRINT

## Future improvements

- Add Cypress to end-to-end tests.
- Add Cucumber js to BDD.
