const express = require('express');


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000, () => {
    console.log('Listening in port 3000');
});

app.get('/', (req, res) => {
    const blogs = [
        { title: 'I am samar', snippet: 'hello samar ' },
        { title: 'I am RAm', snippet: 'hello Ram' },
        { title: 'I am shyam,', snippet: 'hello shyam' },
    ];
    // res.send('Hello home')
    res.render('index', { title: 'Home',blogs });
});

//about
app.get('/about', (req, res) => {

    res.render('about', { title: 'about' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'create' });
});

// //rediectt about-us to about page
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'error' });
})