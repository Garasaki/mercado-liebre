const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public') ;
port = 4000;

app.use(express.static(publicPath));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'/views/home.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'/views/register.html')));
app.get('/home', (req,res) => res.sendFile(path.join(__dirname,'/views/home.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'/views/login.html')));
app.post('/register', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));
app.post('/login', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));


app.listen(process.env.PORT || 4000, () => {console.log(`server running at localhost:${port}`)});