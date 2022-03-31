var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia.ejs');
    console.log("Tecnologia é dahora hein!");
});

app.get('/economia', function(req, res){
    res.render('secao/economia.ejs');
    console.log("Economia é importante saber!");
});

app.get('/esporte', function(req, res){
    res.render('secao/esporte.ejs');
    console.log("Esporte e saúde!");
});

app.get('/educacao', function(req, res){
    res.render('secao/educacao.ejs');
    console.log("Educacao para todos!");
});


/*
app.get("/tecnologia", function(req, res){
        res.end("<html><head><meta charset=UTF-8 /></head><body>Tecnologia da Informação</body></html>");
        console.log("Tecnologia é dahora hein!");
});
app.get("/economia", function(req, res){
    res.end("<html><head><meta charset=UTF-8 /></head><body>Se liga na economia</body></html>");
    console.log("Economia é importante entender!");
});
app.get("/esporte", function(req, res){
    res.end("<html><head><meta charset=UTF-8 /></head><body>Fique por dentro das notícias esportivas</body></html>");
    console.log("Só no esporte");
});
app.get("/educacao", function(req, res){
    res.end("<html><head><meta charset=UTF-8 /></head><body>Fundacao Instituto Tecnologico de Osasco</body></html>");
    console.log("Educação para todos!");
});
*/

app.listen(3000, function() {
console.log("Servidor rodando com Express. Estou esperando a sua solicitacao!");
});