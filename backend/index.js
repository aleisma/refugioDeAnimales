const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8090;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var mascotas = [
    {id:1,nombre:"pepe trueno",tipo:"gato",edad:3, descripcion:"gruñon y juguetón", foto:"https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg"},
    {id:2,nombre:"chispita",tipo:"perro", edad: 5, descripcion:"se comporta muy bien", foto:"https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg"},
    {id:3,nombre:"rafael",tipo:"tortuga", edad: 2, descripcion:"le encanta la lechuga y pasear por la casa (si, también le gusta la pizza)", foto:"https://cdn.pixabay.com/photo/2016/11/22/19/26/amphibian-1850190__340.jpg"},
    {id:4,nombre:"yogui",tipo:"perro", edad: 1, descripcion:"super activo, le gusta correr mucho", foto:"https://cdn.pixabay.com/photo/2015/11/03/12/58/dog-1020790_960_720.jpg"},
    {id:5,nombre:"piolin",tipo:"guacamaya", edad: 3, descripcion:"muy colorida, come frutas y ¡habla!", foto:"https://cdn.pixabay.com/photo/2019/04/16/21/25/guacamaya-4132823__340.jpg"}
];

app.post('/mascotas', function (req, res) {
    let mascota = req.body;
    let ids = mascotas.map(elt => elt.id);

    if (mascotas.length == 0) {
      mascota.id = 1
  } else {
      mascota.id = Math.max(...ids) + 1;
  }
    mascotas.push(mascota);
    res.status(201).json(mascota);
});

app.get('/mascotas', function (req, res) {
    res.status(200).json(mascotas);
});

app.get('/mascotas/:id', function (req, res) {
    res.status(200).json(mascotas.find(elt => elt.id == req.params.id));
});

app.put('/mascotas', function (req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.body.id);
    if(index >= 0)
        mascotas[index] = req.body;
    res.status(200).send();
});

app.delete('/mascotas/:id', function (req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.params.id);
    if(index >= 0)
        mascotas.splice(index,1);
    res.status(200).send();
});

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto "+port);
});



