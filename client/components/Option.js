var hashHistory = window.ReactRouter.hashHistory;
/* This file has the option function that will redirect the page(using hashHistory) to social media or ihavetech or
  dontknow page depending on what the user clicks.
  -if the question has a value true for ajaxcall(see: util.js), the loadtechies function is invoked or else changeQuestion function is invoked */
var Option = ({newQuestion, text, changeQuestion, loadTechies, ajaxCall}) => (
  <div className="option container">
    <div className="row lg">
      <div className="span12">
  <li onClick={function(){
    if(newQuestion === 'iHaveTech') {
      hashHistory.push('/login');
    } else if(newQuestion === 'socialMedia'){
      hashHistory.push('/socialmedia');
    } else if(newQuestion === 'dontknow'){
      hashHistory.push('/dontknow');
    } else {
      ajaxCall ? loadTechies(newQuestion) : changeQuestion(newQuestion)
    }
  }}><a className="btn btn-primary btn-lg container">{text} {ajaxCall ? <span className="glyphicon glyphicon-info-sign"></span> : undefined}</a></li>
    {ajaxCall ? <small className="option">{tips[newQuestion]}</small> : undefined}
      </div>
    </div>
  </div>

);
window.Option = Option;
