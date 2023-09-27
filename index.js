const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const db = require('./models');
const Album = require('./route/AlbumRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());


app.get('/', (req, res) => {
    res.send('<h1>Hello orange sunshine...</h1>')
});

app.use(express.static('public'))
app.use('/albums', Album)

const port = process.env.PORT || 5001;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server running WELL ${port}`)
    })
})