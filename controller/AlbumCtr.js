const { Album } = require('../models');
const path = require('path');

const getAlbums = async (req, res) => {
    try {
        const result = await Album.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};

const getAlbumById = async (req, res) => {
    try {
        const result = await Album.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message);
    }
};

const createAlbum = (req, res) => {
    if (req.files === null || req.files.file === undefined) return res.status(400).json({ msg: "no files upload" })
    const { singer, title } = req.body;
    const file = req.files.file;
    console.log(file, '<-- isi file ');
    const fileSize = file.data.length;
    const ext = path.extname(file.name);

    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
    const allowType = ['.png', `.jpg`, `.jpeg`, `.gif`];

    if (!allowType.includes(ext.toLocaleLowerCase())) return res.status(422).json({ msg: "format not Allowed" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "image should lower than 5 mb" });

    // memindahkan file ke folder images
    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message })
        try {
            await Album.create({
                singer: singer,
                title: title,
                image: fileName,
                url: url
            });
            res.status(201).json({ msg: "Product Created Succesfully" })
        } catch (error) {
            console.log(error.message);
        }
    })
};

const deleteAlbum = async (req, res) => {

};

const updateAlbum = async (req, res) => {

};

module.exports = {
    getAlbums,
    getAlbumById,
    createAlbum,
    deleteAlbum,
    updateAlbum
};