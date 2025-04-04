const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; 
// process.env.PORT, so that it can dynamically use the port assigned by the hosting service
// otherwise in development phase uses 3000

// app.use(cors()); // Allow frontend requests
app.get('/', (req,res) => {
    res.redirect("");
})

app.get('/weather',(req,res) => {
    res.send("weather");
})

app.listen(port, ()=>{
    console.log(`server is on, port: ${port}`);
})
