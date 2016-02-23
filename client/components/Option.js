var Option = ({newQuestion, text, changeQuestion, loadTechies, ajaxCall}) => (
  <li onClick={function(){ajaxCall ? loadTechies(newQuestion) : changeQuestion(newQuestion)}}>{text}</li>
);
window.Option = Option;