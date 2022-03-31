var http = require('http');

var servidor = http.createServer((req, res)=>
{

    var segmento = req.url;

    if(segmento == "/tecnologia"){
        res.end("<html><head><meta charset=UTF-8/></head><body>Tecnolgia de Informação!</body></html>");
    } else if(segmento == "/economia"){
        res.end("<html><head><meta charset=UTF-8/></head><body>Se liga na economia!</body></html>");
    } else if(segmento == "/esporte"){
        res.end("<html><head><meta charset=UTF-8/></head><body>Fique por dentro das noticias esportivas!</body></html>");
    } else if(segmento == "/educacao"){
        res.end("<html><head><meta charset=UTF-8/></head><body>Fundação INstituto Tecnológico de Osasco!</body></html>");
    }

    console.log("O Servidor está Rodando");
  
   
});


servidor.listen(3000);
console.log("O Servidor está Rodando. Aguardando sua solicitação");