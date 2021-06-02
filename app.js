const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('ejs');
const { get } = require('lodash');
const { findById } = require('./models/blog');


//express app
const app = express();

//connect to mongo db

const dbURI = 'mongodb+srv://Samar:Godamchour1234@@cluster0.4vjyh.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) =>
        app.listen(3000))
    .catch((err) => {
        console.log(err);
    })

//register view engine
app.set('view engine', 'ejs');


//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// //mongoose and mongo sandboz routes
// //to add a new blog
// app.get('/add-blog', (req, res) => {

//     const blog = new Blog({
//         title: 'new blog-3',
//         snippet: 'about my new blog 3',
//         body: 'more about my new blog'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


// // to show all the blogs
//  app.get('/all-blogs', (req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
//  });

// //to show single blog
// app.get('/single-blog', (req,res)=>{
//     Blog.findById('60b603d257a460381817bcc1')
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
//  });


//middleware implemantation
// app.use((req, res, next) => {
// console.log('new request made');
// console.log('host: ', req.hostname);
// console.log('path: ', req.path);
// console.log('method: ', req.method);
// next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
//     });


//home page
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//about
app.get('/about', (req, res) => {

    res.render('about', { title: 'about' });
});

//blog route
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});


//creating blog 

app.get('/blogs/create/', (req, res) => {
    res.render('create', { title: 'create' });
});

//creating route parameter handler
app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{ blog: result, title: 'blog details'} )
    })
    .catch((err)=>{
        console.log(err);
    })
})






// //rediectt about-us to about page
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'error' });
})