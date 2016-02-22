var Option = ({newQuestion, text, changeQuestion}) => (
  <li onClick={function(){changeQuestion(newQuestion)}}>{text}</li>
);
window.Option = Option;