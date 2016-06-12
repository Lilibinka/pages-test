
    function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        console.log(readBody(xhr));
    }
}
xhr.open('GET', 'http://www.google.com', true);
xhr.send(null);
    // document.getElementById("streamtest").innerHTML = readBody(xhr);



