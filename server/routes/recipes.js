/*
* All endpoints in this file should be prefixed with /recipes according to `server.js`
*/

const express = require("express");
const cors = require("cors");
const router = express.Router();

router.use(
    cors()
)

const { PrismaClient, RecordNotFound } = require("@prisma/client");

const prisma = new PrismaClient();

/*  
*   /recipes/all
*       GET: Gets all of the existing recipes, with pagination!     @CRUD:R    
*/

router.get(
    "/all",
    async (req, res) => {

        let recipesList;

        if(!req.query.search)
        {

            // If there is no search query then there is no need to add a where clause i guess

            recipesList = await prisma.recipe.findMany(
                {
                    skip: 25 * (req.query.page | 0),
                    take: 25
                }
            );

        }
        else // TODO(@l0gnes): https://github.com/l0gnes/dining-room/issues/13
        {

            recipesList = await prisma.recipe.findMany(
                {
                    skip: 25 * (req.query.page | 0),
                    take: 25,
                    where : {
                        name : {
                            contains : req.query.search,
                            mode: "insensitive"             // Removes case-sensitive searches
                        }
                    }
                }
            );

        }

        console.log("recipesList: " + recipesList);

        res.json(
            recipesList
        );

    }
);

/*
*   /recipes/:id
*       GET: Fetch a single recipe                                  @CRUD:R
*       PUT: Updates a specific recipe with new data                @CRUD:U
*       DELETE: You'll never guess what this does                   @CRUD:D
*/

// TODO(@l0gnes): Magic Tags as per issue https://github.com/l0gnes/dining-room/issues/13
// @l0gnes : Closes issue https://github.com/l0gnes/dining-room/issues/4

router.get(
    "/:id",
    async (req, res) => {

        let singleRecipe = await prisma.recipe.findUnique(
            {
                where: {
                    id: parseInt(req.params.id)
                }
            }
        );

        return res.json(
            singleRecipe
        );

    }
);

// @l0gnes : Closes issue https://github.com/l0gnes/dining-room/issues/2

router.delete(
    "/:id",
    async (req, res) => {

        try {

            let deletedRecipe = await prisma.recipe.delete(
                {
                    where: {
                        id: parseInt(req.params.id)
                    }
                }
            );

        } catch (RecordNotFound) {
            return res.send({});
        }

        return res.status(200).json({});

    }    
)

/*
*   /recipes
*       POST: Creates a new instance of recipe from a form
*/

// @l0gnes : Closes issue https://github.com/l0gnes/dining-room/issues/1

router.post(
    "",
    async (req, res, next) => {
        
        // TODO(@l0gnes) Maybe actually implement some way to verify the data before writing it to the database

        await prisma.recipe.create(
            {
                "data" :  req.body,
            },
        );

        return res.json(
            req.body
        );
    }
);

module.exports = router;