export class PokemonService {

    private pokemonData: any[] = [{ id: 1, name: 'Pikachu' }, { id: 2, name: 'Charmander' }];

    retrieve(): any[] {
        return this.pokemonData;
    }

    create(pokemon: any): any {
        this.pokemonData.push(pokemon);
        return pokemon;
    }

    delete(id: number): any {
        const pokemon = this.pokemonData.find(pokemon => pokemon.id === id);
        this.pokemonData = this.pokemonData.filter(pokemon => pokemon.id !== id);
        return pokemon;
    }

    update(id: number, pokemon: any): any {
        const index = this.pokemonData.findIndex(pokemon => pokemon.id === id);
        this.pokemonData[index] = pokemon;
        return pokemon;
    }
}
