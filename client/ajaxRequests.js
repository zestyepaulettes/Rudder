var getTechies = function(success, fail){
  $.get('/api/techie', successCallback, 'json')
  .fail(fail);
};
window.getTechies = getTechies;