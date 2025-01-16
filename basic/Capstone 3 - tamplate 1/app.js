const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let posts = []; //Save post on memory

//Homepage
app.get('/',(req, res) => {
    res.render('index', {posts});
});

//Create new post page
app.get('/new', (req, res) => {
    res.render('new');
});

//Add new post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

//Edit post page
app.get('/edit/:index', (req, res) => {
    const { index } = req.params;
    const post = posts[index];
    res.render('edit', { post, index});
});

//Update post
app.post('/edit/:index', (req, res) =>{
    const { index } = req.params;
    const { title, content } = req.body;
    posts[index] = { title, content };
    res.redirect('/');
});

//delete post
app.post('/delete/:index', (req, res) => {
    const { index } = req.params;
    posts.splice(index, 1);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
});