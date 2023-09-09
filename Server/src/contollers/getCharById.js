const axios = require ("axios");
const express = require("express")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {

    const {id} = req.params;
    axios.get(URL + id)
    .then(({data}) => {
        const {name, gender, species, origin = origin.name, image, status } = data
        const character = {name, gender, species, origin, id, image, status }
        
        if(name){
          res.status(200).json(character);
        } else {
            res.status(400).send("Not fount")
        }
    })
    .catch((error) => {
        res.status(500).send(error.message)
    });
}

module.exports = getCharById;













/*const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        console.log(data)
        const {name, gender, species, origin = origin.name, image, status } = data
        const character = {name, gender, species, origin, id, image, status }
   
    res.writeHead(200,{"Content-Type":"aplication/json" });
    res.end(JSON.stringify(character));
 })
 .catch((reason) => {
    res.writeHead(500, {'Content-Type': "text/plain"})
    res.end(reason.message)
})
};

module.exports = getCharById; */
    

