//modules 
const express = require('express');
require('dotenv/config')
const cors = require('cors');
//local modules
 const myRoute = require ('./src/routes/myRoutes');


 //server Initialization
const app = express();
const PORT =process.env.PORT;

//middleware
app.use(express.json());
app.use(cors());//enable Cors to all routes 



//routes

app.use ('/', myRoute);

//connection 

app.listen(PORT,(error) => {
        if (!error)
            console.log(`Server is Successfully Running, listing on port ${PORT}`)
        else
            console.log("Error occured , server can't start",error);
    }

);