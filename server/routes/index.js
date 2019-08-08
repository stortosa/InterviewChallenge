const express = require('express');
const router  = express.Router();
const phones = require('../../client/phones.json')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//obteniendo los phones con GET
//mismo nombre allPhones que en la llamada axios de Phones.jsx
//para saber de donde sacarlos y ponerlos en la ruta
router.get('/allPhones', (req, res, next) =>{
  res.json(phones);
})

//obteniendo un phone con GET
//mismo nombre de la ruta que en Phones.jsx para que sean identicas
//en la ruta y no intente buscar en otro sitio
router.get('/singlePhone', (req, res, next) => {
  res.json(phones);
})

module.exports = router;
