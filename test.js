const fetch = require('./fetch.js');

fetch('https://dog.ceo/api/breeds/image/random').then(function(response) {
    console.log(response);
}).catch(function(err) {
    console.log(err);
});