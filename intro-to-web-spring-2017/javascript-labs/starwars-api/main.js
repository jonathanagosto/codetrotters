$(document).ready(function() {
    $.get("http://swapi.co/api/films/", null, function(data, textStatus, jqXHR) {
        var movies = data.results;
        // Object iteration
        movies.forEach(function(movie) {
            $('#movies-list').append(`<li>${movie.title} - ${movie.release_date}</li>`);
        });

        // For-loop iteration (classic)
        for(var i = 0; i < movies.length; i++) {
            $('#movies-list').append(`<li>${movies[i].title}</li>`);
        }
    });
});
