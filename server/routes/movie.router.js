const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

router.get('/:id', (req, res) => {
    const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, "genres"."name" AS "genre" FROM "movies" LEFT JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id" LEFT JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id" WHERE "movies"."id" = $1;`
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

router.put('/', (req, res)=>{
    let movieToUpdate = req.body;
    const queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`
    pool.query(queryText, [movieToUpdate.title, movieToUpdate.description, movieToUpdate.id])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;