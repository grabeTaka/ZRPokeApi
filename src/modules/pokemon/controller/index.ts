/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'


class PokemonController {
    public listByName(request: Request, response: Response) {
        return []
    }
}

const pokemonController = new PokemonController()
export default pokemonController
