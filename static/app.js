function apiRequest(method, path, data, callback) {
  url = DOORKIT_URL + path;
  console.log(method, url);
  $.ajax({
    url: url,
    type: method,
    data: data ? JSON.stringify(data) : null,
    dataType: 'jsonp',
    success: function(data) { callback(null, data); },
    error: function(xhr, status, error) { callback(error, null); },
  });
}

function post(path, data, callback) {
  apiRequest('POST', path, data, callback);
}

function get(path, callback) {
  apiRequest('GET', path, null, callback)
}

function onDoorOpenClick() {
  get('/hello/world', function(err, result) {
    $('body').append('<pre>server says: ' + JSON.stringify(result) + '</pre>');
  });
}

$(function() {
  $('button').click(onDoorOpenClick);
})
