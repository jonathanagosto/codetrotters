const moment = require('moment');

function AlbumGenerator(params) {
    params = params || {};

    let _artist = params.artist || '';
    let _song = params.song || '';
    let _playTime = params.playTime || -1;
    const createdAt = moment(Date.now()).format('LLL');

    const getArtist = (artist) => {
        return _artist;
    };

    const setArtist = (artist) => {
        _artist = artist;
    };

    const getSong = (song) => {
        return _song;
    };

    const setSong = (song) => {
        _song = song;
    };

    const getPlayTime = () => {
        return _playTime;
    };

    const setPlayTime = (playTime) => {
        _playTime = playTime;
    };

    const getCreatedAt = () => {
        return createdAt;
    }

    const toJSON = () => {
        console.log({
            artist: _artist,
            song: _song,
            playTime: _playTime,
            createdAt,
        })
    };

    return {
        getArtist,
        setArtist,
        getSong,
        setSong,
        getPlayTime,
        setPlayTime,
        getCreatedAt,
        toJSON,
    };
}

module.exports = AlbumGenerator;
