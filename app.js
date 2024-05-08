// previamente instalar express body-parser consolidate handlebars
//npm install express body-parser consolidate handlebars
//esta app se ejecuta con node app.js o nodemon app.js


const express = require("express");
const app = express();
const engine = require('consolidate');
app.engine("hbs",engine.handlebars); //.hbs extension
app.set("views","./views");
app.set("view engine","hbs");

var partials = function() {
    return {header: '_header', footer: '_footer'};
}


app.get('/',function(req,res){
    res.send('<h1>Servidor Ejecutandose</h1>');
});


app.get('/home',function(req,res){
    var partials = {header: '_header', sidebar: '_sidebar'};

    personas = [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ]

    res.render('home',{partials:partials,personas:personas});
})

app.get('/datos',function(req,res){

    person = {
        firstname: "Bill",
        lastname: "Gates",
      };

      personas = [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ]

      

    res.render('plantilla01',{nombre:'Juan Gonzales',person:person,personas:personas});
});


//modulo router con productos

var productosController = require("./controllers/productos.js");
app.use("/productos",productosController);






app.listen(3000,function(){
    console.log("servidor ejecutando");
});


