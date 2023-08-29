const http = require("http");
const obj = require ("./utils/data")


http.createServer((req, res)=>{
 
 const {url} = req; 
 console.log(url)  
 
 res.setHeader('Access-Control-Allow-Origin', '*');
  
  if( url.includes("/rickandmorty/character") ) {
   const num = url.slice(-1);
   console.log(num)
   const id = parseInt(num);
   console.log(id)
   const character = obj.find( char => char.id === id );
   console.log(character)
   res.writeHead(200,{"Content-Type":"aplication/json" });
   res.end(JSON.stringify(character));
 }

}).listen(3001, "localhost")