const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res){
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicalções/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title:"I",
            message: "nstall ejs"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML usando JS"
    res.render("pages/index", {
        qualities: items,
        subtitle : subtitle,
    });
})

app.get('/sobre', function (req, res){
    res.render('pages/about');
})

app.listen(8080);
console.log('Servidor funcionando')