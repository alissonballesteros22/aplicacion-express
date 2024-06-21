const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.render('index');
    res.send('Bienvenido al servidor Express!');
  });

  app.get('/productos', (req, res) => {
    const productos = [
      { nombre: 'Producto 1', precio: 100 },
      { nombre: 'Producto 2', precio: 200 }
    ];
    res.render('productos', { productos });
    res.json(productos);
  });
  
  app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
  });
  
  app.use(express.static('public'));