const fetch = require('./fetch.js');

fetch('https://dog.ceo/api/breeds/image/random').then(function(response) {
    console.log(response);
    if (response !== "") {
        process.exit(0);
    }
}).catch(function(err) {
    console.log(err);
    process.exit(1);
});