const express = require('express');

const app = express();
app.use(express.json());

app.get('/home', (req, res) => {
    res.json('hello orange sunshine')
});

app.get('/*', (req, res) => {
    res.json('welcome to node server')
})

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})