var hashHistory = window.ReactRouter.hashHistory;

var Option = ({newQuestion, text, changeQuestion, loadTechies, ajaxCall}) => (
  <div className="option">
  <li onClick={function(){
    if(newQuestion === 'iHaveTech') {
      hashHistory.push('/login');
    } else if(newQuestion === 'socialMedia'){
      hashHistory.push('/socialmedia')
    } else {
      ajaxCall ? loadTechies(newQuestion) : changeQuestion(newQuestion)
    }
  }}><a className="btn btn-primary btn-lg">{text} {ajaxCall ? <span className="glyphicon glyphicon-info-sign"></span> : undefined}</a></li>
    {ajaxCall ? <small className="option">{tips[newQuestion]}</small> : undefined}
  </div>

);
window.Option = Option;
