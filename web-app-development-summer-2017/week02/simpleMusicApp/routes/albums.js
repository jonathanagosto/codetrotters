const express = require('express');
const router = express.Router();
const { generateAlbum, getAlbumIndex } = require('../helpers/albumGenerator');

const _albums = generateAlbum(25);

/* GET albums page. */
router.get('/', function (req, res, next) {
    res.render('albums_list', {
        data: _albums
    });
});

/* POST new album */
router.post('/', function (req, res, next) {
    const { artist: artistName, album: albumName } = req.body;
    
    const albumIndex = _albums.length;
    const album = generateAlbum(1)[0];
    album.id = albumIndex + 1;
    album.artist = artistName;
    album.album = albumName;
    _albums.push(album);

    res.render('albums_details', {
        data: _albums[albumIndex],
    });
});

/* GET new album page */
router.get('/new', function (req, res, next) {
    res.render('albums_create');
});

/* GET album details edit page */
router.get('/:albumId/edit', function (req, res, next) {
    const { albumId } = req.params;

    res.render('albums_edit', {
        data: _albums[getAlbumIndex(albumId)],
    }); 
});

/* POST edit album details (since PUT is not valid in a form, we use POST instead) */
router.post('/:albumId/edit', function (req, res, next) {
    const { albumId } = req.params;
    const { artist: artistName, album: albumName } = req.body;
    const albumIndex = getAlbumIndex(albumId);

    const album = _albums[albumIndex];
    album.artist = artistName;
    album.album = albumName;

    res.render('albums_details', {
        data: _albums[albumIndex],
    });
});

/* GET edit album details page */
router.get('/:albumId(\d+)', function (req, res, next) {
    const { albumId } = req.params;

    res.render('albums_details', {
        data: _albums[getAlbumIndex(albumId)],
    });
});

module.exports = router;
