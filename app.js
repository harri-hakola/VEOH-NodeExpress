const express = require('express');
const PORT = process.env.PORT || 8080;

let app = express();

app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});



app.get('/', (req,res,next) => {
    res.send('Hello World!');
    //res.end();
});


app.use((req, res, next) => {
    console.log('404');
    res.status(404);
    res.send(`
        Page not found
    `);
    res.end();
});

app.listen(PORT);