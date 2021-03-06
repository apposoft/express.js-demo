const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello world");
});

app.get('/api/courses', (req,res)=>{
    res.send(["Ram","Mohan","Shyam"])
});

app.get('/api/courses/:id', (req,res)=>{
    res.send(req.params.id);
});

const port =process.env.PORT || 4000 ;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));