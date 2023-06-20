const express = require('express');

const app = express();

app.get('/api',(req,res)=>{
   res.end('hello');
});



app.listen(3000);