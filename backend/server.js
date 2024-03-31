//modules 
const express = require('express');
require('dotenv/config')
const cors = require('cors');
const cookieSession = require('cookie-session');
const auth = require('./src/auth/passport');
//local modules
const myRoute = require ('./src/routes/myRoutes');
const passport = require('passport');


 //server Initialization
const app = express();
const PORT =process.env.PORT;

//middleware
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials:true,
        })
    );//enable Cors to all routes 
app.use(cookieSession({name:"session",keys:['BitzTechDev'], maxAge: 24 * 60 * 60 * 100}));
app.use(passport.initialize());
app.use(passport.session());





//routes

app.use ('/auth', myRoute);

//connection 

app.listen(PORT,(error) => {
        if (!error)
            console.log(`Server is Successfully Running, listing on port ${PORT}`)
        else
            console.log("Error occured , server can't start",error);
    }

);