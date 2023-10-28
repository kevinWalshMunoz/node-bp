import { Router } from 'express';
import { PokemonController } from './controllers/pokemon.controller';

const pokemonRouter = Router();
const pokemonController = new PokemonController();

pokemonRouter.get('/pokemon', pokemonController.retrieve);
pokemonRouter.post('/pokemon', pokemonController.create);
pokemonRouter.delete('/pokemon/:id', pokemonController.delete);
pokemonRouter.put('/pokemon/:id', pokemonController.update);

export default pokemonRouter;