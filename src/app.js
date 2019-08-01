const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
const app = express();

const publicDirPath = path.join(__dirname,'../public');
app.set('view engine', 'hbs'); //handlebar set up with express
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirPath));

app.get('/products', (req, res) => {

    res.render('index', {
        name: 'template',
        author: 'koushik',
        product: req.query.product
    });
});

/*app.get('*', (req, res) => {
    res.render('404');
});*/
app.get('/abaout', (req,res) => {
    res.send([{
        name: 'Andrew'
    },
    {
        name: 'John'
    }]);
});

app.listen(3000, () => {
    console.log('server started');
});