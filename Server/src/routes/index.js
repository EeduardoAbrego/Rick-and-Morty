const express = require("express");
const router = express.Router();

const getCharById = require("../contollers/getCharById")
const {postFav , deleteFav} = require("../contollers/handleFavorites")
const login = require("../contollers/login")

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
});

router.get("/login", (req, res) =>{
    login(req, res);
});

router.post( "/fav", (req, res) => {
    postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res);
});

module.exports = router;