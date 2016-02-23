var Question = ({question}) => (
  <div>
    <h1>{question.question}</h1>
    <ul>
      { question.options.map( (option) => (
         <li>{option}</li>
        ))
      }
    </ul>
  </div>
)
window.Question = Question;
