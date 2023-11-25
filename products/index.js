const express = require('express');

const app = express();
app.use(express.json());

app.use('/', (req,res,next)=>{
    return res.status(200).json({
        message: ' Hello from Product'
    })
})

app.listen(8003, ()=>{
    console.log('Product service running on port 8003');
})
