const expect = require('chai').expect;
const AlbumGenerator = require('../albumGenerator');

// When class instantiated with parameters, the values
// should be saved as part of the class.

// When setArtist is invoked, the ending value should be
// different from the initial value, and it should be a string.

// When setSong is invoked, the ending value should be
// different from the initial value, and it should be a string.

// When setPlayTime is invoked, the ending value should be
// different from the initial value, and it should be a number.

describe('AlbumGenerator', () => {
    describe('#Getters', () => {
        it('should display the value of artist', () => {
            const myAlbum = generateAlbum();
            expect(myAlbum.getArtist()).to.be.equal('Artist');
        });

        it('should display the value of song', () => {
            const myAlbum = generateAlbum();
            expect(myAlbum.getSong()).to.be.equal('Song');
        });

        it('should display the value of playtime', () => {
            const myAlbum = generateAlbum();
            expect(myAlbum.getPlayTime()).to.be.equal(300);
        });

        it('should display the value of createdAt', () => {
            const myAlbum = generateAlbum();
            expect(myAlbum.getCreatedAt()).to.not.be.eql(null);
            expect(myAlbum.getCreatedAt()).to.be.a('string');
        });
    });


    describe('#Setters', () => {
        it('should change the value of artist with given value', () => {
            const myAlbum = new AlbumGenerator();
            expect(myAlbum.getArtist()).to.be.equal('');

            myAlbum.setArtist('Artist');
            expect(myAlbum.getArtist()).to.be.equal('Artist');
        });

        it('should change the value of song with given value', () => {
            const myAlbum = new AlbumGenerator();
            expect(myAlbum.getSong()).to.be.equal('');

            myAlbum.setSong('Song');
            expect(myAlbum.getSong()).to.be.equal('Song');
        });

        it('should change the value of playtime with given value', () => {
            const myAlbum = new AlbumGenerator();
            expect(myAlbum.getPlayTime()).to.be.equal(-1);

            myAlbum.setPlayTime(500);
            expect(myAlbum.getPlayTime()).to.be.equal(500);
        });
    });

    describe('#instatiation', () => {
        it('should generate the Album with empty values', () => {
            const myAlbum = new AlbumGenerator();

            expect(myAlbum.getArtist()).to.be.equal('');
            expect(myAlbum.getSong()).to.be.equal('');
            expect(myAlbum.getPlayTime()).to.be.equal(-1);

        });

        it('should generate the Album with the given values', () => {
            const myAlbum = generateAlbum();

            expect(myAlbum.getArtist()).to.be.equal('Artist');
            expect(myAlbum.getSong()).to.be.equal('Song');
            expect(myAlbum.getPlayTime()).to.be.equal(300);
        });
    });

    describe('#toJSON', () => {
        // TODO: Test that JSON returns all the data
    });
});

const generateAlbum = (params) => {
    return new AlbumGenerator(params ? params : {
        artist: 'Artist',
        song: 'Song',
        playTime: 300,
    });
};
