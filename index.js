const express = require('express');
const path = require('path')
const app = express();
//const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
//app.set('views' , path.resolve(__dirname, "./src/views"));

//app.use (express.static('public'));
app.use(express.static(path.resolve(__dirname,"public")));

//app.use(methodOverride('_method')); // para usar PUT y DELETE

app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', authRoutes);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/ping', (req,res) => res.send('pong'));

app.listen(4000, ()=> console.log(' Servidor corriendo en  http://localhost:4000'));
