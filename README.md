# ZRP API TEST

Technical test for selection process at ZRP. The backend works as a middleware that makes requests to the pokemon listing api.

Node.js, Typescript, Jest, Openapi, Docker and Docker Compose were used to develop the backend.

## Demo

The live demo may take a few minutes if the server is disabled due to inactivity, more details: <a href="https://render.com/docs/free">link</a>
<h4><a href="https://zrpokeapi.onrender.com/"> Live Demo API</a></h4>

## .env file
To make things easier, the .env file will already be included when you clone the project.

Containing only a single environment variable called POKEMON_API_URL


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

![image](https://github.com/grabeTaka/ZRPokeApi/assets/128423774/243f7c37-683f-41a1-a7dc-b36b6bb30909)

## Tests

To run tests please run follow command:

```bash 
  npm run test
```

![image](https://github.com/grabeTaka/ZRPokeApi/assets/128423774/4972ca21-acae-46f0-a49f-da6c468081fa)

## Documentation

If you run the project in your local machine, check de documentation in: http://localhost:3000/api-docs

You can see the documentation on: <a href="https://zrpokeapi.onrender.com/api-docs/#get-/pokemons/-pokemon_name"> [LINK](https://zrpokeapi.onrender.com/api-docs/#get-/pokemons/-pokemon_name) </a>


![image](https://github.com/grabeTaka/ZRPokeApi/assets/128423774/57d6f48c-2b07-4ec2-a0ce-2818051f680e)


## Future improvements

- Add Cypress to end-to-end tests.
- Add Cucumber js to BDD.
