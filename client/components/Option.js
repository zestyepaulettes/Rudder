var Option = ({newQuestion, text, changeQuestion, method}) => (
  <li onClick={function(){method ? method(newQuestion) : changeQuestion(newQuestion)}}>{text}</li>
);
window.Option = Option;