const express = require("express");
var router = express.Router();
router.get("/",function(req,res){
 res.send("Pantalla principal de administracion de productos");
});

router.get("/listar",function(res, res){
 res.send("listar productos");
})

router.post("/agregar",function(res, res){
 res.send("agregar productos");
});


router.post("/modificar/:id",function(req,res){
 res.send("modificar producto "+req.params.id);
});

module.exports = router;