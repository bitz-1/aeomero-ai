const {Router} = require('express');
const passport = require('passport');
// local modules
const myController = require('../controllers/myController');
const CLIENT_URL = 'http://localhost:3000/'
const router = Router();

//request 
router.get('/api',myController.method1);
router.post('/api',myController.method2);

router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        success:false,
        message:"failure",
    })
});
router.get('/login/success',(req,res)=>{
   if (req.user) {
    res.status(200).json({
        success:true,
        message:"successfull",
        user: req.user,
      })
   }
})

router.get('/logout', (req,res)=>{
    req.logOut();
    res.redirect(CLIENT_URL);
})


router.get('/google',passport.authenticate("google",{scope:["profile"]}));
router.get('/google/callback',passport.authenticate("google",{
    successRedirect:CLIENT_URL,
    failureRedirect:"/login/failed",
}))

module.exports = router;