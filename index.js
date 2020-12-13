const express = require('express');
const bodyParser = require('body-parser');
const upload = require("express-fileupload")
var app = express();

app.use(bodyParser.json());
app.use(upload());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/' , (req, res) =>{
    res.json({message : 'Welcome to tms Applications'});
})


require("./router/routes.js")(app);
const PORT = process.env.PORT || 3001;
app.listen(PORT , ()=>{
    console.log('Server is running on Port ', PORT);
});
