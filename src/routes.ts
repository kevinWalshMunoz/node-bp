import { Router } from "express";
import { PokemonController } from "./controllers/pokemon.controller";

const pokemonRouter = Router();
const pokemonController = new PokemonController();

/**
 * @openapi
 * /api/pokemon:
 *   get:
 *     description: Get all pokemons
 *     responses:
 *       200:
 *         description: Returns a list of Pokemons.
 */
pokemonRouter.get("/pokemon", pokemonController.retrieve);

/**
 * @swagger
 * /api/pokemon:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: pokemon
 *         description: The pokemon to create.
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 *     responses:
 *     200:
*/
pokemonRouter.post("/pokemon", pokemonController.create);

/**
 * @swagger
 * /api/pokemon/{id}:
 *   delete:
 *     summary: Delete a JSONPlaceholder user.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The id of the pokemon to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *     200:
*/
pokemonRouter.delete("/pokemon/:id", pokemonController.delete);

/**
 * @swagger
 * /api/pokemon/{id}:
 *   put:
 *     summary: Update a JSONPlaceholder user.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The id of the pokemon to update.
 *         required: true
 *         schema:
 *           type: string
 *       - in: body
 *         name: pokemon
 *         description: The pokemon to update.
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 *     responses:
 *     200:
*/
pokemonRouter.put("/pokemon/:id", pokemonController.update);

export default pokemonRouter;
