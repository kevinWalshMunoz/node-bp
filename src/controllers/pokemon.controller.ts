import { PokemonService } from "../services/pokemon.service";
import { Pokemon } from "../common/types";

const pokemonService = new PokemonService();

export class PokemonController {
  retrieve(): Pokemon[] {
    const pokemon = pokemonService.retrieve();
    return pokemon;
  }

  create(newPokemon: Pokemon): Pokemon {
    const pokemon = pokemonService.create(newPokemon);
    return pokemon;
  }

  delete(id: string): Pokemon | undefined {
    const pokemon = pokemonService.delete(id);
    return pokemon;
  }

  update(id: string, newPokemon: Pokemon): Pokemon {
    const pokemon = pokemonService.update(id, newPokemon);
    return pokemon;
  }
}
