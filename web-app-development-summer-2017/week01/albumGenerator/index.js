const AlbumGenerator = require('./albumGenerator');

const myAlbum = new AlbumGenerator({
    artist: 'Jonathan',
    song: 'My Song',
    playTime: 180  // 3 minutes
});

myAlbum.toJSON();
