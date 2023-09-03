const http = require("http");
const getCharById = require("./contollers/getCharById")
 

http.createServer((req, res)=>{
 
 const {url} = req; 
 console.log(url)  
 
 res.setHeader('Access-Control-Allow-Origin', '*');
  
  if( url.includes("/rickandmorty/character") ) {
   const id = Number(url.split("/").pop());
   console.log(id)
   getCharById(res, id);
   } else {
      res.writeHead(400, { "Content-type": "application/json" });
      res.end(JSON.stringify({ error: "Route not found" }));
    }
 

}).listen(3001, "localhost")