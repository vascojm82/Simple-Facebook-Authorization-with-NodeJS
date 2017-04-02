let express = require('express');
let app = new express();
let port = 7777;
let route = require('./api/secure-route.js');

app.use(express.static('./app'));
route(app);

app.listen(port, () =>{
  console.log(`Listening on port: ${port}`);
})
