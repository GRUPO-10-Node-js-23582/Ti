const express = require('express');
const path = require('path')
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use (express.static('public'));

app.use('/', mainRoutes);
app.use('/pages/shop', shopRoutes);

app.get('/ping', (req,res) => res.send('pong'));

app.listen(4000, ()=> console.log(' Servidor corriendo en  http://localhost:4000'));
