const request = require('request');

// request('https://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred 
//     console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
//     console.log('body:', body); // Print the HTML for the Google homepage. 
// });

// // Request to Github to my username
// request({
//     url: 'https://api.github.com/users/jonathanagosto',
//     headers: {
//         'Accept': 'application/vnd.github.v3+json',
//         'User-Agent': 'request'
//     }
// }, function (error, response, body) {
//     debugger;
//     console.log('error:', error); // Print the error if one occurred 
//     console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
//     console.log('body:', body); // Print the HTML for the Google homepage. 
// });
// Request to Github to 'expressjs' repos
// Request to Github to create a gist

request({
    url: 'https://api.github.com/gists',
    method: 'POST',
    headers: {
        'User-Agent': 'request'
    },
    form: JSON.stringify({
        "files": {
            "new_test.txt": {
                "content": "This is the test content"
            }
        },
        "description": "This is the test description",
        "public": false
    })
}, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response.statusCode); // Print the response status code if a response was received 
    console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage. 
});
