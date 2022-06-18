function getir(url, veri = null)
{
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest(); var method;
        if (veri == null) method = 'GET';
        else method = 'POST';
        xhr.open(method, window.location.origin + "/" + url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else { reject({ status: xhr.status, statusText: xhr.statusText }); }
        }; xhr.onerror = function () {
            reject({ status: xhr.status, statusText: xhr.statusText });
        }; if (veri == null) xhr.send();
        else xhr.send(JSON.stringify(veri));
    });
}