const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public') ;
port = 3050;

app.use(express.static(publicPath));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'/views/home.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'/views/register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'/views/login.html')));
app.post('/register', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));
app.post('/login', (req,res) =>res.sendFile(path.join(__dirname,'/views/home.html')));



app.listen(3050, () => console.log(`server running at localhost:${port}`));
