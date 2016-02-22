// var headers = {
//   "Access-Control-Allow-Origin": true
// }

var getTechies = function(success, fail){
  $.get({
    url: 'http://127.0.0.1:8000/api/techie',
    success: success,
    error: fail
  });
};
window.getTechies = getTechies;
