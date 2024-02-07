const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const staticPath = path.join(__dirname,'../public');
// build in middleware
app.use(express.static(staticPath));
app.listen(port,()=>{
    console.log(`app is runninig on ${port} port`);
});