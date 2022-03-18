const express = require('express');
const router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get(
    "/ping",
    async (req, res) => {
        res.send("Hello World!");
    }
);

router.get(
    "/test2",
    async (req, res) => {
        
        
        await prisma.recipe.create(
            {
                data: {
                    "name" : "Swag Sandwich",
                    "description" : "The best sandwich you will ever lay your eyes on",
                    "recipe" : "bread and swag. that about it",
                    "tags" : ["breakfast", "swag", "sandwich"]
                }
            }
        );

        res.send("Created a demo sandwich");

    }
)

router.get(
    "/test3",
    async (req, res) => {

        let result = await prisma.recipe.findMany();
        res.json(
            result
        );

    }
)

module.exports = router;