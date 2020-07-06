const express= require('express')
const routes = express.Router()


routes.get("/", function(req, res){
    return res.render('home')
})
routes.get("/colaboradores", function(req, res){
    return res.render('colaboradores')
})
routes.get("/moradores", function(req, res){
    return res.render('moradores')
})


module.exports= routes