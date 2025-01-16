const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

let posts = []; // In-memory storage (replace with a database)

router.get('/', (req, res) => {
    // Check if posts array is defined and has elements
    if (posts && posts.length > 0) {
      res.render('index', { title: 'Home Page', posts });
    } else {
      // Handle the case where there are no posts
      res.render('index', { title: 'Home Page', posts: [], message: 'No posts found.' }); 
    }
  });

router.post('/posts', (req, res) => {
    const newPost = {
    id: uuidv4(),
    title: req.body.title,
    content: req.body.content
  };
    posts.push(newPost);
    res.redirect('/'); 
});

// ... (other routes: edit, delete)
// Edit route
router.get('/posts/:id/edit', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === id); 
  
    if (post) {
      res.render('edit', { post }); 
    } else {
      // Handle the case where the post is not found
      res.status(404).send('Post not found'); 
    }
  });
  
// Update route
router.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        posts[index].title = req.body.title;
        posts[index].content = req.body.content;
        res.redirect('/');
    } else {
        res.status(404).send('Post not found');
    }
  });

// Delete route
router.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    posts = posts.filter(post => post.id !== id);
    res.redirect('/');
  });

module.exports = router;