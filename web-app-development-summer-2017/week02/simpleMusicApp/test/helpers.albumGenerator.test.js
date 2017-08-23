const expect = require('chai').expect;
const { generateAlbum, getAlbumIndex } = require('../helpers/albumGenerator');

describe('AlbumGenerator.js', function () {  // eslint-disable-line no-undef
    describe('#generateAlbum', function () {  // eslint-disable-line no-undef
        it('should generate a given amount of music albums', function () {  // eslint-disable-line no-undef
            const albums = generateAlbum(5);

            expect(albums).to.have.lengthOf(5);

            albums.forEach((album) => {
                expect(album).to.be.an('object');
                expect(album).to.have.property('artist');
                expect(album).to.have.property('album');
                expect(album).to.have.property('songs');
            });
        });

        it('albums object should contain the correct properties', function () {  // eslint-disable-line no-undef
            const albums = generateAlbum(5);

            albums.forEach((album) => {
                expect(album).to.be.an('object');
                expect(album).to.have.property('artist');
                expect(album).to.have.property('album');
                expect(album).to.have.property('songs');
            });
        });

        it('songs property should contain an array with objects', function () {  // eslint-disable-line no-undef
            const albums = generateAlbum(5);

            albums.forEach(({songs}) => {
                songs.forEach((song) => {
                    expect(song).to.be.an('object');
                    expect(song).to.have.property('title');
                    expect(song).to.have.property('duration');
                });
            });
        });
    });
    describe('#getAlbumIndex', function () {  // eslint-disable-line no-undef
        it('should return an integer if albumId is valid', function () {  // eslint-disable-line no-undef
            const albumIndex = getAlbumIndex(5);

            expect(albumIndex).to.equal(4);
        });

        it('should return -1 if albumId is not a number', function () {  // eslint-disable-line no-undef
            const albumIndex = getAlbumIndex("id");

            expect(albumIndex).to.equal(-1);
        });
    });
});

