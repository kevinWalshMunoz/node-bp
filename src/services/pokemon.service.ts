import { Pokemon } from "../common/types";

export class PokemonService {
  private pokemonData: Pokemon[] = [
    { id: "1", name: "Pikachu" },
    { id: "2", name: "Charmander" },
  ];

  retrieve(): Pokemon[] {
    return this.pokemonData;
  }

  create(pokemon: Pokemon): Pokemon {
    this.pokemonData.push(pokemon);
    return pokemon;
  }

  delete(id: string): Pokemon | undefined {
    const pokemon = this.pokemonData.find((pokemon) => pokemon.id === id);
    this.pokemonData = this.pokemonData.filter((pokemon) => pokemon.id !== id);
    return pokemon;
  }

  update(id: string, pokemon: Pokemon): Pokemon {
    const index = this.pokemonData.findIndex((pokemon) => pokemon.id === id);
    this.pokemonData[index] = pokemon;
    return pokemon;
  }
}
