import { Request, Response } from 'express';
import { PokemonService } from '../services/pokemon.service';

const pokemonService = new PokemonService();

export class PokemonController {
    retrieve(req: Request, res: Response): void {
        const users = pokemonService.retrieve();
        res.json(users);
    }

    create(req: Request, res: Response): void {
        const pokemon = pokemonService.create(req.body);
        res.json(pokemon);
    }

    delete(req: Request, res: Response): void {
        const pokemon = pokemonService.delete(parseInt(req.params.id));
        res.json(pokemon);
    }

    update(req: Request, res: Response): void {
        const pokemon = pokemonService.update(parseInt(req.params.id), req.body);
        res.json(pokemon);
    }
}