var getTechies = function(success, fail) {
  $.get({
    url: 'http://127.0.0.1:8000/api/techie',
    success: success,
    error: fail
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
