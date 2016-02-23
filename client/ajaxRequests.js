var getTechies = function(success, fail) {
  $.get({
    url: 'http://127.0.0.1:8000/api/techie',
    success: success,
    error: fail
  });
};

var getTechiesByType = function(techieType, callback) {
  // console.log("Made it to the SEARCH! :D ", techieType);
  $.get({
    url: 'http://127.0.0.1:8000/api/techie/' + techieType,
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
    url: 'http://127.0.0.1:8000/api/techie',
    success: success,
    error: fail
  });
}

window.getTechies = getTechies;
window.getTechiesByType = getTechiesByType;

var signUpTechie = function(newTechieObject, success, fail){
  $.post({
    url: 'http://127.0.0.1:8000/api/techie',
    data: newTechieObject,
    success: success,
/* as a reminder, this is the success  and error callback we need in our app.js when we call it
   success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
*/
    error: fail,
  });
};
window.signUpTechie = signUpTechie;
