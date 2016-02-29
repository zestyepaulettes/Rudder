var getTechies = function(success, fail) {
  $.get({
    url: '/api/techie',
    success: success,
    error: fail
  });
};

var getTechiesByType = function(techieType, callback) {
  $.get({
    url: '/api/techie/' + techieType,
    success: callback,
    error: function(data){
      console.error(data);
    },
    data: {
      'techieType': techieType
    }
  });
};

var getAngelListData = function(success, fail) {
  $.get({
    url: '/api/techie',
    success: success,
    error: fail
  });
}

window.getTechies = getTechies;
window.getTechiesByType = getTechiesByType;

//singUp Techie makes an ajax post to server, which will then post to db
var signUpTechie = function(newTechieObject, success, fail){
  $.post({
    url: '/api/techie',
    data: newTechieObject,
    success: success,
    error: fail,
  });
};
window.signUpTechie = signUpTechie;
