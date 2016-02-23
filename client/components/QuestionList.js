var QuestionList = ({question, changeQuestion, loadTechies}) => {
  var arr = [];
  return (
  <div className="question-list">
    <h1>{question.question}</h1>
    <ul>
      {Object.keys(question.options).map((newQuestion, i)=> {
        return (<Option text={question.options[newQuestion]} newQuestion={newQuestion} changeQuestion={changeQuestion} loadTechies = {loadTechies} ajaxCall = {question.ajaxCall}/>)
      }
      )}
    </ul>
  </div>
)};
window.QuestionList = QuestionList;
