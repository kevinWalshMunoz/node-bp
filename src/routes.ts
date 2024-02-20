import { Router } from "express";

import { PokemonController } from "./controllers/pokemon.controller";
import  { Pokemon } from "./common/types";

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
pokemonRouter.get("/pokemon", function (req, res) {
    res.json(pokemonController.retrieve());
});

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
pokemonRouter.post("/pokemon", function (req, res) {
    const newPokemon: Pokemon = req.body;
    res.json(pokemonController.create(newPokemon));
});

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
pokemonRouter.delete("/pokemon/:id", function (req, res) {
    const id: string = req.params.id;
    res.json(pokemonController.delete(id));
});

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
pokemonRouter.put("/pokemon/:id", function (req, res) {
    const id: string = req.params.id;
    const newPokemon: Pokemon = req.body;
    res.json(pokemonController.update(id, newPokemon));
});

export default pokemonRouter;
