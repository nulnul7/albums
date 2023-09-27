const express = require('express');
const {
    getAlbums,
    getAlbumById,
    createAlbum,
    deleteAlbum,
    updateAlbum
} = require('../controller/AlbumCtr');

const router = express.Router();

router.get('/', getAlbums);
router.get('/:id', getAlbumById);
router.post('/', createAlbum);
router.delete('/:id', deleteAlbum);
router.patch('/:id', updateAlbum);

module.exports = router;

