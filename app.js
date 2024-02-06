const express = require("express");
const app = express();
const port = 8000;

app.get('/',(req,res) => {
    res.json([
        {
            id:1,
            name:'Deepesh',
            age:24
        },
        {
            id:2,
            name:'Rastogi',
            age:28
        },
    ])
});

app.get('/about',(req,res) => {
    res.status(200).send('<h2>hello friend this is about page</h2>');
});

app.get('/contact',(req,res) => {
    res.write("<h2>hello friend this is contact page</h2>");
    res.write("<h2>hello friend this is again contact page</h2>");
    res.send();
});


app.listen(port,()=>{
    console.log(`app is runninig on ${port} port`);
});