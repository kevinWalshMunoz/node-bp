import { Request, Response } from "express";
import { PokemonService } from "../services/pokemon.service";

const pokemonService = new PokemonService();

export class PokemonController {
  retrieve(req: Request, res: Response): void {
    const pokemon = pokemonService.retrieve();
    res.json(pokemon);
  }

  create(req: Request, res: Response): void {
    const pokemon = pokemonService.create(req.body);
    res.json(pokemon);
  }

  delete(req: Request, res: Response): void {
    const pokemon = pokemonService.delete(req.params.id);
    res.json(pokemon);
  }

  update(req: Request, res: Response): void {
    const pokemon = pokemonService.update(req.params.id, req.body);
    res.json(pokemon);
  }
}
