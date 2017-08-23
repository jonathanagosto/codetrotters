const getAlbumIndex = (albumId) => {
    const _albumId = parseInt(albumId, 10);
    
    return !isNaN(_albumId) ? _albumId - 1 : -1;
};

const generateAlbum = (albumQuantity) => {
    const albumsArr = [];
    for(var i = 0; i < albumQuantity; i += 1) {
        const num = i + 1;
        albumsArr.push({
            id: num,
            artist: `Artist Name ${num}`,
            album: `Album Name ${num}`,
            songs: _generateSongs(10),
        });
    }

    return albumsArr;
};

const _generateSongs = (songQuantity) => {
    const songsArr = [];
    for(var i = 0; i < songQuantity; i += 1) {
        const num = i + 1;
        songsArr.push({
            title: `Song #${num}`,
            duration: 240,
        });
    }

    return songsArr;
};

module.exports = {
    generateAlbum,
    getAlbumIndex,
};
