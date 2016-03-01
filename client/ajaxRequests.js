/* This file handles all the ajax requests to the server and database. */

//This ajax requests is to fetch all the techies stored in database.
var getTechies = function(success, fail) {
  $.get({
    url: '/api/techie',
    success: success,
    error: fail
  });
};

//This ajax requests is used to get techies from databse that have a specific set of a skill(techieType)
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

//Todo: This ajax requests is sent to the angellist api to fetch data.
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
