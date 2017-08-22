var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function assignarg(src, target) {
    for (let key in src) {
        if (target.hasOwnProperty(key)) {
            src[key] = target[key];
        }
    }
    return src;
}

function fetch(url, obj = {}) {
    return new Promise((resolve, reject) => {
        let defaults = {
            method: 'GET',
            data: undefined,
            headers: undefined,
        };
        defaults = assignarg(defaults, obj);
        let xhr = new XMLHttpRequest();
        xhr.open(defaults.method, url, true);
        xhr.onload = function() {
            console.log('loaded');
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }
        };
        xhr.onerror = function() {
            console.log('error');
            reject(xhr.statusText)
        };
        if (defaults.data !== undefined) {
            xhr.send(defaults.data);
        } else {
            xhr.send();
        }
    });
}
module.exports = fetch;